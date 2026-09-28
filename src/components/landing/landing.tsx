import { Footer } from "./layout/footer";
import { Navbar } from "./layout/navbar";
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
      <div className="mx-auto max-w-[1403px] px-10 pb-[120px] pt-[30px] max-tablet:px-[22px] max-tablet:pb-[90px] max-tablet:pt-[70px]">
        <Hero />
        <Friction />
        <Breakthrough />
        <TrustContrast />
        <SimpleWorkflows />
        <CommunityVoices />
        <MarketFocus />
        <CommonQuestions />
        <FinalCta />
      </div>
      <Footer />
    </main>
  );
}
