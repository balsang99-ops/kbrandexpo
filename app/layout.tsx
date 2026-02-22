import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "DR.MD K-BRAND EXPO | Global AI Solution",
  description: "Global B2B Platform for K-Brand Excellence",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
