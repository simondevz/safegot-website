import { Button } from "../primitives/button";
import { DecoratedCard } from "../primitives/decorated-card";

export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1116px] scroll-mt-[120px]" id="waitlist">
      <DecoratedCard className="flex h-[214px] w-full flex-col items-center justify-center gap-[10px] rounded-[14px] px-9 pb-9 pt-[35px] max-tablet:h-auto max-tablet:min-h-[214px] max-tablet:px-6 max-tablet:py-8 max-mobile:px-[22px]">
        <h2 className="flex h-[30px] items-center text-center font-nunito text-[30px] leading-[29px] font-bold tracking-[-0.26px] text-[var(--panel-ink)] max-tablet:h-auto max-tablet:text-[26px] max-tablet:leading-7 max-mobile:text-[22px] max-mobile:leading-6">
          Join 10,000+ people building safer commerce
        </h2>
        <p className="flex h-[39px] max-w-[640px] items-center pb-3 text-center font-inter text-[20px] leading-[26px] font-normal text-[var(--panel-muted)] max-tablet:h-auto max-tablet:text-[18px] max-tablet:leading-6 max-mobile:text-base max-mobile:leading-5">
          Free during early access · No app download required
        </p>
        <Button href="#waitlist">Join the waitlist</Button>
      </DecoratedCard>
    </section>
  );
}
