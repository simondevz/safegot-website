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
  const className = `inline-flex h-[52px] w-[203px] items-center justify-center gap-2 rounded-xl px-6 py-4 font-arial text-sm font-bold leading-5 tracking-[0.3%] capitalize transition duration-200 hover:-translate-y-0.5 ${secondary ? "border border-[#0B18301F] bg-transparent text-[#081B33] hover:bg-[var(--surface)] dark:border-[#344054] dark:text-white" : "bg-[#12B76A] text-white shadow-[0_10px_26px_rgba(18,183,106,0.2)] hover:bg-[#0fa15e] dark:text-[#04150C]"}`;

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
