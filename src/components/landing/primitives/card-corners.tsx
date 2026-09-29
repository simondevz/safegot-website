export function CardCorners() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-1px] top-[-1px] z-10 h-[18px] w-[18px] rounded-tl-[0.5px] border-l-2 border-t-2 border-[var(--green)] opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-1px] right-[-1px] z-10 h-[18px] w-[18px] rounded-br-[0.5px] border-b-2 border-r-2 border-[var(--green)] opacity-70"
      />
    </>
  );
}
