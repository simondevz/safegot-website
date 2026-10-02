import { Button } from "./button";

export function MarketCallout() {
  return (
    <div className="mt-[25px] flex w-full flex-col gap-[35px]">
      <h3 className="font-inter text-[30px] leading-[22px] font-semibold text-[var(--ink)] max-mobile:text-[26px] max-mobile:leading-8">
        Ready for a clearer way to transact?
      </h3>
      <p className="font-inter text-[20px] leading-[26px] font-normal text-[var(--muted)]">
        Safegot bridges the gap between payment and delivery. Start your next transaction with a
        clearer, safer process.
      </p>
      <Button href="https://app.safegot.com">Try Safegot</Button>
    </div>
  );
}
