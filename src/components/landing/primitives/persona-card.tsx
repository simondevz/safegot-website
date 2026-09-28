export type Persona = { role: string; title: string; copy: string; symbol: string };

type PersonaCardProps = {
  persona: Persona;
};

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <article className="min-h-[300px] rounded-[18px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[26px] shadow-[var(--shadow)] backdrop-blur-xl">
      <div className="mb-[30px] grid h-12 w-12 place-items-center rounded-[14px] bg-[var(--green-soft)] text-[23px] text-[var(--green)]">
        {persona.symbol}
      </div>
      <span className="font-inter text-xs uppercase text-[var(--green)]">{persona.role}</span>
      <h3 className="my-[13px] mb-2.5 text-[23px] tracking-[-0.04em]">{persona.title}</h3>
      <p className="text-sm leading-[1.55] text-[var(--muted)]">{persona.copy}</p>
    </article>
  );
}
