type RoleFlowCardProps = {
  id: string;
  role?: string;
  title?: string;
  copy: string;
  steps: React.ReactNode[];
  stepTextClassName?: string;
};

export function RoleFlowCard({
  id,
  title,
  copy,
  steps: flowSteps,
  stepTextClassName = "font-inter text-[16px] leading-[22px] font-semibold text-[var(--ink)]",
}: RoleFlowCardProps) {
  return (
    <article className="scroll-mt-[120px] mt-[20px] w-full max-w-[773px]" id={id}>
      {title && (
        <h3 className="mb-[30px] font-inter text-[30px] leading-[22px] font-semibold text-[var(--ink)] max-mobile:text-[26px] max-mobile:leading-8">
          {title}
        </h3>
      )}
      <p className="mb-[20px] max-w-[688px] font-nunito text-[20px] leading-[26px] font-normal text-[var(--muted)]">
        {copy}
      </p>
      <ol className="mt-[14px] flex max-w-[550px] list-none flex-col [&>li+li]:border-t [&>li+li]:border-[var(--border)]">
        {flowSteps.map((step, index) => (
          <li className="flex items-start gap-4 py-[18px] first:pt-0" key={index}>
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[var(--panel-glow)] bg-transparent font-['JetBrains_Mono',monospace] text-xs leading-[18px] font-normal text-[var(--green)]">
              {index + 1}
            </span>
            <span className={stepTextClassName}>{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
