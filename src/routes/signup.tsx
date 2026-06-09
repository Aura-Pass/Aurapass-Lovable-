import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticket, Megaphone } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — AuraPass" }] }),
  component: SignUpPage,
});

type Role = "attendee" | "organizer";

function SignUpPage() {
  const [role, setRole] = useState<Role>("attendee");

  return (
    <PageWrapper>
      <div className="flex items-center justify-center bg-[#F9FAFB] px-4 py-16">
        <Card className="w-full max-w-lg p-8">
          <h1 className="text-center text-2xl font-bold text-[#111827]">
            Create your account
          </h1>
          <p className="mt-1 text-center text-sm text-[#6B7280]">
            Join AuraPass and start accessing the moment.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Full name" placeholder="Adaeze Okafor" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Phone" type="tel" placeholder="+234 800 000 0000" />
            <Input label="Password" type="password" placeholder="At least 8 characters" />

            <div>
              <p className="mb-2 text-sm font-medium text-[#111827]">I'm signing up as a...</p>
              <div className="grid grid-cols-2 gap-3">
                <RoleCard
                  active={role === "attendee"}
                  onClick={() => setRole("attendee")}
                  icon={<Ticket className="h-5 w-5" />}
                  title="Attendee"
                  desc="Discover and buy tickets"
                />
                <RoleCard
                  active={role === "organizer"}
                  onClick={() => setRole("organizer")}
                  icon={<Megaphone className="h-5 w-5" />}
                  title="Organiser"
                  desc="Sell tickets to your events"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6B7280]">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#D946EF] hover:underline">
              Log in
            </Link>
          </p>
        </Card>
      </div>
    </PageWrapper>
  );
}

function RoleCard({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg border p-4 text-left transition-all duration-200",
        active
          ? "border-[#D946EF] bg-[#FDF4FF] ring-2 ring-[#D946EF]/20"
          : "border-[#E5E7EB] bg-white hover:border-[#D946EF]/60",
      )}
    >
      <div className={cn("inline-flex h-9 w-9 items-center justify-center rounded-md", active ? "bg-[#D946EF] text-white" : "bg-[#F3F4F6] text-[#6B7280]")}>{icon}</div>
      <p className="mt-3 text-sm font-semibold text-[#111827]">{title}</p>
      <p className="text-xs text-[#6B7280]">{desc}</p>
    </button>
  );
}
