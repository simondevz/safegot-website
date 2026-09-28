type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-[52px] max-w-[760px]">
      <span className="mb-[17px] inline-flex items-center gap-[9px] font-inter text-xs font-bold uppercase tracking-[0.12em] text-[var(--green)] before:h-px before:w-5 before:bg-current before:content-['']">
        {eyebrow}
      </span>
      <h2 className="mb-4 max-w-[720px] text-[clamp(2.4rem,4.5vw,4rem)] leading-[0.99] tracking-[-0.07em]">
        {title}
      </h2>
      {copy && (
        <p className="max-w-[680px] text-[17px] leading-[1.6] text-[var(--muted)]">{copy}</p>
      )}
    </div>
  );
}
