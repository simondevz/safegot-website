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
    <section className="grid min-h-[580px] grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] items-center gap-[clamp(50px,8vw,150px)] max-tablet:grid-cols-1 max-tablet:gap-[55px]">
      <div className="max-w-[620px]">
        <h1 className="mb-5 mt-[25px] text-[clamp(3.3rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.07em] max-mobile:text-[3.35rem]">
          The trust layer for <em>African commerce.</em>
        </h1>
        <p className="max-w-[600px] text-lg leading-[1.55] text-[var(--muted)] max-mobile:text-base">
          Safegot holds payment in trust until delivery is confirmed so buyers stop sending money on
          faith, and sellers stop shipping on hope. Built for the way Africa actually sells: on
          WhatsApp, Instagram, and Marketplace.
        </p>
        <div className="my-[30px] mb-[15px] flex gap-3.5 max-mobile:flex-col max-mobile:items-stretch [&>a]:max-mobile:w-full">
          <Button>Join the waitlist</Button>
          <Button href="#how-it-works" secondary>
            See how it works
          </Button>
        </div>
        <small className="text-[13px] text-[var(--muted)]">
          No app download required to get started · Free during early access
        </small>
        <StatStrip items={stats} />
      </div>
      <div className="w-full max-w-[500px] justify-self-end">
        <EscrowDashboard />
      </div>
    </section>
  );
}
