import { Footer } from "./layout/footer";
import { Navbar } from "./layout/navbar";
import { ScrollReveal } from "./primitives/scroll-reveal";
import { Breakthrough } from "./sections/breakthrough";
import { CommunityVoices } from "./sections/community-voices";
import { CommonQuestions } from "./sections/common-questions";
import { FinalCta } from "./sections/final-cta";
import { Friction } from "./sections/friction";
import { Hero } from "./sections/hero";
import { MarketFocus } from "./sections/market-focus";
import { SimpleWorkflows } from "./sections/simple-workflows";
import { TrustContrast } from "./sections/trust-contrast";

export function LandingPage() {
  return (
    <main id="top" className="text-[var(--ink)]">
      <Navbar />
      <div className="mx-auto flex max-w-[1403px] flex-col gap-[80px] px-10 pb-[120px] pt-[30px] max-tablet:gap-16 max-tablet:px-[22px] max-tablet:pb-[90px] max-tablet:pt-12 max-mobile:gap-12 max-mobile:pt-8">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Friction />
        </ScrollReveal>
        <ScrollReveal>
          <Breakthrough />
        </ScrollReveal>
        <ScrollReveal>
          <TrustContrast />
        </ScrollReveal>
        <ScrollReveal>
          <SimpleWorkflows />
        </ScrollReveal>
        <ScrollReveal>
          <CommunityVoices />
        </ScrollReveal>
        <ScrollReveal>
          <MarketFocus />
        </ScrollReveal>
        <ScrollReveal>
          <CommonQuestions />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCta />
        </ScrollReveal>
      </div>
      <Footer />
    </main>
  );
}
