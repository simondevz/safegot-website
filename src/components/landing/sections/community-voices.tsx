import { SectionHeading } from "../primitives/section-heading";
export function CommunityVoices() {
  return (
    <section className="mx-auto mb-[170px] max-w-[940px] scroll-mt-[120px] max-tablet:mb-[120px]">
      <SectionHeading
        eyebrow="Community voices"
        title="People are already excited about safer online commerce"
        copy="Thousands of buyers and sellers have felt the friction of online transactions. Here's what people are saying about the trust Safegot is bringing."
      />
      <article className="relative rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[50px] shadow-[var(--shadow)] backdrop-blur-xl max-mobile:p-7">
        <span className="text-[70px] leading-[0.5] text-[var(--green)]">“</span>
        <blockquote className="my-[25px] mb-[35px] max-w-[760px] text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.35] tracking-[-0.04em]">
          This is exactly the protection online shopping has been missing. Last year I ordered a
          phone and received something completely different — the seller disappeared, and I had no
          way to recover my money.
        </blockquote>
        <div className="flex items-center gap-3">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[var(--green-soft)] text-xs font-extrabold text-[var(--green)]">
            SA
          </span>
          <div className="grid gap-1">
            <strong>Sarah A.</strong>
            <small className="text-[var(--muted)]">Buyer, Lagos</small>
          </div>
        </div>
      </article>
    </section>
  );
}
