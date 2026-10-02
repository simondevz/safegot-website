import { MarketCallout } from "../primitives/market-callout";
import { MarketShowcase } from "../primitives/market-showcase";
import { RoleFlowCard } from "../primitives/role-flow-card";
import { SectionHeading } from "../primitives/section-heading";

const marketSteps = [
  <>
    <span>Securing transactions between strangers on social media</span>
  </>,
  <>
    <span>No expensive developer integrations required for local vendors</span>
  </>,
  <>
    <span>Logistics integration that connects riders to transaction verification</span>
  </>,
];

export function MarketFocus() {
  return (
    <section className="scroll-mt-[120px]">
      <div className="flex w-full items-center justify-between gap-5 max-tablet:flex-col">
        <div className="flex w-full max-w-[773px] flex-col">
          <SectionHeading
            className="max-w-[621px]"
            marginBottom="mb-0"
            copy="Commerce is moving faster than the systems built to support it."
            copyColor="var(--green)"
            eyebrow="The market focus"
            title="The trust layer for Africa’s digital commerce."
          />
          <RoleFlowCard
            copy="Social selling is growing quickly. Buyers and sellers transact through chat windows, DMs, and marketplace listings, but the payment and delivery handoff still needs a clearer layer of trust."
            id="market-stats"
            steps={marketSteps}
            stepTextClassName="flex items-center font-inter text-[16px] leading-[22px] font-normal text-[var(--ink)]"
          />
          <MarketCallout />
        </div>
        <MarketShowcase />
      </div>
    </section>
  );
}
