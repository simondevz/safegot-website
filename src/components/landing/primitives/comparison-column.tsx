const advantages = [
  ["Protected payments", "Payments stay protected until the buyer confirms delivery."],
  [
    "Verified payment holds",
    "Sellers see confirmed, bank-verified funds — never a forwarded screenshot.",
  ],
  ["Payout after verification", "Funds are released to the merchant after delivery is verified."],
  [
    "Contactless handover",
    "Riders confirm delivery with a code — no cash changes hands on the route.",
  ],
] as const;

const risks = [
  [
    "Upfront payment fraud",
    "Buyers send cash blindly, risking package failure or blocked accounts by ghost vendors.",
  ],
  [
    "Fake bank alerts",
    "Sellers are targeted by fraudulent screenshots and notifications, releasing stock before real settlement.",
  ],
  [
    "High delivery rejections",
    "Buyers cancel orders mid-route or reject cash-on-delivery packages, forcing sellers to absorb courier fees.",
  ],
  [
    "Rider security hazards",
    "Dispatch riders carry physical cash, exposing routes and drop-off points to theft.",
  ],
] as const;

type ComparisonColumnProps = {
  positive?: boolean;
};

export function ComparisonColumn({ positive = false }: ComparisonColumnProps) {
  const content = positive ? advantages : risks;

  return (
    <DecoratedCard
      className="flex h-[480px] flex-1 flex-col px-7 py-7 max-tablet:h-auto max-tablet:min-h-[480px]"
      variant={positive ? "success" : "danger"}
    >
      <div className="flex h-10 items-center gap-2.5 pb-[22px] font-nunito text-[14px] leading-[17px] font-normal tracking-[1.15px] uppercase">
        <span className={positive ? "text-[var(--green)]" : "text-[var(--danger-strong)]"}>
          {positive ? "✓" : "✕"}
        </span>
        {positive ? "With Safegot" : "Without Safegot"}
      </div>
      {content.map(([title, copy]) => (
        <div
          className="flex min-h-[95px] items-center gap-3 border-t border-[var(--panel-divider)] py-[14px]"
          key={title}
        >
          <span
            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] leading-4 font-bold ${positive ? "bg-[var(--green-soft)] text-[var(--green)]" : "bg-[var(--danger-soft)] text-[var(--danger-strong)]"}`}
          >
            {positive ? "✓" : "✕"}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-[2.46px]">
            <h3 className="font-inter text-[18px] leading-[22px] font-semibold text-[var(--panel-ink)]">
              {title}
            </h3>
            <p className="m-0 font-inter text-[16px] leading-[21px] font-normal text-[var(--panel-muted)]">
              {copy}
            </p>
          </div>
        </div>
      ))}
    </DecoratedCard>
  );
}
import { DecoratedCard } from "./decorated-card";
