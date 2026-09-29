import { Button } from "../primitives/button";
import { DecoratedCard } from "../primitives/decorated-card";

export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1116px] scroll-mt-[120px]" id="waitlist">
      <DecoratedCard className="flex h-[214px] w-full flex-col items-center justify-center gap-[10px] rounded-[14px] px-9 pb-9 pt-[35px] max-mobile:h-auto max-mobile:px-[22px]">
        <h2 className="flex h-[30px] items-center text-center font-nunito text-[30px] leading-[29px] font-bold tracking-[-0.26px] text-[var(--panel-ink)]">
          Join 10,000+ people building safer commerce
        </h2>
        <p className="flex h-[39px] max-w-[640px] items-center pb-3 text-center font-inter text-[20px] leading-[26px] font-normal text-[var(--panel-muted)]">
          Free during early access · No app download required
        </p>
        <Button href="#waitlist">Join the waitlist</Button>
      </DecoratedCard>
    </section>
  );
}
