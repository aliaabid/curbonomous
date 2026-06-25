export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  avOperators: string[];
  droneOperators: string[];
  tier: 1 | 2 | 3;
  avActivity: "active" | "pilot" | "planning";
  accentColor: string;
  description: string;
}

export const CITIES: CityData[] = [
  { slug: "san-francisco", name: "San Francisco", state: "CA", population: "873,965", avOperators: ["Waymo", "Zoox", "Cruise"], droneOperators: ["Wing", "Amazon Prime Air"], tier: 1, avActivity: "active", accentColor: "#00d4ff", description: "The most active AV market in America, with over 100,000 weekly Waymo rides and multiple operators expanding service." },
  { slug: "los-angeles", name: "Los Angeles", state: "CA", population: "3,898,747", avOperators: ["Waymo", "Zoox"], droneOperators: ["Wing", "Amazon Prime Air"], tier: 1, avActivity: "active", accentColor: "#7b2fff", description: "The nation's largest AV expansion market. Waymo launched LA operations in 2024 with rapid growth across the metro." },
  { slug: "phoenix", name: "Phoenix", state: "AZ", population: "1,608,139", avOperators: ["Waymo", "Cruise", "May Mobility"], droneOperators: ["Wing"], tier: 1, avActivity: "active", accentColor: "#ff9a00", description: "America's first commercially active fully autonomous ride-hail city. Waymo has operated driverless vehicles in Phoenix since 2020." },
  { slug: "austin", name: "Austin", state: "TX", population: "961,855", avOperators: ["Waymo", "May Mobility", "Nuro"], droneOperators: ["Wing", "Amazon Prime Air"], tier: 1, avActivity: "active", accentColor: "#00ff88", description: "A major AV testing and commercial deployment hub. Austin's density and tech-forward culture make it an ideal early market." },
  { slug: "new-york", name: "New York", state: "NY", population: "8,336,817", avOperators: ["Waymo", "Zoox", "Aurora"], droneOperators: ["Zipline", "Amazon Prime Air"], tier: 1, avActivity: "pilot", accentColor: "#00d4ff", description: "The largest US metro entering AV commercial pilot phases. Complexity and density create unique curb infrastructure challenges." },
  { slug: "chicago", name: "Chicago", state: "IL", population: "2,696,555", avOperators: ["May Mobility", "Motional"], droneOperators: ["Wing"], tier: 1, avActivity: "pilot", accentColor: "#0066ff", description: "Active AV pilot programs with May Mobility operating fixed-route autonomy and Motional expanding commercial service." },
  { slug: "seattle", name: "Seattle", state: "WA", population: "749,256", avOperators: ["Waymo", "Zoox", "Aurora"], droneOperators: ["Amazon Prime Air", "Wing"], tier: 1, avActivity: "pilot", accentColor: "#00d4ff", description: "Amazon's home city is a major drone delivery market. Aurora and Waymo are expanding Seattle AV operations." },
  { slug: "miami", name: "Miami", state: "FL", population: "442,241", avOperators: ["Waymo", "Motional"], droneOperators: ["Wing", "Zipline"], tier: 1, avActivity: "pilot", accentColor: "#7b2fff", description: "Florida's warm climate and tourism economy make Miami a priority AV deployment market." },
  { slug: "washington-dc", name: "Washington DC", state: "DC", population: "689,545", avOperators: ["Waymo", "May Mobility"], droneOperators: ["Zipline", "Wing"], tier: 1, avActivity: "pilot", accentColor: "#00d4ff", description: "Federal city with active AV pilots and growing policy framework supporting autonomous infrastructure deployment." },
  { slug: "boston", name: "Boston", state: "MA", population: "675,647", avOperators: ["Motional", "Zoox"], droneOperators: ["Zipline"], tier: 1, avActivity: "pilot", accentColor: "#ff9a00", description: "A major robotics and AV research hub with MIT and Harvard driving commercial partnership deployments." },
  { slug: "denver", name: "Denver", state: "CO", population: "715,522", avOperators: ["May Mobility", "Waymo"], droneOperators: ["Wing"], tier: 2, avActivity: "pilot", accentColor: "#00ff88", description: "Growing AV deployment market with May Mobility fixed-route operations and Waymo expansion planning." },
  { slug: "dallas", name: "Dallas", state: "TX", population: "1,304,379", avOperators: ["Nuro", "Aurora"], droneOperators: ["Wing", "Amazon Prime Air"], tier: 2, avActivity: "pilot", accentColor: "#7b2fff", description: "Major logistics hub with Nuro expanding delivery operations and Aurora Highway piloting commercial freight." },
  { slug: "houston", name: "Houston", state: "TX", population: "2,304,580", avOperators: ["Nuro", "Aurora", "May Mobility"], droneOperators: ["Amazon Prime Air"], tier: 2, avActivity: "pilot", accentColor: "#ff9a00", description: "America's energy capital is investing in smart infrastructure with multiple AV operators in active pilot programs." },
  { slug: "atlanta", name: "Atlanta", state: "GA", population: "498,715", avOperators: ["May Mobility", "Waymo"], droneOperators: ["Zipline", "Wing"], tier: 2, avActivity: "pilot", accentColor: "#00d4ff", description: "Major Southeast hub for AV and drone deployment. Hartsfield-Jackson Airport creates significant autonomous infrastructure demand." },
  { slug: "nashville", name: "Nashville", state: "TN", population: "689,447", avOperators: ["May Mobility"], droneOperators: ["Wing"], tier: 2, avActivity: "planning", accentColor: "#ffd700", description: "Rapidly growing Sunbelt city actively planning autonomous infrastructure to manage population growth." },
  { slug: "san-diego", name: "San Diego", state: "CA", population: "1,386,932", avOperators: ["Waymo", "Zoox"], droneOperators: ["Wing", "Amazon Prime Air"], tier: 2, avActivity: "pilot", accentColor: "#00d4ff", description: "Southern California's second-largest city with active Waymo pilots and proximity to major military and research institutions." },
  { slug: "las-vegas", name: "Las Vegas", state: "NV", population: "641,903", avOperators: ["Zoox", "May Mobility", "Navya"], droneOperators: ["Wing"], tier: 2, avActivity: "active", accentColor: "#ff9a00", description: "Major AV testing ground with the Strip requiring intense curb management. Zoox operates commercial AV service." },
  { slug: "minneapolis", name: "Minneapolis", state: "MN", population: "429,606", avOperators: ["May Mobility"], droneOperators: ["Wing"], tier: 2, avActivity: "pilot", accentColor: "#0066ff", description: "Cold-weather AV testing leader. May Mobility fixed-route operations prove AV viability in winter conditions." },
  { slug: "portland", name: "Portland", state: "OR", population: "652,503", avOperators: ["Waymo", "Nuro"], droneOperators: ["Amazon Prime Air"], tier: 2, avActivity: "pilot", accentColor: "#00ff88", description: "Progressive transportation policy and tech industry presence drive AV adoption in Oregon's largest city." },
  { slug: "pittsburgh", name: "Pittsburgh", state: "PA", population: "302,971", avOperators: ["Aurora", "Waymo"], droneOperators: ["Zipline"], tier: 2, avActivity: "active", accentColor: "#7b2fff", description: "Historic AV testing city. Aurora Highway and Waymo maintain active operations. Carnegie Mellon University drives research." },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug);
}
