"use client";

import { useState } from "react";
import { PaymentPhone } from "../primitives/payment-phone";
import { RoleFlowCard } from "../primitives/role-flow-card";
import { SectionHeading } from "../primitives/section-heading";

const workflows = [
  {
    id: "buyers",
    label: "For buyers",
    role: "For buyers",
    title: "Shop with more confidence",
    copy: "Buyers do not have to send money directly to an unfamiliar seller. When you check out through a Safegot link, your payment stays in escrow until you confirm the order is correct.",
    steps: [
      "Lock your payment securely via the checkout link",
      "Inspect the package the moment it arrives at your door",
      "Release funds with a verification code, only after you approve",
    ],
  },
  {
    id: "sellers",
    label: "For sellers",
    role: "For sellers",
    title: "Ship with payment confirmation",
    copy: "Create a payment link, share it where you sell, and only dispatch once Safegot confirms the buyer's funds are secured.",
    steps: [
      "Create a protected payment link",
      "See verified funds before dispatch",
      "Receive your payout after delivery",
    ],
  },
  {
    id: "riders",
    label: "For riders",
    role: "For riders",
    title: "Hand over without handling cash",
    copy: "The rider verifies the delivery code only after the buyer has received and inspected the package.",
    steps: [
      "Collect the dispatched package",
      "Deliver to the buyer's address",
      "Enter the buyer's verification code",
    ],
  },
] as const;

export function SimpleWorkflows() {
  const [activeWorkflow, setActiveWorkflow] = useState("buyers");
  const selectedWorkflow = workflows.find(({ id }) => id === activeWorkflow) ?? workflows[0];

  return (
    <section className="scroll-mt-[120px]" id="how-it-works">
      <div className="flex w-full items-end justify-between gap-[100px] max-tablet:flex-col max-tablet:items-center">
        <div className="flex w-full max-w-[773px] flex-1 flex-col gap-5">
          <SectionHeading
            className="max-w-[750px]"
            marginBottom="mb-[20px]"
            eyebrow="Simple workflows"
            title="How Safegot works for you"
            copy="We bridge the trust gap with a tailored flow for everyone in the commerce loop."
          />
          <div className="flex h-[74px] w-full max-w-[627px] items-center justify-between gap-10 rounded-xl border border-[var(--border)] p-2 max-mobile:grid max-mobile:h-auto max-mobile:grid-cols-3 max-mobile:gap-1">
            {workflows.map(({ id, label }) => (
              <button
                className={`flex h-[52px] min-w-0 flex-1 items-center justify-center rounded-xl px-6 py-4 font-arial text-sm leading-5 font-bold tracking-[0.003em] capitalize max-mobile:px-1 max-mobile:py-3 max-mobile:text-xs ${activeWorkflow === id ? "bg-[var(--green)] text-[var(--green-ink)]" : "text-[var(--muted)]"}`}
                key={id}
                onClick={() => setActiveWorkflow(id)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <RoleFlowCard
            copy={selectedWorkflow.copy}
            id={selectedWorkflow.id}
            role={selectedWorkflow.role}
            steps={[...selectedWorkflow.steps]}
            title={selectedWorkflow.title}
          />
        </div>
        <PaymentPhone />
      </div>
      {/* TODO: Replace tab switching with a scroll transition. */}
    </section>
  );
}
