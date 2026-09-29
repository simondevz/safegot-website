import { ComparisonColumn } from "../primitives/comparison-column";
import { SectionHeading } from "../primitives/section-heading";
export function TrustContrast() {
  return (
    <section className="scroll-mt-[120px]" id="advantage">
      <SectionHeading
        eyebrow="Trust contrast"
        title="The Safegot trust advantage"
        copy="Comparing the stress of traditional social commerce to the confidence of a Safegot-protected sale."
      />
      <div className="grid grid-cols-2 gap-[18px] max-tablet:grid-cols-1">
        <ComparisonColumn />
        <ComparisonColumn positive />
      </div>
    </section>
  );
}
