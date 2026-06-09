import { createFileRoute, Link } from "@tanstack/react-router";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Logo } from "@/components/layout/Logo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in — AuraPass" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center bg-[#F9FAFB] px-4 py-16">
        <Card className="w-full max-w-md p-8">
          <div className="flex justify-center">
            <Logo className="text-2xl" />
          </div>
          <h1 className="mt-6 text-center text-2xl font-bold text-[#111827]">Welcome back</h1>
          <p className="mt-1 text-center text-sm text-[#6B7280]">
            Log in to continue to your account.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Log In
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/" className="text-sm font-medium text-[#D946EF] hover:underline">
              Forgot password?
            </Link>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E5E7EB]" />
            <span className="text-xs text-[#6B7280]">OR</span>
            <div className="h-px flex-1 bg-[#E5E7EB]" />
          </div>

          <p className="text-center text-sm text-[#6B7280]">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-[#D946EF] hover:underline">
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </PageWrapper>
  );
}
