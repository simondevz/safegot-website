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
    <address className="ml-auto flex w-[250px] flex-col gap-[15px] pt-5 not-italic max-tablet:col-span-2 max-tablet:ml-0 max-tablet:w-full max-mobile:col-span-1">
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
      <div className="mx-auto grid min-h-[280px] w-full max-w-[1383px] grid-cols-[245px_minmax(0,1fr)_250px] items-start gap-10 px-7 max-tablet:min-h-0 max-tablet:grid max-tablet:grid-cols-2 max-tablet:gap-8 max-tablet:px-[22px] max-mobile:grid-cols-1 max-mobile:items-start max-mobile:gap-8 max-mobile:py-8">
        <div className="flex h-[202px] w-[245px] flex-col gap-2.5 px-2.5 py-5 max-tablet:h-auto max-tablet:w-full max-mobile:items-start max-mobile:px-0 max-mobile:py-0">
          <Logo />
          <p className="flex h-[84px] w-[225px] items-center font-inter text-[16px] leading-[21px] font-medium text-[var(--footer-muted)] max-mobile:h-auto max-mobile:w-full">
            Safegot holds funds in trust until delivery is verified , the trust layer for Africa’s
            digital commerce
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 max-tablet:flex-col max-tablet:items-start max-tablet:justify-start max-mobile:pt-0">
          <LinkGroup links={productLinks} title="Product" />
          <LinkGroup links={resourceLinks} title="Resources" />
          <LinkGroup links={legalLinks} title="Legal" />
        </div>
        <ContactDetails />
      </div>
    </footer>
  );
}
