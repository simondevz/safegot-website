import { DecoratedCard } from "./decorated-card";

export type Persona = { role: string; title: string; copy: string; symbol: string };

type PersonaCardProps = {
  persona: Persona;
};

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <DecoratedCard className="flex h-[283px] w-[350px] flex-col gap-[5px] px-6 py-[26px] max-tablet:w-full max-tablet:max-w-[350px] max-mobile:h-auto max-mobile:min-h-[283px]">
      <div className="grid h-[38px] w-[38px] place-items-center rounded-[9px] bg-[var(--green-soft)] text-[23px] text-[var(--green)]">
        {persona.symbol}
      </div>
      <span className="align-middle font-nunito text-[14px] leading-[16.5px] font-normal tracking-[1.1px] text-[var(--muted)] uppercase">
        {persona.role}
      </span>
      <h3 className="align-middle font-nunito text-[20px] leading-[28.5px] font-bold tracking-[-0.19px]">
        {persona.title}
      </h3>
      <p className="align-middle font-inter text-[16px] leading-[23.2px] font-normal tracking-[0%] text-[var(--muted)]">
        {persona.copy}
      </p>
    </DecoratedCard>
  );
}
