import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Brief — Curbonomous",
  description:
    "Request access to the Curbonomous investor brief. The operating system for the physical world — connecting cameras, infrastructure, vehicles, robotics, and sensors into one real-time intelligence network.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Curbonomous Investor Brief",
    description:
      "The operating system for the physical world. Request access to learn about Curbonomous's platform, market opportunity, and go-to-market strategy.",
    url: "https://www.curbonomous.com/investors",
    siteName: "Curbonomous",
    // Replace with a real OG image at /public/og-investors.jpg
    images: [{ url: "https://www.curbonomous.com/og-investors.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curbonomous Investor Brief",
    description: "The operating system for the physical world.",
    images: ["https://www.curbonomous.com/og-investors.jpg"],
  },
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
