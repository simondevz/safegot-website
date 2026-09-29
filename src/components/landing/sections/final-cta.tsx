import { Button } from "../primitives/button";
export function FinalCta() {
  return (
    <section
      className="mx-auto max-w-[1000px] scroll-mt-[120px] rounded-[28px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] px-10 py-[75px] text-center shadow-[var(--shadow)] backdrop-blur-xl max-mobile:px-[22px] max-mobile:py-[55px]"
      id="waitlist"
    >
      <span className="mb-[17px] inline-flex items-center gap-[9px] align-middle font-nunito text-base font-normal leading-[18px] tracking-[1.68px] text-[var(--green)] uppercase before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#12B76A] before:shadow-[0_0_8px_0_#12B76A] before:content-['']">
        Start with trust
      </span>
      <h2 className="mx-auto mb-[15px] max-w-[680px] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.08em]">
        Join 10,000+ people building safer commerce
      </h2>
      <p className="mb-7 text-[var(--muted)]">
        Free during early access · No app download required
      </p>
      <Button href="#waitlist">Join the waitlist</Button>
    </section>
  );
}
