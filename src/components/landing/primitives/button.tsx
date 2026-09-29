type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  children,
  href,
  secondary = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `inline-flex h-[52px] w-[203px] items-center justify-center gap-2 rounded-xl px-6 py-4 font-arial text-sm font-bold leading-5 tracking-[0.3%] capitalize transition duration-200 hover:-translate-y-0.5 ${secondary ? "border border-[var(--border)] bg-transparent text-[var(--ink)] hover:bg-[var(--surface)]" : "bg-[var(--green)] text-[var(--green-ink)] shadow-[0_10px_26px_var(--panel-glow)] hover:bg-[var(--green-strong)]"}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
