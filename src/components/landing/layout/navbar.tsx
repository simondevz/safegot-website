import { Button } from "../primitives/button";
import { Logo } from "../primitives/logo";
import { MobileNav } from "../primitives/mobile-nav";
import { ThemeToggle } from "../primitives/theme-toggle";

const navLinks = [
  ["How it works", "#how-it-works"],
  ["For sellers", "#sellers"],
  ["For buyers", "#buyers"],
  ["FAQs", "#faqs"],
] as const;
export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] backdrop-blur-[18px]">
      <div className="mx-auto flex min-h-[88px] max-w-[1383px] items-center justify-between gap-10 px-7 py-[18px] max-tablet:px-[22px] max-tablet:py-[15px]">
        <Logo />
        <nav className="flex items-center gap-[34px] text-sm font-semibold text-[var(--muted)] max-tablet:hidden">
          {navLinks.map(([label, href]) => (
            <a className="hover:text-[var(--green)]" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5 max-tablet:hidden">
          <ThemeToggle />
          <Button>Join the waitlist</Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
