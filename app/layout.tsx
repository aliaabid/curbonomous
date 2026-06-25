import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";

export const metadata: Metadata = {
  title: "Curbonomous — The Operating System for Autonomous Cities",
  description: "Curbonomous transforms transportation infrastructure into a real-time intelligent network for cities, airports, fleets, and autonomous mobility operators.",
  keywords: ["autonomous vehicles", "smart city", "digital twin", "transportation AI", "curb management", "robotaxi", "urban mobility"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#000008] text-[#c8d8f0] antialiased overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
