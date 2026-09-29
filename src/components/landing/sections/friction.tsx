import { PersonaCard, type Persona } from "../primitives/persona-card";
import { SectionHeading } from "../primitives/section-heading";

const personas: Persona[] = [
  {
    role: "Buyers",
    title: "Pay and pray",
    symbol: "◆",
    copy: "Sending money before seeing the product often ends in package failure, incorrect goods, or a seller who goes dark after payment lands.",
  },
  {
    role: "Sellers",
    title: "Ship and hope",
    symbol: "◆",
    copy: "Releasing product without upfront certainty exposes sellers to fake alerts, disputed payments, and cancellations after the courier's gone.",
  },
  {
    role: "Riders",
    title: "Caught in the middle",
    symbol: "◆",
    copy: "With no formal system to hold cash on delivery, dispatch riders end up acting as cash collectors carrying the risk of every failed handoff.",
  },
];
export function Friction() {
  return (
    <section className="scroll-mt-[120px]" id="problem">
      <SectionHeading
        eyebrow="The friction"
        title="Online commerce in Africa still runs on trust gaps"
        copy="Social selling has unlocked micro-entrepreneurship for millions across WhatsApp, Instagram, and Marketplace. But transacting with strangers still means friction — for everyone in the chain."
      />
      <div className="flex justify-between gap-[18px] max-tablet:flex-col max-tablet:items-center">
        {personas.map((persona) => (
          <PersonaCard key={persona.role} persona={persona} />
        ))}
      </div>
    </section>
  );
}
