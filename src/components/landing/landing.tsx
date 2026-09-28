import { Button } from "./button";
import { ComparisonColumn } from "./comparison-column";
import { EscrowDashboard } from "./escrow-dashboard";
import { FaqAccordion, type FaqItem } from "./faq";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { PersonaCard, type Persona } from "./persona-card";
import { RoleFlowCard } from "./role-flow-card";
import { SectionHeading } from "./section-heading";
import { StatStrip, type Stat } from "./stat-strip";
import { StatusBadge } from "./status-badge";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  ["How it works", "#how-it-works"],
  ["For sellers", "#sellers"],
  ["For buyers", "#buyers"],
  ["FAQs", "#faqs"],
] as const;
const personas: Persona[] = [
  {
    role: "Buyers",
    title: "Pay and pray",
    symbol: "◇",
    copy: "Sending money before seeing the product often ends in package failure, incorrect goods, or a seller who goes dark after payment lands.",
  },
  {
    role: "Sellers",
    title: "Ship and hope",
    symbol: "◈",
    copy: "Releasing product without upfront certainty exposes sellers to fake alerts, disputed payments, and cancellations after the courier's gone.",
  },
  {
    role: "Riders",
    title: "Caught in the middle",
    symbol: "✦",
    copy: "With no formal system to hold cash on delivery, dispatch riders end up acting as cash collectors carrying the risk of every failed handoff.",
  },
];
const stats: Stat[] = [
  { value: "0%", label: "Payment scams reported" },
  { value: "10×", label: "Faster than bank transfer" },
  { value: "100%", label: "Verified escrow coverage" },
];
const steps = [
  ["1", "Lock your payment securely via the checkout link"],
  ["2", "Inspect the package the moment it arrives at your door"],
  ["3", "Release funds with a verification code, only after you approve"],
] as const;
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

export function LandingPage() {
  return (
    <main id="top" className="text-[var(--ink)]">
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_84%,transparent)] backdrop-blur-[18px]">
        <div className="mx-auto flex min-h-[88px] max-w-[1383px] items-center justify-between gap-10 px-7 py-[18px] max-[900px]:px-[22px] max-[900px]:py-[15px]">
          <Logo />
          <nav className="flex items-center gap-[34px] text-sm font-semibold text-[var(--muted)] max-[900px]:hidden">
            {navLinks.map(([label, href]) => (
              <a className="hover:text-[var(--green)]" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3.5 max-[900px]:hidden">
            <ThemeToggle />
            <Button>Join the waitlist</Button>
          </div>
          <MobileNav />
        </div>
      </header>
      <div className="mx-auto max-w-[1403px] px-10 pb-[120px] pt-[100px] max-[900px]:px-[22px] max-[900px]:pb-[90px] max-[900px]:pt-[70px]">
        <section className="grid min-h-[580px] grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] items-center gap-[clamp(50px,8vw,150px)] max-[900px]:grid-cols-1 max-[900px]:gap-[55px]">
          <div className="max-w-[620px]">
            <h1 className="mb-5 mt-[25px] text-[clamp(3.3rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.07em] max-[560px]:text-[3.35rem]">
              The trust layer for <em>African commerce.</em>
            </h1>
            <p className="max-w-[600px] text-lg leading-[1.55] text-[var(--muted)] max-[560px]:text-base">
              Safegot holds payment in trust until delivery is confirmed so buyers stop sending
              money on faith, and sellers stop shipping on hope. Built for the way Africa actually
              sells: on WhatsApp, Instagram, and Marketplace.
            </p>
            <div className="my-[30px] mb-[15px] flex gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch [&>a]:max-[560px]:w-full">
              <Button>Join the waitlist</Button>
              <Button href="#how-it-works" secondary>
                See how it works
              </Button>
            </div>
            <small className="text-[13px] text-[var(--muted)]">
              No app download required to get started · Free during early access
            </small>
          </div>
          <EscrowDashboard />
        </section>
        <StatStrip items={stats} />
        <section className="mb-[170px] scroll-mt-[120px] max-[900px]:mb-[120px]" id="problem">
          <SectionHeading
            eyebrow="The friction"
            title="Online commerce in Africa still runs on trust gaps"
            copy="Social selling has unlocked micro-entrepreneurship for millions across WhatsApp, Instagram, and Marketplace. But transacting with strangers still means friction — for everyone in the chain."
          />
          <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
            {personas.map((persona) => (
              <PersonaCard key={persona.role} persona={persona} />
            ))}
          </div>
        </section>
        <section className="mb-[170px] scroll-mt-[120px] max-[900px]:mb-[120px]" id="about">
          <SectionHeading
            eyebrow="The breakthrough"
            title="Meet Safegot"
            copy="Safegot holds funds securely in trust until delivery is verified, then releases payment automatically. We bridge the trust gap, so you can scale your business or shop without fear."
          />
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-5 max-[900px]:grid-cols-1">
            <div className="flex min-h-[430px] flex-col justify-center rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[42px] shadow-[var(--shadow)] backdrop-blur-xl max-[560px]:p-7">
              <span className="text-[clamp(5rem,12vw,9rem)] font-extrabold leading-[0.8] tracking-[-0.12em] text-[var(--green)]">
                0%
              </span>
              <p className="my-[26px] mb-[45px] text-[17px] text-[var(--muted)]">
                Payment scams on protected deals
              </p>
              <div className="grid grid-cols-2 gap-5 text-xs text-[var(--muted)] max-[560px]:grid-cols-1">
                <span className="grid gap-[7px]">
                  <b className="text-[22px] text-[var(--ink)]">10×</b>Faster checkout than manual
                  transfer
                </span>
                <span className="grid gap-[7px]">
                  <b className="text-[22px] text-[var(--ink)]">100%</b>Verified escrow on every
                  order
                </span>
              </div>
            </div>
            <EscrowDashboard />
          </div>
        </section>
        <section className="mb-[170px] scroll-mt-[120px] max-[900px]:mb-[120px]" id="advantage">
          <SectionHeading
            eyebrow="Trust contrast"
            title="The Safegot trust advantage"
            copy="Comparing the stress of traditional social commerce to the confidence of a Safegot-protected sale."
          />
          <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <ComparisonColumn />
            <ComparisonColumn positive />
          </div>
        </section>
        <section className="mb-[170px] scroll-mt-[120px] max-[900px]:mb-[120px]" id="how-it-works">
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
          <div
            className="grid grid-cols-2 items-center gap-[70px] max-[900px]:grid-cols-1"
            id="buyers"
          >
            <div>
              <h3 className="text-[30px] tracking-[-0.05em]">Shop with absolute peace of mind</h3>
              <p className="leading-[1.6] text-[var(--muted)]">
                Buyers no longer send money into uncertainty. When you check out on Instagram or
                WhatsApp, your funds sit in a secure trust vault, not the seller&apos;s pocket,
                until you confirm the order is correct.
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
          <div className="mt-7 grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
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
        <section className="mx-auto mb-[170px] max-w-[940px] scroll-mt-[120px] max-[900px]:mb-[120px]">
          <SectionHeading
            eyebrow="Community voices"
            title="People are already excited about safer online commerce"
            copy="Thousands of buyers and sellers have felt the friction of online transactions. Here's what people are saying about the trust Safegot is bringing."
          />
          <article className="relative rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-[50px] shadow-[var(--shadow)] backdrop-blur-xl max-[560px]:p-7">
            <span className="text-[70px] leading-[0.5] text-[var(--green)]">“</span>
            <blockquote className="my-[25px] mb-[35px] max-w-[760px] text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.35] tracking-[-0.04em]">
              This is exactly the protection online shopping has been missing. Last year I ordered a
              phone and received something completely different — the seller disappeared, and I had
              no way to recover my money.
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[var(--green-soft)] text-xs font-extrabold text-[var(--green)]">
                SA
              </span>
              <div className="grid gap-1">
                <strong>Sarah A.</strong>
                <small className="text-[var(--muted)]">Buyer, Lagos</small>
              </div>
            </div>
          </article>
        </section>
        <section className="mb-[170px] scroll-mt-[120px] max-[900px]:mb-[120px]">
          <SectionHeading
            eyebrow="The market focus"
            title="The trust layer for Africa's digital commerce."
            copy="Commerce is moving faster than formal systems."
          />
          <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-[50px] max-[900px]:grid-cols-1">
            <div>
              <p className="max-w-[650px] text-lg leading-[1.6] text-[var(--muted)]">
                Social selling is exploding — millions of buyers and sellers transact through chat
                windows, DM threads, and marketplace listings. The piece that&apos;s always been
                missing is trust.
              </p>
              <div className="mt-[35px] grid gap-[18px]">
                <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-[560px]:grid-cols-[75px_1fr]">
                  <b className="text-[19px] text-[var(--green)]">$40B+</b>Social commerce market
                </span>
                <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-[560px]:grid-cols-[75px_1fr]">
                  <b className="text-[19px] text-[var(--green)]">2×</b>Securing transactions between
                  strangers on social media
                </span>
                <span className="grid grid-cols-[90px_1fr] text-sm text-[var(--muted)] max-[560px]:grid-cols-[75px_1fr]">
                  <b className="text-[19px] text-[var(--green)]">0</b>No expensive developer
                  integrations required for local vendors
                </span>
              </div>
            </div>
            <div className="grid min-h-[290px] content-center gap-5 rounded-[22px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] p-8 shadow-[var(--shadow)] backdrop-blur-xl">
              <span className="text-[70px] font-extrabold tracking-[-0.1em] text-[var(--green)]">
                $40B+
              </span>
              <span className="leading-[1.5] text-[var(--muted)]">
                Projected value of African online sales moving through social channels by 2030.
              </span>
            </div>
          </div>
        </section>
        <section
          className="mx-auto mb-[170px] max-w-[960px] scroll-mt-[120px] max-[900px]:mb-[120px]"
          id="faqs"
        >
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently asked questions"
            copy="Comparing the stress of traditional social commerce to the confidence of a Safegot-protected sale."
          />
          <FaqAccordion items={faqs} />
        </section>
        <section
          className="mx-auto max-w-[1000px] scroll-mt-[120px] rounded-[28px] border border-[var(--border)] bg-[linear-gradient(140deg,var(--surface-soft),color-mix(in_srgb,var(--surface)_65%,transparent))] px-10 py-[75px] text-center shadow-[var(--shadow)] backdrop-blur-xl max-[560px]:px-[22px] max-[560px]:py-[55px]"
          id="waitlist"
        >
          <span className="mb-[17px] inline-flex items-center gap-[9px] font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--green)] before:h-px before:w-5 before:bg-current before:content-['']">
            Start with trust
          </span>
          <h2 className="mx-auto mb-[15px] max-w-[680px] text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.08em]">
            Join 10,000+ people building safer commerce
          </h2>
          <p className="mb-7 text-[var(--muted)]">
            Free during early access · No app download required
          </p>
          <Button>Join the waitlist</Button>
        </section>
      </div>
      <footer className="mx-auto grid max-w-[1383px] grid-cols-[1fr_auto_1fr] items-end gap-[35px] border-t border-[var(--border)] px-10 pb-[45px] pt-[34px] text-[var(--muted)] max-[900px]:grid-cols-1 max-[900px]:px-[22px] max-[900px]:py-[30px]">
        <div>
          <Logo />
          <p className="mt-[13px] text-xs">The trust layer for Africa&apos;s digital commerce.</p>
        </div>
        <div className="flex gap-[22px] text-xs max-[900px]:flex-wrap">
          <a className="hover:text-[var(--green)]" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-[var(--green)]" href="#advantage">
            Why Safegot
          </a>
          <a className="hover:text-[var(--green)]" href="#faqs">
            FAQs
          </a>
          <a className="hover:text-[var(--green)]" href="#waitlist">
            Join the waitlist
          </a>
        </div>
        <small className="justify-self-end text-[11px] max-[900px]:justify-self-start">
          © 2026 Safegot. Built for safer commerce.
        </small>
      </footer>
    </main>
  );
}
