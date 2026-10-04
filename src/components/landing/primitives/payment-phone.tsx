import { DecoratedCard } from "./decorated-card";

const checklist = [
  { label: "Payment secured for checkout", tone: "bg-[var(--green)]" },
  { label: "Seller notified to ship", tone: "bg-[var(--green)]" },
  { label: "Awaiting your confirmation", tone: "bg-[var(--panel-faint)]" },
] as const;

export function PaymentPhone() {
  return (
    <DecoratedCard className="flex h-[540px] w-[340px] max-w-full flex-col items-center justify-center gap-10 rounded-[20px] p-5">
      <div className="flex h-6 w-full items-center justify-between">
        <strong className="font-inter text-[14px] leading-[21px] font-bold text-[var(--panel-ink)]">
          Safegot Pay
        </strong>
        <span className="box-border flex h-6 items-center rounded-md border border-[var(--panel-glow)] px-2 py-[3px] font-['JetBrains_Mono',monospace] text-[10.5px] leading-4 font-normal text-[var(--green)]">
          Secure
        </span>
      </div>
      <div className="flex h-[106px] w-full flex-col gap-[3px] rounded-[10px] border border-[var(--panel-border)] bg-[var(--panel-soft)] p-4">
        <strong className="font-inter text-[14px] leading-[21px] font-semibold text-[var(--panel-ink)]">
          Air Max Premium
        </strong>
        <span className="font-['JetBrains_Mono',monospace] text-[17px] leading-[26px] font-normal text-[var(--green)]">
          ₦45,000.00
        </span>
        <span className="pt-px font-inter text-xs leading-[18px] font-normal text-[var(--panel-faint)]">
          Seller: @LagosStore
        </span>
      </div>
      <div className="flex w-full flex-col gap-2.5">
        {checklist.map(({ label, tone }) => (
          <div className="flex h-[19.5px] items-center gap-2" key={label}>
            <span className={`h-2 w-2 rounded-full ${tone}`} />
            <span className="font-inter text-[13px] leading-5 font-normal text-[var(--panel-muted)]">
              {label}
            </span>
          </div>
        ))}
      </div>
      <button
        className="flex h-[49px] w-full items-center justify-center rounded-[9px] bg-[var(--green)] px-[22px] py-3 text-center font-inter text-[14px] leading-[21px] font-semibold text-[var(--green-ink)]"
        type="button"
      >
        Confirm delivery
      </button>
    </DecoratedCard>
  );
}
