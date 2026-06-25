import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curbonomous for Airports — Terminal Curbside Intelligence Platform",
  description: "Curbonomous manages rideshare compliance, autonomous vehicle pickups, drone logistics, and ground transportation operations at airports worldwide.",
};

export default function AirportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
