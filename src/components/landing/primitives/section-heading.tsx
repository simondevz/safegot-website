type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
  marginBottom?: string;
  copyColor?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className = "",
  marginBottom = "mb-[52px]",
  copyColor = "var(--muted)",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`${marginBottom} flex w-full flex-col ${alignment} ${className}`}>
      <span className="mb-[17px] inline-flex items-center gap-[9px] align-middle font-nunito text-base font-normal leading-[18px] tracking-[1.68px] text-[var(--green)] uppercase before:h-2.5 before:w-2.5 before:rounded-full before:bg-[var(--green)] before:shadow-[0_0_8px_0_var(--green)] before:content-['']">
        {eyebrow}
      </span>
      <h2 className="mb-4 max-w-[720px] align-middle font-nunito text-[50px] leading-[49.28px] font-bold tracking-[-0.44px] max-tablet:text-[40px] max-tablet:leading-10 max-mobile:text-[34px] max-mobile:leading-10 max-mobile:tracking-[-0.3px]">
        {title}
      </h2>
      {copy && (
        <p
          className="max-w-[680px] align-middle font-inter text-[20px] leading-[26.4px] font-normal tracking-[0%] max-tablet:text-[18px] max-tablet:leading-7 max-mobile:text-base max-mobile:leading-6"
          style={{ color: copyColor }}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
