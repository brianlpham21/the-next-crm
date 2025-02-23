"use client";

import Hero from "@/components/hero-section";
import FlipCardSection from "@/components/flipcard-section";
import Board from "@/components/board";
import ThemeToggle from "@/components/theme-toggle";

export default function LandingPage() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 pb-16">
      <Hero />
      <FlipCardSection />
      <Board />

      <ThemeToggle />
    </div>
  );
}
