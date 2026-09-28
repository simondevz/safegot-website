type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
};

export function Button({ children, href = "#waitlist", secondary = false }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-[50px] items-center justify-center gap-3.5 rounded-xl px-[22px] py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${secondary ? "border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--surface)]" : "bg-[var(--green)] text-white shadow-[0_10px_26px_rgba(18,183,106,0.2)] hover:bg-[#0fa15e]"}`}
      href={href}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
