import { ComparisonColumn } from "../primitives/comparison-column";
import { SectionHeading } from "../primitives/section-heading";
export function TrustContrast() {
  return (
    <section className="scroll-mt-[120px]" id="advantage">
      <SectionHeading
        align="center"
        eyebrow="Trust contrast"
        title="The Safegot trust advantage"
        copy="Comparing the stress of traditional social commerce to the confidence of a Safegot-protected sale."
      />
      <div className="flex justify-between gap-[18px]">
        <ComparisonColumn />
        <ComparisonColumn positive />
      </div>
    </section>
  );
}
