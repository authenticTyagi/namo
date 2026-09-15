import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getDashboardCounts } from "@/db/queries/admin";
import { AdminNav } from "./AdminNav";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/admin/signin");
  if (session.user.role !== "admin") redirect("/admin/signin?error=forbidden");

  // Fetched here (not in AdminNav itself) so every admin page's nav shows a
  // live count without each page needing to remember to pass it down.
  const counts = await getDashboardCounts();
  const needsReview = counts.pendingReview + counts.pendingReviewEditorials + counts.pendingReviewComparisons;

  return (
    <div className="flex min-h-screen">
      <AdminNav
        userEmail={session.user.email ?? ""}
        needsReviewCount={needsReview}
        flaggedCommentsCount={counts.flaggedComments}
      />
      <main className="flex-1 p-6 sm:p-8">{children}</main>
    </div>
  );
}
