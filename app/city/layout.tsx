import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curbonomous City OS — Interactive Urban Intelligence Platform",
  description: "Explore Curbonomous City — an interactive digital twin showing how transportation intelligence works across downtown, airports, universities, medical districts, and logistics hubs.",
};

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
