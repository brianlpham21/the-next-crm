"use client";

import Hero from "@/components/hero-section";
import FlipCardSection from "@/components/flipcard-section";
import Board from "@/components/board";

export default function LandingPage() {
  return (
    <div className="bg-gray-800">
      <Hero />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* css for basic web page container  */}

      <FlipCardSection />

      <div>
        <Board />
      </div>
      <div>Scroll Animation</div>
    </div>
  );
}
