import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/dashboard/organiser")({
  head: () => ({ meta: [{ title: "Organiser Dashboard — AuraPass" }] }),
  component: () => (
    <ProtectedRoute allowedRoles={["organiser", "admin"]}>
      <OrganiserDashboard />
    </ProtectedRoute>
  ),
});

function OrganiserDashboard() {
  const { profile, user, signOut } = useAuth();

  if (profile && !profile.is_approved && profile.role === "organiser") {
    return (
      <PageWrapper>
        <div className="flex min-h-[80vh] items-center justify-center bg-white px-4 py-16">
          <Card
            className="w-full max-w-lg border-2 border-[#D946EF] p-10 text-center"
            style={{ borderRadius: 12 }}
          >
            <div className="flex justify-center">
              <Logo className="text-2xl" />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-[#111827]">
              Your account is under review
            </h1>
            <p className="mt-3 text-sm text-[#6B7280]">
              Our team is verifying your organiser account. You'll receive an email
              once you're approved — usually within 24 hours.
            </p>
            <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-left">
              <p className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
                Account
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111827]">
                {profile.full_name}
              </p>
              <p className="text-sm text-[#6B7280]">{user?.email}</p>
            </div>
            <Button
              variant="outline"
              size="md"
              className="mt-6 w-full"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          </Card>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
          <h1 className="text-2xl font-bold text-[#111827] md:text-3xl">
            Welcome back, {profile?.full_name || "Organiser"}
          </h1>
          <p className="mt-1 text-sm text-[#6B7280]">
            Manage your events and track your ticket sales.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Events Created" value="0" />
            <Stat label="Total Tickets Sold" value="0" />
            <Stat label="Revenue" value="₦0" />
            <Stat label="Upcoming Events" value="0" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-5" style={{ borderRadius: 12 }}>
      <p className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#111827]">{value}</p>
    </Card>
  );
}
