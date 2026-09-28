export type Stat = { value: string; label: string };

type StatStripProps = {
  items?: Stat[];
};

export function StatStrip({ items = [] }: StatStripProps) {
  return (
    <div className="mt-5 mb-[150px] grid max-w-[560px] grid-cols-3 max-tablet:my-[75px] max-tablet:mb-[120px] max-mobile:grid-cols-1 max-mobile:gap-[22px]">
      {items.map((stat) => (
        <div className="grid gap-[4px]" key={stat.label}>
          <strong className="text-[37px] tracking-[-0.07em] text-[var(--green)]">
            {stat.value}
          </strong>
          <span className="text-[13px] leading-[1.35] text-[var(--muted)] max-w-[106px]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
