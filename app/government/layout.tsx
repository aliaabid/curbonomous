import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curbonomous for Government — Smart City Transportation Intelligence",
  description: "Curbonomous helps cities, transit agencies, and public works departments reduce violations, improve curb turnover, and prepare for autonomous mobility. Procurement ready.",
};

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
