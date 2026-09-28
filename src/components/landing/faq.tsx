"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <div className="faq-list">{items.map((item, index) => { const isOpen = openIndex === index; return <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
    <button className="faq-question" type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{item.question}</span><span className="faq-symbol" aria-hidden="true">{isOpen ? "−" : "+"}</span></button>
    {isOpen && <p className="faq-answer">{item.answer}</p>}
  </div>; })}</div>;
}
