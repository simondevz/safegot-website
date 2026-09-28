import { RoleFlowCard } from "../primitives/role-flow-card";
import { SectionHeading } from "../primitives/section-heading";
import { StatusBadge } from "../primitives/status-badge";

const steps = [
  ["1", "Lock your payment securely via the checkout link"],
  ["2", "Inspect the package the moment it arrives at your door"],
  ["3", "Release funds with a verification code, only after you approve"],
] as const;
export function SimpleWorkflows() {
  return (
    <section className="mb-[170px] scroll-mt-[120px] max-tablet:mb-[120px]" id="how-it-works">
      <SectionHeading
        eyebrow="Simple workflows"
        title="How Safegot works for you"
        copy="We bridge the trust gap with a tailored flow for everyone in the commerce loop."
      />
      <div className="-mb-[38px] mt-[-20px] flex gap-[9px]">
        <a
          className="rounded-full border border-[var(--green)] px-4 py-2.5 text-[13px] text-[var(--green)]"
          href="#buyers"
        >
          For buyers
        </a>
        <a
          className="rounded-full border border-[var(--border)] px-4 py-2.5 text-[13px] text-[var(--muted)]"
          href="#sellers"
        >
          For sellers
        </a>
        <a
          className="rounded-full border border-[var(--border)] px-4 py-2.5 text-[13px] text-[var(--muted)]"
          href="#riders"
        >
          For riders
        </a>
      </div>
      <div className="grid grid-cols-2 items-center gap-[70px] max-tablet:grid-cols-1" id="buyers">
        <div>
          <h3 className="text-[30px] tracking-[-0.05em]">Shop with absolute peace of mind</h3>
          <p className="leading-[1.6] text-[var(--muted)]">
            Buyers no longer send money into uncertainty. When you check out on Instagram or
            WhatsApp, your funds sit in a secure trust vault, not the seller&apos;s pocket, until
            you confirm the order is correct.
          </p>
          <div className="mt-[30px] grid gap-[19px]">
            {steps.map(([number, text]) => (
              <div className="flex items-center gap-[15px]" key={number}>
                <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[var(--green-soft)] font-extrabold text-[var(--green)]">
                  {number}
                </span>
                <p className="m-0 text-sm text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[18px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-6 shadow-[var(--shadow)] backdrop-blur-xl">
          <div className="mb-[42px] flex items-center justify-between font-extrabold">
            Safegot Pay <StatusBadge>Secure</StatusBadge>
          </div>
          <div className="flex items-center justify-start gap-3 border-b border-[var(--border)] pb-6">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--green-soft)] text-[var(--green)]">
              ✦
            </div>
            <div className="grid gap-[5px]">
              <strong>Air Max Premium</strong>
              <span className="text-xs text-[var(--muted)]">Seller: @LagosStore</span>
            </div>
            <b className="ml-auto text-sm">₦45,000.00</b>
          </div>
          <div className="mt-[23px] grid gap-2.5">
            <StatusBadge>Payment secured in escrow</StatusBadge>
            <StatusBadge tone="blue">Seller notified to ship</StatusBadge>
            <StatusBadge tone="gray">Awaiting your confirmation</StatusBadge>
          </div>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-[18px] max-tablet:grid-cols-1">
        <RoleFlowCard
          id="sellers"
          role="For sellers"
          title="Ship with confirmed payment"
          copy="Create a payment link, share it where you sell, and only dispatch once Safegot confirms the buyer's funds are secured."
          steps={[
            "Create a protected payment link",
            "See verified funds before dispatch",
            "Receive your payout after delivery",
          ]}
        />
        <RoleFlowCard
          id="riders"
          role="For riders"
          title="Hand over without handling cash"
          copy="The rider verifies the delivery code only after the buyer has received and inspected the package."
          steps={[
            "Collect the dispatched package",
            "Deliver to the buyer&apos;s address",
            "Enter the buyer&apos;s verification code",
          ]}
        />
      </div>
    </section>
  );
}
