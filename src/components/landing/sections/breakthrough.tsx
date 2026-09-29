import { EscrowDashboard } from "../primitives/escrow-dashboard";
import { SectionHeading } from "../primitives/section-heading";
export function Breakthrough() {
  return (
    <section className="scroll-mt-[120px]" id="about">
      <SectionHeading
        eyebrow="The breakthrough"
        title="Meet Safegot"
        copy="Safegot holds funds securely in trust until delivery is verified, then releases payment automatically. We bridge the trust gap, so you can scale your business or shop without fear."
      />
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-5 max-tablet:grid-cols-1">
        <div className="flex min-h-[430px] flex-col justify-center rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[42px] shadow-[var(--shadow)] backdrop-blur-xl max-mobile:p-7">
          <span className="text-[clamp(5rem,12vw,9rem)] font-extrabold leading-[0.8] tracking-[-0.12em] text-[var(--green)]">
            0%
          </span>
          <p className="my-[26px] mb-[45px] text-[17px] text-[var(--muted)]">
            Payment scams on protected deals
          </p>
          <div className="grid grid-cols-2 gap-5 text-xs text-[var(--muted)] max-mobile:grid-cols-1">
            <span className="grid gap-[7px]">
              <b className="text-[22px] text-[var(--ink)]">10×</b>Faster checkout than manual
              transfer
            </span>
            <span className="grid gap-[7px]">
              <b className="text-[22px] text-[var(--ink)]">100%</b>Verified escrow on every order
            </span>
          </div>
        </div>
        <EscrowDashboard />
      </div>
    </section>
  );
}
