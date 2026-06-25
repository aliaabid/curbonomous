import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cities";

const BASE_URL = "https://www.curbonomous.com";

const SOLUTIONS = [
  "curb-management",
  "computer-vision",
  "autonomous-vehicles",
  "drone-infrastructure",
  "delivery-robots",
  "digital-twin",
  "mobility-hubs",
  "urban-intelligence",
];

const INDUSTRIES = [
  "cities",
  "airports",
  "commercial-real-estate",
  "mixed-use",
  "universities",
  "autonomous-vehicle-companies",
  "drone-operators",
  "hotels",
];

const BLOG_SLUGS = [
  "complete-guide-intelligent-curb-management",
  "autonomous-vehicle-infrastructure-cities",
];

const COMPETITORS = [
  "automotus",
  "numina",
  "urban-sdk",
  "placer-ai",
  "density",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const citySlugs = getAllCitySlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/technology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/glossary`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cities`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/airport`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/government`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const solutionPages: MetadataRoute.Sitemap = SOLUTIONS.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const comparePages: MetadataRoute.Sitemap = COMPETITORS.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/cities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...industryPages,
    ...blogPages,
    ...comparePages,
    ...cityPages,
  ];
}
