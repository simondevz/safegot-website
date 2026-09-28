"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["How it works", "#how-it-works"],
  ["For sellers", "#sellers"],
  ["For buyers", "#buyers"],
  ["FAQs", "#faqs"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden max-tablet:block">
      <button
        className="grid gap-1.5 border-0 bg-transparent p-2 text-[var(--ink)]"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span className="block h-0.5 w-[25px] bg-[var(--ink)]" />
        <span className="block h-0.5 w-[25px] bg-[var(--ink)]" />
      </button>
      {open && (
        <div className="absolute right-0 top-[52px] grid w-[min(290px,calc(100vw-40px))] gap-[18px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
          {links.map(([label, href]) => (
            <a
              className="text-sm font-bold text-[var(--muted)]"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center justify-between gap-2.5 border-t border-[var(--border)] pt-3">
            <ThemeToggle />
            <a
              className="inline-flex min-h-[42px] items-center justify-center gap-3.5 rounded-xl bg-[var(--green)] px-[13px] py-2.5 text-xs font-bold text-white shadow-[0_10px_26px_rgba(18,183,106,0.2)]"
              href="#waitlist"
              onClick={() => setOpen(false)}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
