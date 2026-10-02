import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="inline-flex w-[130px] items-center" href="/" aria-label="Safegot home">
      <Image
        className="block h-auto w-full dark:hidden"
        src="/safegot.png"
        alt="Safegot"
        width={2172}
        height={724}
      />
      <Image
        className="hidden h-auto w-full dark:block"
        src="/safegot_dark.svg"
        alt=""
        aria-hidden="true"
        width={2172}
        height={724}
      />
    </Link>
  );
}
