import { faqs } from "./landing/sections/common-questions";

const siteUrl = "https://safegot.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Safegot",
      url: siteUrl,
      logo: `${siteUrl}/safegot_logo.png`,
      email: "team@safegot.com",
      telephone: "+2347053111596",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 24, Bamidele Avi Street",
        addressLocality: "Egbeda",
        addressRegion: "Lagos State",
        addressCountry: "NG",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Safegot",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "Safegot — Secure escrow for African commerce",
      url: siteUrl,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faqpage`,
      url: `${siteUrl}/#faqs`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
} as const;

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
