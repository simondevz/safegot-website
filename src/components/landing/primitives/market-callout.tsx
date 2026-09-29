import { Button } from "./button";

export function MarketCallout() {
  return (
    <div className="flex w-full flex-col items-start gap-[10px]">
      <h3 className="font-inter text-[30px] leading-[22px] font-semibold text-white">
        Ready for commerce without risk?
      </h3>
      <p className="font-inter text-[20px] leading-[26px] font-normal text-[#8FA3C4]">
        Safegot bridges the gap between payment and delivery. Join other progressive sellers and
        buyers today.
      </p>
      <Button>Join the waitlist</Button>
    </div>
  );
}
