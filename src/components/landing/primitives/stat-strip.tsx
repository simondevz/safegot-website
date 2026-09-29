export type Stat = { value: string; label: string };

type StatStripProps = {
  items?: Stat[];
};

export function StatStrip({ items = [] }: StatStripProps) {
  return (
    <div className="mt-[18px] grid w-full max-w-[560px] grid-cols-3 max-tablet:my-10 max-tablet:mb-0 max-mobile:gap-2 max-mobile:my-8">
      {items.map((stat) => (
        <div className="grid min-w-0 gap-[4px]" key={stat.label}>
          <span className="text-[34px] font-bold font-nunito text-[var(--green)]">
            {stat.value}
          </span>
          <span className="max-w-[115px] text-[14px] leading-[18.75px] text-[var(--muted)] max-mobile:max-w-full max-mobile:text-xs max-mobile:leading-4">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
