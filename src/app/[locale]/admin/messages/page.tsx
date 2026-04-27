import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { formatDateTime } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AdminMessagesPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [conversations, totalCount] = await Promise.all([
    prisma.conversation.findMany({
      orderBy: { updatedAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      include: {
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            content: true,
            createdAt: true,
            readAt: true,
          },
        },
        _count: { select: { messages: true } },
      },
    }),
    prisma.conversation.count(),
  ]);

  // Fetch participant info for all conversations
  const participantIds = new Set<string>();
  conversations.forEach((c) => {
    participantIds.add(c.participant1);
    participantIds.add(c.participant2);
  });

  const participants = await prisma.user.findMany({
    where: { id: { in: Array.from(participantIds) } },
    select: { id: true, name: true, email: true },
  });

  const participantMap = new Map(participants.map((p) => [p.id, p]));
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  // Count unread messages per conversation
  const unreadCounts = await prisma.message.groupBy({
    by: ["conversationId"],
    where: {
      conversationId: { in: conversations.map((c) => c.id) },
      readAt: null,
    },
    _count: true,
  });
  const unreadMap = new Map(unreadCounts.map((u) => [u.conversationId, u._count]));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Messages</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalCount} conversation{totalCount !== 1 ? "s" : ""} total
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                <th className="px-4 py-3 font-medium">Participant 1</th>
                <th className="px-4 py-3 font-medium">Participant 2</th>
                <th className="px-4 py-3 font-medium text-center">Messages</th>
                <th className="px-4 py-3 font-medium text-center">Unread</th>
                <th className="px-4 py-3 font-medium">Last Message</th>
                <th className="px-4 py-3 font-medium">Last Activity</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {conversations.map((conv) => {
                const p1 = participantMap.get(conv.participant1);
                const p2 = participantMap.get(conv.participant2);
                const lastMsg = conv.messages[0];
                const unread = unreadMap.get(conv.id) ?? 0;

                return (
                  <tr key={conv.id} className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition">
                    <td className="px-4 py-3">
                      {p1 ? (
                        <Link href={`/admin/users/${p1.id}`} className="text-apple-black hover:text-apple-accent transition">
                          {p1.name ?? p1.email}
                        </Link>
                      ) : (
                        <span className="text-apple-gray-500">Deleted</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {p2 ? (
                        <Link href={`/admin/users/${p2.id}`} className="text-apple-black hover:text-apple-accent transition">
                          {p2.name ?? p2.email}
                        </Link>
                      ) : (
                        <span className="text-apple-gray-500">Deleted</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-apple-gray-700">{conv._count.messages}</td>
                    <td className="px-4 py-3 text-center">
                      {unread > 0 ? (
                        <span className="bg-apple-accent/10 text-apple-accent text-xs font-medium px-2 py-0.5 rounded-full">
                          {unread}
                        </span>
                      ) : (
                        <span className="text-apple-gray-500">0</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-apple-gray-700 max-w-xs truncate">
                      {lastMsg ? (lastMsg.content.length > 60 ? lastMsg.content.slice(0, 60) + "…" : lastMsg.content) : "—"}
                    </td>
                    <td className="px-4 py-3 text-apple-gray-500 whitespace-nowrap">
                      {lastMsg ? formatDateTime(lastMsg.createdAt) : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <AdminDeleteButton resourceId={conv.id} resourceType="conversation" compact />
                    </td>
                  </tr>
                );
              })}
              {conversations.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-apple-gray-500">
                    No conversations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-apple-gray-200">
            <p className="text-sm text-apple-gray-500">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link href={`/admin/messages?page=${page - 1}`} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
                  Previous
                </Link>
              )}
              {page < totalPages && (
                <Link href={`/admin/messages?page=${page + 1}`} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
