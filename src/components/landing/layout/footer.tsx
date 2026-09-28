import { Logo } from "../primitives/logo";
export function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1383px] grid-cols-[1fr_auto_1fr] items-end gap-[35px] border-t border-[var(--border)] px-10 pb-[45px] pt-[34px] text-[var(--muted)] max-tablet:grid-cols-1 max-tablet:px-[22px] max-tablet:py-[30px]">
      <div>
        <Logo />
        <p className="mt-[13px] text-xs">The trust layer for Africa&apos;s digital commerce.</p>
      </div>
      <div className="flex gap-[22px] text-xs max-tablet:flex-wrap">
        <a className="hover:text-[var(--green)]" href="#how-it-works">
          How it works
        </a>
        <a className="hover:text-[var(--green)]" href="#advantage">
          Why Safegot
        </a>
        <a className="hover:text-[var(--green)]" href="#faqs">
          FAQs
        </a>
        <a className="hover:text-[var(--green)]" href="#waitlist">
          Join the waitlist
        </a>
      </div>
      <small className="justify-self-end text-[11px] max-tablet:justify-self-start">
        © 2026 Safegot. Built for safer commerce.
      </small>
    </footer>
  );
}
