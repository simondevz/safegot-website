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
  stepTextClassName = "font-inter text-[16px] leading-[22px] font-semibold text-white",
}: RoleFlowCardProps) {
  return (
    <article className="scroll-mt-[120px] w-full max-w-[773px]" id={id}>
      {title && (
        <h3 className="mb-[10px] font-inter text-[30px] leading-[22px] font-semibold text-white">
          {title}
        </h3>
      )}
      <p className="max-w-[688px] font-nunito text-[20px] leading-[26px] font-normal text-[#8FA3C4]">
        {copy}
      </p>
      <ol className="mt-[14px] flex max-w-[699px] list-none flex-col [&>li+li]:border-t [&>li+li]:border-[#344054]">
        {flowSteps.map((step, index) => (
          <li className="flex items-start gap-4 py-[18px] first:pt-0" key={index}>
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[rgba(18,183,106,0.35)] bg-transparent font-['JetBrains_Mono',monospace] text-xs leading-[18px] font-normal text-[var(--green)]">
              {index + 1}
            </span>
            <span className={stepTextClassName}>{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
