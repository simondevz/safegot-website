"use client";

import { useState } from "react";
import { DecoratedCard } from "../primitives/decorated-card";
import { SectionHeading } from "../primitives/section-heading";

const testimonials = [
  {
    quote:
      "This is exactly the protection online shopping has been missing. Last year I ordered a phone and received something completely different — the seller disappeared, and I had no way to recover my money.",
    initials: "SA",
    name: "Sarah A.",
    role: "Buyer, Lagos",
  },
  {
    quote:
      "I can finally share a payment link without explaining why a customer should trust me. Safegot gives both sides confidence before the package leaves my shop.",
    initials: "CO",
    name: "Chidi O.",
    role: "Seller, Abuja",
  },
  {
    quote:
      "The delivery code makes handovers simple. I do not have to carry cash on my route, and buyers know their order is protected until they inspect it.",
    initials: "TM",
    name: "Tunde M.",
    role: "Rider, Ibadan",
  },
] as const;

export function CommunityVoices() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  return (
    <section className="mx-auto max-w-[940px] scroll-mt-[120px]">
      <SectionHeading
        align="center"
        eyebrow="Community voices"
        title="People are already excited about safer online commerce"
        copy="Thousands of buyers and sellers have felt the friction of online transactions. Here's what people are saying about the trust Safegot is bringing."
      />
      <DecoratedCard className="flex min-h-[297px] w-full flex-col items-center justify-center gap-[10px] rounded-[14px] px-6 py-8">
        <span className="font-sans text-[44px] leading-[44px] font-normal text-[var(--green)]">
          “
        </span>
        <blockquote
          aria-live="polite"
          className="w-full max-w-[779px] text-center font-inter text-[18px] leading-[31px] font-normal text-[var(--panel-ink)]"
        >
          {testimonial.quote}
        </blockquote>
        <div className="flex h-[54px] items-center justify-between gap-3 pt-[18.91px]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--green)] font-nunito text-base leading-5 font-bold text-[var(--green-ink)]">
            {testimonial.initials}
          </span>
          <div className="flex h-[39px] w-[86px] flex-col">
            <strong className="font-inter text-[16px] leading-5 font-semibold text-[var(--panel-ink)]">
              {testimonial.name}
            </strong>
            <small className="font-inter text-sm leading-[18px] font-normal text-[var(--panel-faint)]">
              {testimonial.role}
            </small>
          </div>
        </div>
      </DecoratedCard>
      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Testimonials">
        {testimonials.map((item, index) => (
          <button
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={activeTestimonial === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-6 bg-[var(--green)]" : "w-2 bg-[var(--panel-faint)]"}`}
            key={item.name}
            onClick={() => setActiveTestimonial(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
