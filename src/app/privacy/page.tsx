import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Safegot's Privacy Policy covering personal data, processing, sharing, and user rights.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect personal data to provide and improve our services. The data we collect includes:",
      "Identity Data: Full name, date of birth, and government-issued identification numbers (e.g., NIN, BVN) for identity verification.",
      "Contact Data: Email address, billing and delivery addresses, and phone numbers.",
      "Financial Data: Bank account details and transaction history.",
      "Technical & Usage Data: IP address, browser type, device information, and interaction logs on our platform.",
    ],
  },
  {
    title: "2. Purpose of Processing and Lawful Basis",
    paragraphs: [
      "Under the NDPA 2023, we process your personal data based on the following lawful grounds:",
      "Performance of a Contract: To facilitate escrow transactions, deliver goods, and settle payouts.",
      "Legal Obligation: To comply with anti-money laundering (AML) laws and financial regulatory reporting.",
      "Consent: When you opt-in to receive marketing communications or participate in specific features. Consent must be freely given, specific, informed, and unambiguous, and can be withdrawn at your discretion.",
      "Legitimate Interest: For fraud prevention, platform security, and service optimization.",
    ],
  },
  {
    title: "3. Data Sharing and Third-Party Processors",
    paragraphs: [
      "We do not sell your personal data. We share necessary information strictly with authorized third-party service providers to deliver our core services:",
      "Dojah: We share your Identity Data with Dojah for KYC (Know Your Customer) identity verification and compliance screening.",
      "Monnify: We share your Financial and Identity Data with Monnify to process payments, secure escrow funds, and execute automated bank payouts.",
      "Terminal Africa: We share your Contact Data (name, delivery address, phone number) with Terminal Africa to generate logistics quotes and facilitate order dispatch and delivery tracking.",
      "Termii: We share your phone number with Termii to deliver essential SMS notifications, including one-time passwords (OTPs) and delivery validation codes.",
    ],
  },
  {
    title: "4. Data Retention",
    paragraphs: [
      "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Account information and transaction data are typically kept for the duration of our commercial relationship and up to regulatory retention timeframes after account closure to comply with statutory obligations.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "Safegot implements appropriate technical and organizational measures to secure personal data against unauthorized access, alteration, disclosure, or destruction. This includes database encryption, access controls, firewalls, and regular security assessments. In the event of a data breach posing a high risk to your rights, we will notify you and the Nigeria Data Protection Commission (NDPC) within 72 hours of becoming aware of the breach.",
    ],
  },
  {
    title: "6. Your Data Subject Rights",
    paragraphs: [
      "Under the NDPA 2023, you possess the following rights regarding your personal data:",
      "Right to be Informed & Access: You can request confirmation of processing and copies of your personal data.",
      "Right to Rectification: You can request the correction of inaccurate or incomplete data.",
      "Right to Erasure: You may request the deletion of your personal data when it is no longer necessary or if you withdraw consent, subject to our legal retention obligations.",
      "Right to Restrict Processing: You can request a temporary halt to processing under certain conditions.",
      "Right to Data Portability: You can receive your data in a structured, commonly used, and machine-readable format.",
      "Right to Object: You can object to processing based on legitimate interests or direct marketing.",
      "Right against Automated Decision-Making: You have the right not to be subject to decisions based solely on automated processing.",
    ],
  },
  {
    title: "7. Cross-Border Data Transfers",
    paragraphs: [
      "If we utilize cloud infrastructure or third-party processors hosted outside Nigeria, personal data may be transferred internationally. Such transfers will only occur if the NDPC determines the receiving country ensures adequate protection or if appropriate safeguards, such as standard contractual clauses, are in place.",
    ],
  },
  {
    title: "8. Contact Information and Complaints",
    paragraphs: [
      "If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer (DPO):",
      "Email: TEAM@SAFEGOT.COM",
      "Corporate Address: No. 24, Bamidele Avi Street, Egbeda, Lagos State, Nigeria",
      "You also have the right to lodge a formal complaint with the Nigeria Data Protection Commission (NDPC) if you believe your data rights have been violated.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated="29th September, 2026"
      intro={
        'SAFEGOT LIMITED ("Safegot," "we," "us," or "our") is committed to protecting your personal data in accordance with the Nigeria Data Protection Act (NDPA) 2023. This Privacy Policy explains how we collect, process, share, and protect your information when you use our digital trust, escrow, and e-commerce platform.'
      }
      sections={sections}
    />
  );
}
