import { DecoratedCard } from "../primitives/decorated-card";
import { SectionHeading } from "../primitives/section-heading";

const showcaseStats = [
  {
    value: "0%",
    label: "Payment scams on protected deals",
    valueClassName: "font-nunito",
    paddingClassName: "px-6",
  },
  {
    value: "10×",
    label: "Faster checkout than manual transfer",
    valueClassName: "font-['JetBrains_Mono',monospace]",
    paddingClassName: "px-[26px]",
  },
  {
    value: "100%",
    label: "Verified escrow on every order",
    valueClassName: "font-['JetBrains_Mono',monospace]",
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
        copy="Safegot holds funds securely in trust until delivery is verified, then releases payment automatically. We bridge the trust gap, so you can scale your business or shop without fear."
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
            <span className="flex h-[22px] w-full items-center font-inter text-[16px] leading-[22px] font-normal text-[#8FA3C4]">
              {stat.label}
            </span>
          </DecoratedCard>
        ))}
      </div>
    </section>
  );
}
