"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--border)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="border-b border-[var(--border)]" key={item.question}>
            <button
              className="flex w-full items-center justify-between border-0 bg-transparent py-6 text-left text-base font-bold text-[var(--ink)]"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-2xl font-normal text-[var(--green)]" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="mb-6 -mt-2 max-w-[760px] text-sm leading-[1.6] text-[var(--muted)]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
