import Image from "next/image";

export function EscrowDashboard() {
  return (
    <div className="mx-auto aspect-[500/418] w-full max-w-[500px] py-[40px] my-auto">
      <Image
        className="block h-auto w-full dark:hidden"
        src="/landing/escrow-card-light.svg"
        alt="Safegot escrow dashboard showing a secured payment and transaction statuses"
        width={500}
        height={418}
      />
      <Image
        className="hidden h-auto w-full dark:block"
        src="/landing/escrow-card-dark.svg"
        alt=""
        aria-hidden="true"
        width={500}
        height={418}
      />
    </div>
  );
}
