import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curbonomous Technology — AI, Computer Vision & Digital Twin Platform",
  description: "The Curbonomous intelligence stack: edge-deployed computer vision, transportation AI, real-time digital twins, and enterprise APIs built for city-scale reliability.",
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
