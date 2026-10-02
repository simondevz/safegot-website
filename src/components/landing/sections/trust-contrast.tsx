import { ComparisonColumn } from "../primitives/comparison-column";
import { SectionHeading } from "../primitives/section-heading";
export function TrustContrast() {
  return (
    <section className="scroll-mt-[120px]" id="advantage">
      <SectionHeading
        align="center"
        eyebrow="Trust contrast"
        title="The Safegot trust advantage"
        copy="See how escrow, payment confirmation, and delivery verification create a clearer process for every side of a sale."
      />
      <div className="flex justify-between gap-[18px] max-tablet:flex-col">
        <ComparisonColumn />
        <ComparisonColumn positive />
      </div>
    </section>
  );
}
