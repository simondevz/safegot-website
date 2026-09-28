import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safegot — The trust layer for African commerce",
  description:
    "Secure escrow for safer buying, selling, and delivery across Africa's digital commerce.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
