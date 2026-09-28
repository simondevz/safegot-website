type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "green" | "blue" | "gray";
};

export function StatusBadge({ children, tone = "green" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-[99px] px-[9px] py-1.5 font-sans text-[11px] font-bold ${tone === "blue" ? "bg-[color-mix(in_srgb,var(--blue)_15%,transparent)] text-[var(--blue)]" : tone === "gray" ? "bg-[color-mix(in_srgb,var(--muted)_12%,transparent)] text-[var(--muted)]" : "bg-[var(--green-soft)] text-[var(--green)]"}`}
    >
      <i className="h-[5px] w-[5px] rounded-full bg-current" />
      {children}
    </span>
  );
}
