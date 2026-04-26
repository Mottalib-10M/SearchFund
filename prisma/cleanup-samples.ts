/**
 * Deletes all sample/seed profiles (@example.com) from the database.
 * Real accounts created through the app are untouched.
 *
 * Run with:  npx tsx prisma/cleanup-samples.ts
 */
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const rawUrl = process.env.DATABASE_URL!;
const connectionString = rawUrl.replace(/\?.*$/, "");
const useSSL =
  rawUrl.includes("neon.tech") ||
  rawUrl.includes("supabase") ||
  rawUrl.includes("sslmode=require");

const pool = new pg.Pool({
  connectionString,
  ssl: useSSL ? { rejectUnauthorized: false } : undefined,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Find all sample users
  const sampleUsers = await prisma.user.findMany({
    where: { email: { contains: "@example.com" } },
    select: { id: true, name: true, email: true, role: true },
  });

  if (sampleUsers.length === 0) {
    console.log("No sample profiles found. Nothing to delete.");
    return;
  }

  console.log(`Found ${sampleUsers.length} sample profiles to delete:\n`);
  sampleUsers.forEach((u) =>
    console.log(`  ${u.role.padEnd(10)} ${u.name} (${u.email})`),
  );

  const sampleIds = sampleUsers.map((u) => u.id);

  // Delete dependent records that use ON DELETE RESTRICT
  const delConnections = await prisma.connection.deleteMany({
    where: { OR: [{ requesterId: { in: sampleIds } }, { receiverId: { in: sampleIds } }] },
  });
  console.log(`  Deleted ${delConnections.count} connections`);

  const delMessages = await prisma.message.deleteMany({
    where: { OR: [{ senderId: { in: sampleIds } }, { receiverId: { in: sampleIds } }] },
  });
  console.log(`  Deleted ${delMessages.count} messages`);

  const delNotifications = await prisma.notification.deleteMany({
    where: { userId: { in: sampleIds } },
  });
  console.log(`  Deleted ${delNotifications.count} notifications`);

  const delForumComments = await prisma.forumComment.deleteMany({
    where: { authorId: { in: sampleIds } },
  });
  console.log(`  Deleted ${delForumComments.count} forum comments`);

  const delForumPosts = await prisma.forumPost.deleteMany({
    where: { authorId: { in: sampleIds } },
  });
  console.log(`  Deleted ${delForumPosts.count} forum posts`);

  // Find listings owned by sample users
  const sampleListings = await prisma.listing.findMany({
    where: { sellerId: { in: sampleIds } },
    select: { id: true },
  });
  const sampleListingIds = sampleListings.map((l) => l.id);

  // Delete inquiries/saved on sample user listings + by sample users
  const delInquiries = await prisma.inquiry.deleteMany({
    where: { OR: [{ userId: { in: sampleIds } }, { listingId: { in: sampleListingIds } }] },
  });
  console.log(`  Deleted ${delInquiries.count} inquiries`);

  const delSaved = await prisma.savedListing.deleteMany({
    where: { OR: [{ userId: { in: sampleIds } }, { listingId: { in: sampleListingIds } }] },
  });
  console.log(`  Deleted ${delSaved.count} saved listings`);

  const delListings = await prisma.listing.deleteMany({
    where: { sellerId: { in: sampleIds } },
  });
  console.log(`  Deleted ${delListings.count} listings`);

  // Delete profiles
  await prisma.searcherProfile.deleteMany({ where: { userId: { in: sampleIds } } });
  await prisma.investorProfile.deleteMany({ where: { userId: { in: sampleIds } } });
  await prisma.sellerProfile.deleteMany({ where: { userId: { in: sampleIds } } });
  console.log(`  Deleted profiles`);

  // Delete auth records
  await prisma.session.deleteMany({ where: { userId: { in: sampleIds } } });
  await prisma.account.deleteMany({ where: { userId: { in: sampleIds } } });
  console.log(`  Deleted auth records`);

  // Now delete the users
  const { count } = await prisma.user.deleteMany({
    where: { email: { contains: "@example.com" } },
  });

  console.log(`\nDeleted ${count} sample profiles. Real accounts untouched.`);

  // Show remaining users
  const remaining = await prisma.user.findMany({
    select: { name: true, email: true, role: true },
  });
  console.log(`\n${remaining.length} real account(s) remaining:`);
  remaining.forEach((u) =>
    console.log(`  ${u.role.padEnd(10)} ${u.name} (${u.email})`),
  );
}

main()
  .catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
