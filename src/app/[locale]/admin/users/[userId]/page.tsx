import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import {
  RoleBadge,
  VerificationBadge,
  ListingStatusBadge,
  ConnectionStatusBadge,
} from "../../_components/AdminBadges";
import {
  Section,
  formatDate,
  formatDateTime,
  formatCurrency,
} from "../../_components/AdminStatCard";
import { AdminDeleteButton } from "../../_components/AdminDeleteButton";
import { AdminDeactivateButton } from "../../_components/AdminDeactivateButton";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ userId: string }>;
}

export default async function AdminUserDetailPage({ params }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const { userId } = await params;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      searcherProfile: true,
      investorProfile: true,
      sellerProfile: true,
      listings: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          status: true,
          sector: true,
          country: true,
          askingPrice: true,
          createdAt: true,
          _count: { select: { inquiries: true, savedBy: true } },
        },
      },
      sentMessages: {
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
          id: true,
          content: true,
          createdAt: true,
          readAt: true,
          receiver: { select: { id: true, name: true, email: true } },
        },
      },
      receivedMessages: {
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
          id: true,
          content: true,
          createdAt: true,
          readAt: true,
          sender: { select: { id: true, name: true, email: true } },
        },
      },
      sentConnections: {
        orderBy: { createdAt: "desc" },
        include: {
          receiver: { select: { id: true, name: true, email: true, role: true } },
        },
      },
      receivedConnections: {
        orderBy: { createdAt: "desc" },
        include: {
          requester: { select: { id: true, name: true, email: true, role: true } },
        },
      },
      inquiries: {
        orderBy: { createdAt: "desc" },
        include: {
          listing: { select: { id: true, title: true } },
        },
      },
      savedListings: {
        orderBy: { createdAt: "desc" },
        include: {
          listing: { select: { id: true, title: true, status: true } },
        },
      },
      forumPosts: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          viewCount: true,
          createdAt: true,
          _count: { select: { comments: true } },
          category: { select: { name: true } },
        },
      },
      forumComments: {
        orderBy: { createdAt: "desc" },
        take: 20,
        select: {
          id: true,
          content: true,
          createdAt: true,
          post: { select: { id: true, title: true } },
        },
      },
      notifications: {
        orderBy: { createdAt: "desc" },
        take: 20,
      },
    },
  });

  if (!user) notFound();

  // Merge and sort messages
  const allMessages = [
    ...user.sentMessages.map((m) => ({
      ...m,
      direction: "sent" as const,
      otherParty: m.receiver,
    })),
    ...user.receivedMessages.map((m) => ({
      ...m,
      direction: "received" as const,
      otherParty: m.sender,
    })),
  ]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 50);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        href="/admin/users"
        className="text-sm text-apple-gray-500 hover:text-apple-black transition mb-4 inline-block"
      >
        ← Back to Users
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-apple-gray-200 flex items-center justify-center text-xl font-semibold text-apple-gray-500 shrink-0">
            {user.name
              ? user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)
              : "?"}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-semibold text-apple-black">
              {user.name ?? "No Name"}
            </h1>
            <p className="text-apple-gray-500">{user.email}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <RoleBadge role={user.role} />
              <VerificationBadge status={user.verificationStatus} />
              {!user.isActive && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                  INACTIVE
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 mt-3">
              <AdminDeactivateButton userId={user.id} isActive={user.isActive} />
              <AdminDeleteButton resourceId={user.id} resourceType="user" />
            </div>
          </div>
          <div className="text-right text-sm space-y-1 shrink-0">
            <div>
              <span className="text-apple-gray-500">Country: </span>
              <span className="text-apple-black">
                {user.country ?? "—"}
              </span>
            </div>
            <div>
              <span className="text-apple-gray-500">Registered: </span>
              <span className="text-apple-black">
                {formatDate(user.createdAt)}
              </span>
            </div>
            <div>
              <span className="text-apple-gray-500">Last Login: </span>
              <span className="text-apple-black">
                {formatDateTime(user.lastLoginAt)}
              </span>
            </div>
            {user.linkedinUrl && (
              <div>
                <a
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-accent hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
        {user.bio && (
          <p className="mt-4 text-sm text-apple-gray-700 border-t border-apple-gray-200 pt-4">
            {user.bio}
          </p>
        )}
      </div>

      {/* Role-specific profile */}
      {user.searcherProfile && (
        <Section title="Searcher Profile">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <ProfileField label="Search Type" value={user.searcherProfile.searchType.replace("_", " ")} />
            <ProfileField label="Status" value={user.searcherProfile.searchStatus.replace("_", " ")} />
            <ProfileField label="MBA School" value={user.searcherProfile.mbaSchool} />
            <ProfileField label="Target Sectors" value={user.searcherProfile.targetSectors.join(", ")} />
            <ProfileField label="Target Countries" value={user.searcherProfile.targetCountries.join(", ")} />
            <ProfileField label="Timeline" value={user.searcherProfile.acquisitionTimeline} />
            <ProfileField
              label="EBITDA Range"
              value={
                user.searcherProfile.targetEbitdaMin || user.searcherProfile.targetEbitdaMax
                  ? `${user.searcherProfile.targetEbitdaMin ? formatCurrency(user.searcherProfile.targetEbitdaMin) : "—"} – ${user.searcherProfile.targetEbitdaMax ? formatCurrency(user.searcherProfile.targetEbitdaMax) : "—"}`
                  : null
              }
            />
            <ProfileField label="Seeking Capital" value={user.searcherProfile.seekingCapital ? "Yes" : "No"} />
            {user.searcherProfile.capitalNeeded && (
              <ProfileField label="Capital Needed" value={formatCurrency(user.searcherProfile.capitalNeeded)} />
            )}
          </div>
          {user.searcherProfile.thesisDescription && (
            <div className="mt-4 pt-4 border-t border-apple-gray-200">
              <p className="text-xs text-apple-gray-500 uppercase font-medium mb-1">Thesis</p>
              <p className="text-sm text-apple-gray-700">{user.searcherProfile.thesisDescription}</p>
            </div>
          )}
        </Section>
      )}

      {user.investorProfile && (
        <Section title="Investor Profile">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <ProfileField label="Type" value={user.investorProfile.investorType.replace("_", " ")} />
            <ProfileField label="Firm" value={user.investorProfile.firmName} />
            <ProfileField label="Website" value={user.investorProfile.firmWebsite} />
            <ProfileField
              label="Ticket Size"
              value={
                user.investorProfile.ticketSizeMin || user.investorProfile.ticketSizeMax
                  ? `${user.investorProfile.ticketSizeMin ? formatCurrency(user.investorProfile.ticketSizeMin) : "—"} – ${user.investorProfile.ticketSizeMax ? formatCurrency(user.investorProfile.ticketSizeMax) : "—"}`
                  : null
              }
            />
            <ProfileField label="Target Sectors" value={user.investorProfile.targetSectors.join(", ")} />
            <ProfileField label="Target Countries" value={user.investorProfile.targetCountries.join(", ")} />
            <ProfileField label="Deals Invested" value={String(user.investorProfile.totalDealsInvested ?? 0)} />
            <ProfileField label="Value Add" value={user.investorProfile.valueAdd.join(", ")} />
          </div>
          {user.investorProfile.investmentThesis && (
            <div className="mt-4 pt-4 border-t border-apple-gray-200">
              <p className="text-xs text-apple-gray-500 uppercase font-medium mb-1">Investment Thesis</p>
              <p className="text-sm text-apple-gray-700">{user.investorProfile.investmentThesis}</p>
            </div>
          )}
        </Section>
      )}

      {user.sellerProfile && (
        <Section title="Seller Profile">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <ProfileField label="Company Role" value={user.sellerProfile.companyRole} />
            <ProfileField label="Public" value={user.sellerProfile.isPublic ? "Yes" : "No"} />
            <ProfileField label="Headline" value={user.sellerProfile.headline} />
          </div>
        </Section>
      )}

      <div className="mt-6 space-y-6">
        {/* Listings */}
        {user.listings.length > 0 && (
          <Section title={`Listings (${user.listings.length})`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                    <th className="pb-2 font-medium">Title</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Sector</th>
                    <th className="pb-2 font-medium">Country</th>
                    <th className="pb-2 font-medium">Price</th>
                    <th className="pb-2 font-medium text-center">Inq.</th>
                    <th className="pb-2 font-medium text-center">Saves</th>
                    <th className="pb-2 font-medium">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {user.listings.map((listing) => (
                    <tr key={listing.id} className="border-b border-apple-gray-100">
                      <td className="py-2 font-medium text-apple-black">
                        <Link href={`/admin/listings?q=${encodeURIComponent(listing.title)}`} className="hover:text-apple-accent">
                          {listing.title}
                        </Link>
                      </td>
                      <td className="py-2"><ListingStatusBadge status={listing.status} /></td>
                      <td className="py-2 text-apple-gray-700">{listing.sector}</td>
                      <td className="py-2 text-apple-gray-700">{listing.country}</td>
                      <td className="py-2 text-apple-gray-700">{listing.askingPrice ? formatCurrency(listing.askingPrice) : "—"}</td>
                      <td className="py-2 text-center text-apple-gray-700">{listing._count.inquiries}</td>
                      <td className="py-2 text-center text-apple-gray-700">{listing._count.savedBy}</td>
                      <td className="py-2 text-apple-gray-500">{formatDate(listing.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Messages */}
        {allMessages.length > 0 && (
          <Section title={`Messages (last 50)`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                    <th className="pb-2 font-medium">Dir.</th>
                    <th className="pb-2 font-medium">Other Party</th>
                    <th className="pb-2 font-medium">Content</th>
                    <th className="pb-2 font-medium">Read</th>
                    <th className="pb-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {allMessages.map((msg) => (
                    <tr key={msg.id} className="border-b border-apple-gray-100">
                      <td className="py-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${msg.direction === "sent" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>
                          {msg.direction === "sent" ? "→" : "←"}
                        </span>
                      </td>
                      <td className="py-2">
                        <Link
                          href={`/admin/users/${msg.otherParty.id}`}
                          className="text-apple-black hover:text-apple-accent transition"
                        >
                          {msg.otherParty.name ?? msg.otherParty.email}
                        </Link>
                      </td>
                      <td className="py-2 text-apple-gray-700 max-w-xs truncate">
                        {msg.content.length > 80 ? msg.content.slice(0, 80) + "…" : msg.content}
                      </td>
                      <td className="py-2 text-apple-gray-500">
                        {msg.readAt ? "✓" : "—"}
                      </td>
                      <td className="py-2 text-apple-gray-500 whitespace-nowrap">
                        {formatDateTime(msg.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Connections */}
        {(user.sentConnections.length > 0 || user.receivedConnections.length > 0) && (
          <Section
            title={`Connections (${user.sentConnections.length + user.receivedConnections.length})`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                    <th className="pb-2 font-medium">Dir.</th>
                    <th className="pb-2 font-medium">User</th>
                    <th className="pb-2 font-medium">Role</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Message</th>
                    <th className="pb-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {user.sentConnections.map((conn) => (
                    <tr key={conn.id} className="border-b border-apple-gray-100">
                      <td className="py-2 text-xs text-apple-gray-500">Sent</td>
                      <td className="py-2">
                        <Link href={`/admin/users/${conn.receiver.id}`} className="text-apple-black hover:text-apple-accent">
                          {conn.receiver.name ?? conn.receiver.email}
                        </Link>
                      </td>
                      <td className="py-2"><RoleBadge role={conn.receiver.role} /></td>
                      <td className="py-2"><ConnectionStatusBadge status={conn.status} /></td>
                      <td className="py-2 text-apple-gray-700 max-w-xs truncate">{conn.message ?? "—"}</td>
                      <td className="py-2 text-apple-gray-500">{formatDate(conn.createdAt)}</td>
                    </tr>
                  ))}
                  {user.receivedConnections.map((conn) => (
                    <tr key={conn.id} className="border-b border-apple-gray-100">
                      <td className="py-2 text-xs text-apple-gray-500">Received</td>
                      <td className="py-2">
                        <Link href={`/admin/users/${conn.requester.id}`} className="text-apple-black hover:text-apple-accent">
                          {conn.requester.name ?? conn.requester.email}
                        </Link>
                      </td>
                      <td className="py-2"><RoleBadge role={conn.requester.role} /></td>
                      <td className="py-2"><ConnectionStatusBadge status={conn.status} /></td>
                      <td className="py-2 text-apple-gray-700 max-w-xs truncate">{conn.message ?? "—"}</td>
                      <td className="py-2 text-apple-gray-500">{formatDate(conn.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Inquiries */}
        {user.inquiries.length > 0 && (
          <Section title={`Inquiries (${user.inquiries.length})`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                    <th className="pb-2 font-medium">Listing</th>
                    <th className="pb-2 font-medium">Message</th>
                    <th className="pb-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {user.inquiries.map((inq) => (
                    <tr key={inq.id} className="border-b border-apple-gray-100">
                      <td className="py-2 font-medium text-apple-black">{inq.listing.title}</td>
                      <td className="py-2 text-apple-gray-700 max-w-md truncate">{inq.message}</td>
                      <td className="py-2 text-apple-gray-500">{formatDate(inq.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Saved Listings */}
        {user.savedListings.length > 0 && (
          <Section title={`Saved Listings (${user.savedListings.length})`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                    <th className="pb-2 font-medium">Listing</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Note</th>
                    <th className="pb-2 font-medium">Saved At</th>
                  </tr>
                </thead>
                <tbody>
                  {user.savedListings.map((sl) => (
                    <tr key={sl.id} className="border-b border-apple-gray-100">
                      <td className="py-2 font-medium text-apple-black">{sl.listing.title}</td>
                      <td className="py-2"><ListingStatusBadge status={sl.listing.status} /></td>
                      <td className="py-2 text-apple-gray-700 max-w-xs truncate">{sl.note ?? "—"}</td>
                      <td className="py-2 text-apple-gray-500">{formatDate(sl.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Forum */}
        {(user.forumPosts.length > 0 || user.forumComments.length > 0) && (
          <Section title={`Forum Activity`}>
            {user.forumPosts.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">
                  Posts ({user.forumPosts.length})
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                      <th className="pb-2 font-medium">Title</th>
                      <th className="pb-2 font-medium">Category</th>
                      <th className="pb-2 font-medium text-center">Views</th>
                      <th className="pb-2 font-medium text-center">Comments</th>
                      <th className="pb-2 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.forumPosts.map((post) => (
                      <tr key={post.id} className="border-b border-apple-gray-100">
                        <td className="py-2 font-medium text-apple-black">{post.title}</td>
                        <td className="py-2 text-apple-gray-700">{post.category.name}</td>
                        <td className="py-2 text-center text-apple-gray-700">{post.viewCount}</td>
                        <td className="py-2 text-center text-apple-gray-700">{post._count.comments}</td>
                        <td className="py-2 text-apple-gray-500">{formatDate(post.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {user.forumComments.length > 0 && (
              <div>
                <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">
                  Comments (last 20)
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                      <th className="pb-2 font-medium">On Post</th>
                      <th className="pb-2 font-medium">Content</th>
                      <th className="pb-2 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.forumComments.map((comment) => (
                      <tr key={comment.id} className="border-b border-apple-gray-100">
                        <td className="py-2 font-medium text-apple-black">{comment.post.title}</td>
                        <td className="py-2 text-apple-gray-700 max-w-md truncate">
                          {comment.content.length > 80 ? comment.content.slice(0, 80) + "…" : comment.content}
                        </td>
                        <td className="py-2 text-apple-gray-500">{formatDate(comment.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Section>
        )}

        {/* Notifications */}
        {user.notifications.length > 0 && (
          <Section title={`Notifications (last 20)`}>
            <div className="space-y-2">
              {user.notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`flex items-start gap-3 text-sm p-3 rounded-lg ${notif.read ? "bg-white" : "bg-apple-gray-100"}`}
                >
                  <div className="flex-1">
                    <p className="font-medium text-apple-black">{notif.title}</p>
                    <p className="text-apple-gray-700">{notif.message}</p>
                  </div>
                  <span className="text-xs text-apple-gray-500 whitespace-nowrap">
                    {formatDateTime(notif.createdAt)}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Empty state if no activity at all */}
        {user.listings.length === 0 &&
          allMessages.length === 0 &&
          user.sentConnections.length === 0 &&
          user.receivedConnections.length === 0 &&
          user.inquiries.length === 0 &&
          user.savedListings.length === 0 &&
          user.forumPosts.length === 0 &&
          user.forumComments.length === 0 &&
          user.notifications.length === 0 && (
            <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
              <p className="text-apple-gray-500">
                No activity recorded for this user.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

function ProfileField({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div>
      <p className="text-xs text-apple-gray-500 uppercase font-medium">
        {label}
      </p>
      <p className="text-apple-black mt-0.5">{value || "—"}</p>
    </div>
  );
}
