type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-[52px] max-w-[760px]">
      <span className="mb-[17px] inline-flex items-center gap-[9px] align-middle font-nunito text-base font-normal leading-[18px] tracking-[1.68px] text-[var(--green)] uppercase before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#12B76A] before:shadow-[0_0_8px_0_#12B76A] before:content-['']">
        {eyebrow}
      </span>
      <h2 className="mb-4 max-w-[720px] align-middle font-nunito text-[50px] leading-[49.28px] font-bold tracking-[-0.44px]">
        {title}
      </h2>
      {copy && (
        <p className="max-w-[680px] align-middle font-inter text-[20px] leading-[26.4px] font-normal tracking-[0%] text-[#8FA3C4]">
          {copy}
        </p>
      )}
    </div>
  );
}
