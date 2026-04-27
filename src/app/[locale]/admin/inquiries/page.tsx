import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { formatDate } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AdminInquiriesPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));

  const [inquiries, totalCount] = await Promise.all([
    prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
        listing: { select: { id: true, title: true, seller: { select: { id: true, name: true } } } },
      },
    }),
    prisma.inquiry.count(),
  ]);

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Inquiries</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalCount} inquir{totalCount !== 1 ? "ies" : "y"} total
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                <th className="px-4 py-3 font-medium">User</th>
                <th className="px-4 py-3 font-medium">Listing</th>
                <th className="px-4 py-3 font-medium">Seller</th>
                <th className="px-4 py-3 font-medium">Message</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id} className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition">
                  <td className="px-4 py-3">
                    <Link href={`/admin/users/${inq.user.id}`} className="text-apple-black hover:text-apple-accent transition">
                      {inq.user.name ?? inq.user.email}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-medium text-apple-black">{inq.listing.title}</td>
                  <td className="px-4 py-3">
                    {inq.listing.seller ? (
                      <Link href={`/admin/users/${inq.listing.seller.id}`} className="text-apple-gray-700 hover:text-apple-accent transition">
                        {inq.listing.seller.name ?? "—"}
                      </Link>
                    ) : "—"}
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700 max-w-md truncate">{inq.message}</td>
                  <td className="px-4 py-3 text-apple-gray-500 whitespace-nowrap">{formatDate(inq.createdAt)}</td>
                  <td className="px-4 py-3">
                    <AdminDeleteButton resourceId={inq.id} resourceType="inquiry" compact />
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-apple-gray-500">
                    No inquiries found.
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
                <Link href={`/admin/inquiries?page=${page - 1}`} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
                  Previous
                </Link>
              )}
              {page < totalPages && (
                <Link href={`/admin/inquiries?page=${page + 1}`} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
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
