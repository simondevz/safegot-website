"use client";

import { useEffect, useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const testimonial = testimonials[activeTestimonial];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const showTestimonial = (index: number) => {
    setActiveTestimonial((index + testimonials.length) % testimonials.length);
  };

  const moveTestimonial = (direction: 1 | -1) => {
    showTestimonial(activeTestimonial + direction);
  };

  return (
    <section
      aria-label="Customer testimonials"
      className="mx-auto max-w-[940px] scroll-mt-[120px]"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SectionHeading
        align="center"
        eyebrow="Community voices"
        title="A clearer way to transact online"
        copy="Safegot is designed around the handoffs between buyers, sellers, and riders, with payment confirmation and delivery checks built into the process."
      />
      <div aria-label="Testimonials carousel" aria-roledescription="carousel" role="region">
        <DecoratedCard className="flex min-h-[297px] w-full flex-col items-center justify-center gap-[10px] rounded-[14px] px-6 py-8">
          <div
            aria-label={`Testimonial ${activeTestimonial + 1} of ${testimonials.length}`}
            aria-roledescription="slide"
            className="testimonial-slide flex w-full flex-col items-center"
            key={testimonial.name}
            role="group"
          >
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
          </div>
          <div className="flex w-full items-center justify-between" aria-label="Carousel controls">
            <button
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--panel-border)] text-xl text-[var(--panel-ink)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
              onClick={() => moveTestimonial(-1)}
              type="button"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--panel-border)] text-xl text-[var(--panel-ink)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
              onClick={() => moveTestimonial(1)}
              type="button"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </DecoratedCard>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Testimonials">
        {testimonials.map((item, index) => (
          <button
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={activeTestimonial === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-6 bg-[var(--green)]" : "w-2 bg-[var(--panel-faint)]"}`}
            key={item.name}
            onClick={() => showTestimonial(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
