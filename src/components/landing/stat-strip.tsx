export type Stat = { value: string; label: string };

type StatStripProps = {
  items?: Stat[];
};

export function StatStrip({ items = [] }: StatStripProps) {
  return (
    <div className="my-20 mb-[150px] grid max-w-[560px] grid-cols-3 max-[900px]:my-[75px] max-[900px]:mb-[120px] max-[560px]:grid-cols-1 max-[560px]:gap-[22px]">
      {items.map((stat) => (
        <div
          className="grid gap-[9px] border-r border-[var(--border)] pr-7 last:border-0 max-[560px]:border-b max-[560px]:border-r-0 max-[560px]:pb-5 [&+div]:pl-7 max-[560px]:[&+div]:pl-0"
          key={stat.label}
        >
          <strong className="text-[37px] tracking-[-0.07em] text-[var(--green)]">
            {stat.value}
          </strong>
          <span className="text-[13px] leading-[1.35] text-[var(--muted)]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
