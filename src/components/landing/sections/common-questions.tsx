import { FaqAccordion, type FaqItem } from "../primitives/faq";
import { SectionHeading } from "../primitives/section-heading";

const faqs: FaqItem[] = [
  {
    question: "What exactly is Safegot and how does it protect my transaction?",
    answer:
      "Safegot is an escrow layer for social commerce. Funds move into a secure trust vault and release only once the buyer confirms delivery.",
  },
  {
    question: "Does it require a mobile app download to use?",
    answer:
      "No. Safegot works through a secure web link, so buyers and sellers can get started from the channels they already use.",
  },
  {
    question: "How does delivery verification work for dispatchers and couriers?",
    answer:
      "The buyer receives a delivery code and shares it only after inspecting the package. The rider enters the code to verify the handover.",
  },
  {
    question: "Are there any setup fees or hidden costs to join?",
    answer:
      "Safegot is free during early access. Any transaction fees are shown clearly before payment is confirmed.",
  },
  {
    question: "How does Safegot integrate with social selling channels like WhatsApp?",
    answer:
      "Sellers share a Safegot payment link in the same chat, DM, or marketplace listing where they already sell.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Your payment is held in escrow until the delivery step is verified, instead of being sent directly to an unknown seller.",
  },
];
export function CommonQuestions() {
  return (
    <section
      className="mx-auto mb-[170px] max-w-[960px] scroll-mt-[120px] max-tablet:mb-[120px]"
      id="faqs"
    >
      <SectionHeading
        eyebrow="Common questions"
        title="Frequently asked questions"
        copy="Comparing the stress of traditional social commerce to the confidence of a Safegot-protected sale."
      />
      <FaqAccordion items={faqs} />
    </section>
  );
}
