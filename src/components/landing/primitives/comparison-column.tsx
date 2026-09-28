const advantages = [
  [
    "Bank-grade escrow vaults",
    "Payments sit in licensed trust accounts until the buyer confirms receipt.",
  ],
  [
    "Verified payment holds",
    "Sellers see confirmed, bank-verified funds — never a forwarded screenshot.",
  ],
  [
    "Automated fast payouts",
    "Funds release to the merchant automatically the moment delivery is verified.",
  ],
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
    <div className="rounded-[20px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-7 shadow-[var(--shadow)] backdrop-blur-xl">
      <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-[23px] text-sm font-bold text-[var(--muted)]">
        <span className={positive ? "text-xl text-[var(--green)]" : "text-xl text-[var(--danger)]"}>
          {positive ? "✓" : "✕"}
        </span>
        {positive ? "With Safegot" : "Without Safegot"}
      </div>
      {content.map(([title, copy]) => (
        <div
          className="grid grid-cols-[28px_1fr] gap-3.5 border-b border-[var(--border)] py-[23px] last:border-0 last:pb-0"
          key={title}
        >
          <span
            className={
              positive ? "text-[17px] text-[var(--green)]" : "text-[17px] text-[var(--danger)]"
            }
          >
            {positive ? "✓" : "✕"}
          </span>
          <div>
            <h3 className="mb-[7px] text-[15px]">{title}</h3>
            <p className="m-0 text-sm leading-[1.55] text-[var(--muted)]">{copy}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
