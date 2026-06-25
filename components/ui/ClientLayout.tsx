"use client";

import dynamic from "next/dynamic";

const Ticker = dynamic(() => import("./Ticker"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Ticker />
      </div>
      {children}
    </>
  );
}
