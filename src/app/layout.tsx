import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/seo";
import "./globals.css";

const siteUrl = "https://safegot.com";
const siteTitle = "Safegot — Secure escrow for African commerce";
const siteDescription =
  "Safegot protects social-commerce payments with secure escrow, delivery verification, and safer buying and selling across Nigeria and Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Safegot",
  },
  description: siteDescription,
  applicationName: "Safegot",
  authors: [{ name: "Safegot" }],
  creator: "Safegot",
  publisher: "Safegot",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/safegot_logo.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/safegot_logo_dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/safegot_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Safegot",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Safegot secure escrow for African commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#071121" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
