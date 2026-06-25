import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import TechArchitecture from "@/components/sections/TechArchitecture";
import DemoSection from "@/components/sections/DemoSection";

const SPECS = [
  {
    category: "Computer Vision",
    items: [
      { label: "Model", value: "YOLOv8 + Curbonomous Transport AI" },
      { label: "Vehicle Classes", value: "47 classifications" },
      { label: "Accuracy", value: "99.2% mean average precision" },
      { label: "LPR Accuracy", value: "99.7% read rate" },
      { label: "Frame Rate", value: "30 FPS sustained" },
    ],
  },
  {
    category: "Edge Computing",
    items: [
      { label: "Inference Latency", value: "<10ms on-device" },
      { label: "Hardware", value: "NVIDIA Jetson Orin / custom ASIC" },
      { label: "Connectivity", value: "LTE-M · 5G · Wi-Fi 6E" },
      { label: "Offline Mode", value: "72-hour local buffering" },
      { label: "Encryption", value: "AES-256 at rest + in transit" },
    ],
  },
  {
    category: "Cloud Platform",
    items: [
      { label: "Twin Sync Latency", value: "12ms average" },
      { label: "Uptime SLA", value: "99.97%" },
      { label: "Data Ingestion", value: "2.4M events/second" },
      { label: "Storage", value: "Multi-region · 7-year retention" },
      { label: "Compliance", value: "SOC 2 Type II · FedRAMP-aligned" },
    ],
  },
  {
    category: "Integrations",
    items: [
      { label: "GIS", value: "Esri ArcGIS · Mapbox" },
      { label: "Traffic", value: "SCOOT · InSync · Trafficware" },
      { label: "Payments", value: "Stripe · Passport · ParkMobile" },
      { label: "Enterprise", value: "Palantir · Salesforce · ServiceNow" },
      { label: "APIs", value: "REST · GraphQL · Webhooks · GTFS-RT" },
    ],
  },
];

const INTEGRATIONS = [
  { category: "Traffic Management", items: ["SCOOT", "InSync", "Trafficware", "Transcore", "Econolite"] },
  { category: "GIS & Mapping", items: ["Esri ArcGIS", "Mapbox", "HERE", "Google Maps Platform"] },
  { category: "Smart City", items: ["Palantir Gotham", "IBM Intelligent Transportation", "Siemens MindSphere"] },
  { category: "Payments", items: ["Stripe", "Passport", "ParkMobile", "T2 Systems", "Flowbird"] },
  { category: "Autonomous Vehicles", items: ["Waymo One", "Zoox Fleet API", "Uber ATG", "Nuro"] },
  { category: "Transit", items: ["GTFS · GTFS-RT", "Swiftly", "TransLoc", "Optibus"] },
];

export default function TechnologyPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <div
          className="py-20 text-center px-6"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(123,47,255,0.08) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(123,47,255,0.1)",
          }}
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-4">
            ◈ CURBONOMOUS TECHNOLOGY
          </div>
          <h1
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            Built for City Scale
          </h1>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            A vertically integrated intelligence stack — from edge hardware to cloud platform to city dashboard.
            Every component designed for the reliability demands of critical public infrastructure.
          </p>
        </div>

        <TechArchitecture />

        {/* Tech specs */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-8">
              TECHNICAL SPECIFICATIONS
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SPECS.map((spec) => (
                <div
                  key={spec.category}
                  className="p-6"
                  style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}
                >
                  <div className="font-black text-white mb-4 text-sm">{spec.category}</div>
                  <div className="space-y-3">
                    {spec.items.map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>
                          {item.label}
                        </span>
                        <span className="text-[0.8rem] font-semibold text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section
          className="py-20 px-6"
          style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
                ◈ ECOSYSTEM INTEGRATIONS
              </div>
              <h2 className="font-black text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                Plays Well With Everything
              </h2>
              <p className="text-[#c8d8f0]/50 mt-4 max-w-xl mx-auto text-sm" style={{ lineHeight: 1.7 }}>
                Curbonomous connects to your existing technology stack without ripping and replacing.
                Open APIs, standard protocols, and purpose-built connectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INTEGRATIONS.map((int) => (
                <div
                  key={int.category}
                  className="p-5"
                  style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase mb-3" style={{ color: "#00d4ff", fontFamily: "monospace" }}>
                    {int.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {int.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-[8px] font-semibold tracking-wider"
                        style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.12)", color: "rgba(200,216,240,0.6)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DemoSection />
      </div>
      <Footer />
    </main>
  );
}
