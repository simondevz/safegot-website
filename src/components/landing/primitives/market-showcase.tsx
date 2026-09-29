import { DecoratedCard } from "./decorated-card";

export function MarketShowcase() {
  return (
    <DecoratedCard className="flex min-h-[242px] w-full max-w-[609px] flex-1 flex-col items-start gap-[6px] px-7 py-9">
      <div className="flex w-full flex-col items-center">
        <strong className="font-['JetBrains_Mono',monospace] text-[50px] leading-[69px] font-bold text-[var(--green)] [text-shadow:0_0_24px_var(--panel-glow)]">
          $40B+
        </strong>
        <span className="pb-2.5 font-['JetBrains_Mono',monospace] text-sm leading-[18px] font-normal tracking-[0.96px] text-[var(--panel-ink)] uppercase">
          Social commerce market
        </span>
        <p className="m-0 w-full border-t border-[var(--panel-border)] px-0 pt-4 text-center font-inter text-[16px] leading-[21px] font-normal text-[var(--panel-muted)]">
          Projected value of African online sales moving through social channels by 2030.
        </p>
      </div>
    </DecoratedCard>
  );
}
