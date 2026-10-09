import { DecoratedCard } from "../primitives/decorated-card";
import { SectionHeading } from "../primitives/section-heading";

const showcaseStats = [
  {
    value: "PAY",
    label: "Payment confirmed before dispatch",
    valueClassName: "font-nunito",
    paddingClassName: "px-6",
  },
  {
    value: "CHECK",
    label: "Buyer inspects the delivery",
    valueClassName: "font-nunito",
    paddingClassName: "px-[26px]",
  },
  {
    value: "PAYOUT",
    label: "Payout eligibility follows delivery checks",
    valueClassName: "font-nunito",
    paddingClassName: "px-[26px]",
  },
] as const;

export function Breakthrough() {
  return (
    <section className="scroll-mt-[120px]" id="about">
      <SectionHeading
        align="center"
        eyebrow="The breakthrough"
        title="Meet Safegot"
        copy="Safegot confirms payments before dispatch and verifies delivery. Buyers get an inspection window; sellers can withdraw eligible payments after early confirmation or when the window ends without a dispute."
      />
      <div className="flex w-full items-center justify-between gap-5 max-tablet:flex-col">
        {showcaseStats.map((stat) => (
          <DecoratedCard
            className={`flex h-[138px] w-full max-w-[350px] flex-1 flex-col items-start gap-[10px] py-8 ${stat.paddingClassName}`}
            key={stat.value}
          >
            <span
              className={`flex h-10 w-full items-center text-[40px] leading-10 font-bold text-[var(--green)] ${stat.valueClassName}`}
            >
              {stat.value}
            </span>
            <span className="flex min-h-[22px] w-full items-center font-inter text-[16px] leading-[22px] font-normal text-[var(--muted)]">
              {stat.label}
            </span>
          </DecoratedCard>
        ))}
      </div>
    </section>
  );
}
