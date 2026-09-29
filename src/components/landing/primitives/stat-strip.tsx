export type Stat = { value: string; label: string };

type StatStripProps = {
  items?: Stat[];
};

export function StatStrip({ items = [] }: StatStripProps) {
  return (
    <div className="mt-[18px] grid max-w-[560px] grid-cols-3 max-tablet:my-[75px] max-tablet:mb-[120px] max-mobile:grid-cols-1 max-mobile:gap-[22px]">
      {items.map((stat) => (
        <div className="grid gap-[4px]" key={stat.label}>
          <span className="text-[34px] font-bold font-nunito text-[var(--green)]">
            {stat.value}
          </span>
          <span className="text-[14px] leading-[18.75px] text-[var(--muted)] max-w-[115px]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
