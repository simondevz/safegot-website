type RoleFlowCardProps = {
  id: string;
  role: string;
  title: string;
  copy: string;
  steps: string[];
};

export function RoleFlowCard({ id, title, copy, steps: flowSteps }: RoleFlowCardProps) {
  return (
    <article className="scroll-mt-[120px] mt-[15px] w-full max-w-[773px]" id={id}>
      <h3 className="mb-[20px] font-inter text-[30px] leading-[22px] font-semibold text-white">
        {title}
      </h3>
      <p className="font-nunito text-[20px] leading-[26px] font-normal text-[#8FA3C4] max-w-[627px]">{copy}</p>
      <ol className="mt-[24px] flex list-none flex-col [&>li+li]:border-t [&>li+li]:border-[#344054] max-w-[550px]">
        {flowSteps.map((step, index) => (
          <li className="flex items-start gap-4 py-[18px] first:pt-0" key={step}>
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[rgba(18,183,106,0.35)] bg-transparent font-['JetBrains_Mono',monospace] text-xs leading-[18px] font-normal text-[var(--green)]">
              {index + 1}
            </span>
            <span className="font-inter text-[16px] leading-[22px] font-semibold text-white">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}
