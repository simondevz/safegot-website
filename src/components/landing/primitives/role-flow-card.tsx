type RoleFlowCardProps = {
  id: string;
  role: string;
  title: string;
  copy: string;
  steps: string[];
};

export function RoleFlowCard({ id, role, title, copy, steps: flowSteps }: RoleFlowCardProps) {
  return (
    <article
      className="scroll-mt-[120px] rounded-[18px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[26px] shadow-[var(--shadow)] backdrop-blur-xl"
      id={id}
    >
      <span className="font-inter text-xs uppercase text-[var(--green)]">{role}</span>
      <h3 className="my-[13px] mb-2.5 text-[22px] tracking-[-0.04em]">{title}</h3>
      <p className="min-h-[68px] text-sm leading-[1.55] text-[var(--muted)]">{copy}</p>
      <ol className="mt-6 grid list-none gap-3 border-t border-[var(--border)] pt-5">
        {flowSteps.map((step, index) => (
          <li className="flex items-center gap-2.5 text-[13px] text-[var(--muted)]" key={step}>
            <span className="grid h-[23px] w-[23px] place-items-center rounded-full bg-[var(--green-soft)] text-[11px] font-bold text-[var(--green)]">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </article>
  );
}
