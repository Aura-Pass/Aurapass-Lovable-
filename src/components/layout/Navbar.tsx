import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";

const LINKS = [
  { label: "Discover", to: "/events" as const },
  { label: "How It Works", to: "/" as const },
  { label: "For Organisers", to: "/" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-6">
        <Link to="/" className="flex items-center" aria-label="AuraPass home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-[#111827] transition-colors hover:text-[#D946EF]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#111827] hover:bg-[#F3F4F6] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#E5E7EB] bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#111827] hover:bg-[#F9FAFB]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-[#E5E7EB]">
              <Button asChild variant="outline" size="md">
                <Link to="/login" onClick={() => setOpen(false)}>Log In</Link>
              </Button>
              <Button asChild variant="primary" size="md">
                <Link to="/signup" onClick={() => setOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
