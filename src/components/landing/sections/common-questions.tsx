import { FaqAccordion, type FaqItem } from "../primitives/faq";
import { SectionHeading } from "../primitives/section-heading";

export const faqs: FaqItem[] = [
  {
    question: "What exactly is Safegot and how does it protect my transaction?",
    answer:
      "Safegot provides checkout links, payment confirmation before dispatch, and delivery verification. The seller can withdraw the order payment after early buyer confirmation or when the inspection window ends without a dispute.",
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
    answer: "Any transaction fees are shown clearly before payment is confirmed.",
  },
  {
    question: "How does Safegot integrate with social selling channels like WhatsApp?",
    answer:
      "Sellers share a Safegot payment link in the same chat, DM, or marketplace listing where they already sell.",
  },
  {
    question: "When can the seller withdraw the order payment?",
    answer:
      "The seller cannot withdraw the order payment before delivery checks are completed. After delivery, you can confirm early or report a problem during the inspection window. If the window ends without a dispute, the payment becomes available for withdrawal. Payout is paused while a dispute is reviewed.",
  },
];
export function CommonQuestions() {
  return (
    <section className="mx-auto max-w-[960px] scroll-mt-[120px]" id="faqs">
      <SectionHeading
        align="center"
        eyebrow="Common questions"
        title="Frequently asked questions"
        copy="Understand payment confirmation, delivery checks, and payout after delivery."
      />
      <FaqAccordion items={faqs} />
    </section>
  );
}
