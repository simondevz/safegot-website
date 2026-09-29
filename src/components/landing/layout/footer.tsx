import { Logo } from "../primitives/logo";

const productLinks = [
  ["How it works", "#how-it-works"],
  ["Why Safegot", "#advantage"],
  ["FAQs", "#faqs"],
  ["Join the waitlist", "#waitlist"],
] as const;

const legalLinks = [
  ["Terms", "#terms"],
  ["Privacy policy", "#privacy"],
] as const;

const resourceLinks = [
  ["FAQs", "#faqs"],
  ["Blog", "#blog"],
] as const;

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <nav className="flex flex-col items-start gap-[15px]" aria-label="Footer links">
      <span className="px-1 py-1 font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-ink)]">
        {title}
      </span>
      {links.map(([label, href]) => (
        <a
          className="px-1 py-1 font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)] hover:text-[var(--green)]"
          href={href}
          key={href}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

function ContactDetails() {
  return (
    <address className="ml-auto flex w-[250px] flex-col gap-[15px] pt-5 not-italic max-tablet:ml-0">
      <span className="font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-ink)]">Contact</span>
      <a
        className="font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)] hover:text-[var(--green)]"
        href="mailto:team@safegot.com"
      >
        team@safegot.com
      </a>
      <a
        className="font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)] hover:text-[var(--green)]"
        href="tel:+2347053111596"
      >
        07053111596
      </a>
      <span className="font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)]">
        No. 24, Bamidele Avi Street, Egbeda, Lagos State, Nigeria
      </span>
    </address>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--footer-border)] py-2.5">
      <div className="mx-auto grid min-h-[280px] w-full max-w-[1383px] grid-cols-[245px_minmax(0,1fr)_250px] items-start gap-10 px-7 max-tablet:flex max-tablet:flex-wrap max-tablet:justify-between max-tablet:gap-10 max-tablet:px-[22px] max-mobile:flex-col max-mobile:items-start max-mobile:py-8">
        <div className="flex h-[202px] w-[245px] flex-col gap-2.5 px-2.5 py-5 max-mobile:items-start">
          <Logo />
          <p className="flex h-[84px] w-[225px] items-center font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)]">
            Safegot holds funds in trust until delivery is verified , the trust layer for Africa’s
            digital commerce
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5">
          <LinkGroup links={productLinks} title="Product" />
          <LinkGroup links={resourceLinks} title="Resources" />
          <LinkGroup links={legalLinks} title="Legal" />
        </div>
        <ContactDetails />
      </div>
    </footer>
  );
}
