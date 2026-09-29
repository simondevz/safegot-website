"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex w-[925px] max-w-full flex-col items-center gap-2 pb-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className="flex w-full flex-col rounded-[10px] border border-[rgba(140,168,210,0.14)] bg-[rgba(18,37,66,0.35)]"
            key={item.question}
          >
            <button
              className="flex min-h-[72px] w-full items-center justify-between gap-6 border-0 bg-transparent px-7 py-6 text-left font-inter text-[18px] leading-6 font-semibold text-white"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="min-w-0 flex-1 break-words">{item.question}</span>
              <span
                className={`flex h-[46px] w-[48px] shrink-0 items-center justify-center font-['JetBrains_Mono',monospace] text-[35px] leading-[46px] font-bold text-[#17E9A8] transition-transform ${isOpen ? "rotate-45" : "rotate-180"}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="m-0 px-7 pb-6 font-inter text-[16px] leading-6 font-normal text-[#8FA3C4]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
