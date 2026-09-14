import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AdminNav } from "./AdminNav";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/admin/signin");
  if (session.user.role !== "admin") redirect("/admin/signin?error=forbidden");

  return (
    <div className="flex min-h-screen">
      <AdminNav userEmail={session.user.email ?? ""} />
      <main className="flex-1 p-6 sm:p-8">{children}</main>
    </div>
  );
}
