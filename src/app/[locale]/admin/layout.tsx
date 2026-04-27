import AdminSidebar from "./_components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-apple-gray-100">
      <AdminSidebar />
      <div className="md:ml-60 pt-8 px-8 pb-8 min-h-[calc(100vh-3.5rem)]">
        {children}
      </div>
    </div>
  );
}
