import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const rawUrl = process.env.DATABASE_URL ?? "";
const connectionString = rawUrl.replace(/\?.*$/, "");
const useSSL = rawUrl.includes("supabase") || rawUrl.includes("sslmode=require");

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const pool = new pg.Pool({
    connectionString,
    ssl: useSSL
      ? process.env.NODE_ENV === "production"
        ? true
        : { rejectUnauthorized: false }
      : undefined,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
