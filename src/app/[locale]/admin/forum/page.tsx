import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { Section, formatDate } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminForumPage() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const [posts, comments, totalPosts, totalComments] = await Promise.all([
    prisma.forumPost.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        title: true,
        viewCount: true,
        isPinned: true,
        createdAt: true,
        author: { select: { id: true, name: true, email: true } },
        category: { select: { name: true } },
        _count: { select: { comments: true } },
      },
    }),
    prisma.forumComment.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        content: true,
        createdAt: true,
        author: { select: { id: true, name: true, email: true } },
        post: { select: { id: true, title: true } },
      },
    }),
    prisma.forumPost.count(),
    prisma.forumComment.count(),
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Forum</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalPosts} posts, {totalComments} comments
        </p>
      </div>

      {/* Posts */}
      <Section title={`Posts (${totalPosts})`}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                <th className="pb-2 font-medium">Title</th>
                <th className="pb-2 font-medium">Author</th>
                <th className="pb-2 font-medium">Category</th>
                <th className="pb-2 font-medium text-center">Views</th>
                <th className="pb-2 font-medium text-center">Comments</th>
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-apple-gray-100">
                  <td className="py-2 font-medium text-apple-black">
                    {post.isPinned && (
                      <span className="text-apple-warning mr-1" title="Pinned">
                        📌
                      </span>
                    )}
                    {post.title}
                  </td>
                  <td className="py-2">
                    <Link
                      href={`/admin/users/${post.author.id}`}
                      className="text-apple-gray-700 hover:text-apple-accent transition"
                    >
                      {post.author.name ?? post.author.email}
                    </Link>
                  </td>
                  <td className="py-2 text-apple-gray-700">{post.category.name}</td>
                  <td className="py-2 text-center text-apple-gray-700">{post.viewCount}</td>
                  <td className="py-2 text-center text-apple-gray-700">{post._count.comments}</td>
                  <td className="py-2 text-apple-gray-500">{formatDate(post.createdAt)}</td>
                  <td className="py-2">
                    <AdminDeleteButton resourceId={post.id} resourceType="forum-post" compact />
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-apple-gray-500">
                    No posts yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Comments */}
      <div className="mt-6">
        <Section title={`Recent Comments (${totalComments})`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                  <th className="pb-2 font-medium">Author</th>
                  <th className="pb-2 font-medium">On Post</th>
                  <th className="pb-2 font-medium">Content</th>
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr key={comment.id} className="border-b border-apple-gray-100">
                    <td className="py-2">
                      <Link
                        href={`/admin/users/${comment.author.id}`}
                        className="text-apple-gray-700 hover:text-apple-accent transition"
                      >
                        {comment.author.name ?? comment.author.email}
                      </Link>
                    </td>
                    <td className="py-2 font-medium text-apple-black">{comment.post.title}</td>
                    <td className="py-2 text-apple-gray-700 max-w-md truncate">
                      {comment.content.length > 80 ? comment.content.slice(0, 80) + "…" : comment.content}
                    </td>
                    <td className="py-2 text-apple-gray-500">{formatDate(comment.createdAt)}</td>
                    <td className="py-2">
                      <AdminDeleteButton resourceId={comment.id} resourceType="forum-comment" compact />
                    </td>
                  </tr>
                ))}
                {comments.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-apple-gray-500">
                      No comments yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
}
