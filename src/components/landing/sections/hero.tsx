import { Button } from "../primitives/button";
import { EscrowDashboard } from "../primitives/escrow-dashboard";
import { StatStrip, type Stat } from "../primitives/stat-strip";

const stats: Stat[] = [
  { value: "0%", label: "Payment scams reported" },
  { value: "10×", label: "Faster than bank transfer" },
  { value: "100%", label: "Verified escrow coverage" },
];
export function Hero() {
  return (
    <section className="flex h-fit justify-between max-tablet:flex-col max-tablet:gap-8">
      <div className="w-full max-w-[620px]">
        <h1 className="mb-5 mt-[25px] text-[64px] leading-[63px] font-bold tracking-[-0.07em] max-tablet:text-[52px] max-tablet:leading-[53px] max-mobile:text-[2.75rem] max-mobile:leading-[1.05]">
          The trust layer for <br />
          <span className="bg-[linear-gradient(90deg,#6FFFD1_20.67%,#12B76A_100%)] bg-clip-text text-transparent">
            African commerce.
          </span>
        </h1>
        <p className="max-w-[600px] text-[20px] leading-[28.9px] text-[var(--muted)] max-tablet:text-[18px] max-tablet:leading-7 max-mobile:text-base max-mobile:leading-6">
          Safegot holds payment in trust until delivery is confirmed so buyers stop sending money on
          faith, and sellers stop shipping on hope. Built for the way Africa actually sells: on
          WhatsApp, Instagram, and Marketplace.
        </p>
        <div className="my-[18px] flex gap-3.5 max-mobile:flex-col max-mobile:items-stretch [&>a]:max-mobile:w-full">
          <Button href="#waitlist">Join the waitlist</Button>
          <Button href="#how-it-works" secondary>
            See how it works
          </Button>
        </div>
        <small className="text-[13px] text-[var(--muted)]">
          No app download required to get started · Free during early access
        </small>
        <StatStrip items={stats} />
      </div>
      <div className="flex h-full w-full max-w-[500px] items-center self-stretch justify-self-end max-tablet:mx-auto max-tablet:min-h-0">
        <EscrowDashboard />
      </div>
    </section>
  );
}
