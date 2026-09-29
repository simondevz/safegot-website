type DecoratedCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "danger" | "success";
};

export function DecoratedCard({
  children,
  className = "",
  variant = "default",
}: DecoratedCardProps) {
  const borderColor = {
    default: "border-[#303D51]",
    danger: "border-[rgba(239,68,68,0.22)]",
    success: "border-[rgba(18,183,106,0.28)]",
  }[variant];

  return (
    <article
      className={`relative rounded-[14px] border ${borderColor} bg-[linear-gradient(180deg,rgba(26,51,87,0.55)_0%,rgba(18,37,66,0.55)_100%)] backdrop-blur-[6px] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-1px] top-[-1px] z-10 h-[18px] w-[18px] rounded-tl-[0.5px] border-l-2 border-t-2 border-[var(--green)] opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1px] right-[-1px] z-10 h-[18px] w-[18px] rounded-br-[0.5px] border-b-2 border-r-2 border-[var(--green)] opacity-70"
      />
      {children}
    </article>
  );
}
