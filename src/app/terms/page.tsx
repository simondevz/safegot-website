import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal/legal-document";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The Terms and Conditions governing use of the Safegot platform and services.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    title: "1. Description of Service",
    paragraphs: [
      "Safegot provides software development, IT services, and a digital trust infrastructure tailored for social commerce and e-commerce. We specialize in digital order management, verified payment holds (escrow), delivery confirmation systems, and automated enterprise software solutions.",
      "Our core service acts as a secure intermediary for online transactions:",
      "For Buyers: We securely hold your payment in a bank-grade escrow vault until you receive and verify your order.",
      "For Sellers: We provide real-time, verified deposit confirmations before you dispatch goods, eliminating the risk of fake bank alerts and upfront payment fraud.",
      "For Logistics/Riders: We offer a digital, contactless handover portal that uses one-time validation codes to confirm delivery, eliminating the need to carry physical cash.",
      "Safegot is a technology service provider and escrow agent, not a retail merchant, logistics provider, or financial institution. We do not sell the goods transacted on the platform.",
    ],
  },
  {
    title: "2. User Roles and Account Security",
    paragraphs: [
      "To use Safegot, you must create an account. You are responsible for maintaining the confidentiality of your account credentials. The Platform supports three primary user roles:",
      "Buyers: Individuals purchasing goods or services via Safegot’s secure checkout links.",
      "Sellers/Merchants: Businesses or individuals using Safegot to generate payment links, manage order tracking, and receive automated payouts.",
      "Logistics/Riders: Couriers who utilize the Safegot Rider Portal to verify deliveries via code exchange and log handovers digitally.",
      "You agree to provide accurate, current, and complete information during registration. Safegot reserves the right to suspend or terminate accounts that provide false information, engage in fraudulent activity, or violate these Terms.",
    ],
  },
  {
    title: "3. The Safegot Escrow Process",
    paragraphs: [
      "All transactions processed through Safegot follow a strict, automated sequence to ensure maximum security for all parties:",
      "Payment Initiation: The Seller generates a custom payment link and shares it with the Buyer.",
      "Secure Hold: The Buyer completes the payment through the Safegot portal. Funds are securely locked in our escrow vaults.",
      "Dispatch Notification: Safegot instantly notifies the Seller that the deposit is secured, prompting the dispatch of the order.",
      "Delivery and Verification: Upon arrival, the Buyer inspects the package. Confirmation works in two ways, depending on the delivery method:",
      "Local riders: If the order is correct and satisfactory, the buyer gives their unique, single-use validation code to the rider or enters it into the Safegot portal.",
      "Integrated logistics: Safegot is fully responsible for the delivery process through our logistics partner. Delivery is confirmed within the Safegot platform, and the buyer still inspects the order before the transaction is completed.",
      "Automated Payout: Once delivery is confirmed, the transaction is marked complete and the funds are instantly released and settled to the seller’s bank account. Confirmation happens in one of two ways:",
      "Local riders: The buyer’s validation code is successfully entered into the Safegot portal, either by the buyer or by the rider.",
      "Integrated logistics: Delivery is confirmed through the Safegot platform, and the payout is triggered automatically.",
    ],
  },
  {
    title: "4. Disputes, Returns, and Refunds",
    paragraphs: [
      "If a Buyer is unsatisfied with an order upon delivery (e.g., wrong item, damaged goods), they must not provide the validation code to the rider.",
      "Raising a Dispute: The Buyer or Seller must flag the transaction as disputed within the platform. Safegot will hold the funds in escrow until the dispute is resolved.",
      "Resolution: Buyers and Sellers are encouraged to resolve disputes directly. If an agreement cannot be reached (e.g., return of the item to the seller), Safegot’s dispute resolution team will review evidence (dispatch proof, communication, rider logs) to determine whether to refund the Buyer or release funds to the Seller.",
      "Refund Policy: Approved refunds will be processed back to the Buyer's original payment method within standard banking timelines. Platform processing fees and dispatch fees are non-refundable.",
    ],
  },
  {
    title: "5. Fees and Payouts",
    paragraphs: [
      "Sellers: Payouts are settled automatically to the registered bank account upon successful code validation. Sellers are responsible for ensuring their bank details are accurate.",
      "Platform Fees: Safegot charges a clearly displayed service/escrow fee per transaction. By proceeding with a transaction, you agree to the applicable fees shown at checkout.",
    ],
  },
  {
    title: "6. Prohibited Activities",
    paragraphs: [
      "You agree not to use Safegot to:",
      "Facilitate transactions for illegal goods, weapons, illicit drugs, counterfeit items, or adult content.",
      "Engage in money laundering, fraudulent schemes, or any activity that violates Nigerian law.",
      "Attempt to bypass, hack, or manipulate the escrow system, validation code mechanics, or user portals.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Safegot Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our platform bridges the trust gap by securing payments, but we do not guarantee the quality, safety, or legality of the physical items sold by third-party merchants. And it is not liable for delay, loss or damage caused by logistics providers, banks, or payment processors, except as provided under section 4. Nothing in these Terms excludes or limits liability for fraud, gross negligence, wilful misconduct, or any liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "8. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts located in Lagos State, Nigeria.",
    ],
  },
  {
    title: "9. Changes to Terms",
    paragraphs: [
      "Safegot Limited reserves the right to modify or update these Terms at any time. We will notify users of any material changes by updating the “Last Updated” date at the top of this page or by sending an email notification. Continued use of the Platform after changes are published constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "If you have any questions or concerns regarding these Terms or our services, please contact our support team:",
      "Email: TEAM@SAFEGOT.COM",
      "Corporate Address: No. 24, Bamidele Avi Street, Egbeda, Lagos State, Nigeria",
    ],
  },
  {
    title: "11. Data Privacy and Security",
    paragraphs: [
      "Your privacy is important to us. By using Safegot, you consent to the collection, use, and processing of your personal and financial data as outlined in our Privacy Policy. We comply with the Nigeria Data Protection Act (NDPA) and applicable regulations regarding the safeguarding of user data. We do not sell your personal data to third parties.",
    ],
  },
  {
    title: "12. Intellectual Property Rights",
    paragraphs: [
      "All content, design, graphics, compilation, magnetic translation, digital conversion, software APIs, and other matters related to the Platform are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any part of the Platform is strictly prohibited. Safegot retains all rights, title, and interest in and to the platform.",
    ],
  },
  {
    title: "13. Indemnification",
    paragraphs: [
      "You agree to indemnify, defend, and hold harmless Safegot Limited, its directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to legal fees) arising from:",
      "Your use of and access to the Platform.",
      "Your violation of any term of these Terms and Conditions.",
      "Your violation of any third-party right, including without limitation any copyright, property, or privacy right.",
      "Any claim that a transaction or item sold by you caused damage to a third party.",
    ],
  },
  {
    title: "14. Service Availability and Force Majeure",
    paragraphs: [
      "While we strive to ensure the Platform is available 24/7, we do not guarantee uninterrupted access. Safegot shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, internet service provider failures, bank gateway downtimes, government actions, or cyber-attacks.",
    ],
  },
  {
    title: "15. Tax Liabilities",
    paragraphs: [
      "Safegot is merely a facilitator of payments and escrow. Sellers are solely responsible for determining, collecting, withholding, reporting, and remitting applicable taxes, duties, and government fees associated with their sales. Safegot is not responsible for paying any taxes on behalf of Sellers or Buyers.",
    ],
  },
  {
    title: "16. Severability",
    paragraphs: [
      "If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms and Conditions"
      lastUpdated="29th September, 2026"
      intro={
        'Welcome to Safegot. These Terms and Conditions ("Terms") govern your access to and use of the Safegot website (www.safegot.com), our mobile applications, software APIs, and any related services (collectively, the "Platform"). The Platform is owned and operated by SAFEGOT LIMITED ("Safegot," "we," "us," or "our"), a private company limited by shares registered under the Companies and Allied Matters Act, 2020 of the Federal Republic of Nigeria (RC Number: 9769439). Our registered office is located at No. 24, Bamidele Avi Street, Egbeda, Lagos State, Nigeria. By creating an account, generating a payment link, or otherwise using the Safegot platform, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our services.'
      }
      sections={sections}
    />
  );
}
