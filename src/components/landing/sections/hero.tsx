import { Button } from "../primitives/button";
import { PaymentProtectionDashboard } from "../primitives/payment-protection-dashboard";
import { StatStrip, type Stat } from "../primitives/stat-strip";

const stats: Stat[] = [
  { value: "PAY", label: "Payment confirmed before dispatch" },
  { value: "CHECK", label: "Buyer inspects the delivery" },
  { value: "PAYOUT", label: "Payout eligibility follows delivery checks" },
];
export function Hero() {
  return (
    <section className="flex h-fit justify-between max-tablet:flex-col max-tablet:gap-8">
      <div className="w-full max-w-[620px]">
        <h1 className="mb-5 mt-[25px] text-[64px] leading-[63px] font-bold tracking-[-0.07em] max-tablet:text-[52px] max-tablet:leading-[53px] max-mobile:text-[2.75rem] max-mobile:leading-[48px]">
          The trust layer for <br />
          <span className="bg-[linear-gradient(90deg,#6FFFD1_20.67%,#12B76A_100%)] bg-clip-text text-transparent">
            African commerce.
          </span>
        </h1>
        <p className="max-w-[600px] text-[20px] leading-[28.9px] text-[var(--muted)] max-tablet:text-[18px] max-tablet:leading-7 max-mobile:text-base max-mobile:leading-6">
          Safegot confirms buyer payments before dispatch and tracks delivery so sellers know when
          an order is ready for payout. Built for the way Africa actually sells: on WhatsApp,
          Instagram, and Marketplace.
        </p>
        <div className="my-[18px] flex gap-3.5 max-mobile:flex-col max-mobile:items-stretch [&>a]:max-mobile:w-full">
          <Button href="https://app.safegot.com">Try Safegot</Button>
          <Button href="#how-it-works" secondary>
            See how it works
          </Button>
        </div>
        <small className="text-[13px] text-[var(--muted)]">
          Start from your browser · Fees are shown before payment
        </small>
        <StatStrip items={stats} />
      </div>
      <div className="flex h-full w-full max-w-[500px] items-center self-stretch justify-self-end max-tablet:mx-auto max-tablet:min-h-0">
        <PaymentProtectionDashboard />
      </div>
    </section>
  );
}
