import Link from "next/link";
import { Logo } from "../landing/primitives/logo";
import { ThemeToggle } from "../landing/primitives/theme-toggle";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, lastUpdated, intro, sections }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <header className="border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_84%,transparent)]">
        <div className="mx-auto flex min-h-[88px] max-w-[1080px] items-center justify-between gap-6 px-6 py-5 max-mobile:px-5">
          <Logo />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              className="rounded-xl bg-[var(--green)] px-5 py-3 text-sm font-bold text-[var(--green-ink)] shadow-[0_10px_26px_var(--panel-glow)] transition hover:bg-[var(--green-strong)]"
              href="https://app.safegot.com"
            >
              Try Safegot
            </a>
          </div>
        </div>
      </header>
      <article className="mx-auto w-full max-w-[900px] px-6 py-16 max-mobile:px-5 max-mobile:py-10">
        <Link className="mb-8 inline-flex text-sm font-semibold text-[var(--green)]" href="/">
          ← Back to Safegot
        </Link>
        <header className="mb-12 border-b border-[var(--border)] pb-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-[var(--green)] uppercase">
            Safegot Limited
          </p>
          <h1 className="mb-4 font-nunito text-5xl leading-tight font-bold max-mobile:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-[var(--muted)]">Last updated: {lastUpdated}</p>
        </header>
        <div className="space-y-9 font-inter text-base leading-7 text-[var(--muted)]">
          <p>{intro}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 font-nunito text-2xl leading-tight font-bold text-[var(--ink)]">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <footer className="mt-16 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          <p>
            Questions? Contact{" "}
            <a className="font-semibold text-[var(--green)]" href="mailto:team@safegot.com">
              team@safegot.com
            </a>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}
