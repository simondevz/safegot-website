import { SectionHeading } from "../primitives/section-heading";
export function MarketFocus() {
  return (
    <section className="scroll-mt-[120px]">
      <SectionHeading
        eyebrow="The market focus"
        title="The trust layer for Africa's digital commerce."
        copy="Commerce is moving faster than formal systems."
      />
      <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-[50px] max-tablet:grid-cols-1">
        <div>
          <p className="max-w-[650px] text-lg leading-[1.6] text-[var(--muted)]">
            Social selling is exploding — millions of buyers and sellers transact through chat
            windows, DM threads, and marketplace listings. The piece that&apos;s always been missing
            is trust.
          </p>
          <div className="mt-[35px] grid gap-[18px]">
            <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-mobile:grid-cols-[75px_1fr]">
              <b className="text-[19px] text-[var(--green)]">$40B+</b>Social commerce market
            </span>
            <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-mobile:grid-cols-[75px_1fr]">
              <b className="text-[19px] text-[var(--green)]">2×</b>Securing transactions between
              strangers on social media
            </span>
            <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-mobile:grid-cols-[75px_1fr]">
              <b className="text-[19px] text-[var(--green)]">0</b>No expensive developer
              integrations required for local vendors
            </span>
          </div>
        </div>
        <div className="grid min-h-[290px] content-center gap-5 rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-8 shadow-[var(--shadow)] backdrop-blur-xl">
          <span className="text-[70px] font-extrabold tracking-[-0.1em] text-[var(--green)]">
            $40B+
          </span>
          <span className="leading-[1.5] text-[var(--muted)]">
            Projected value of African online sales moving through social channels by 2030.
          </span>
        </div>
      </div>
    </section>
  );
}
