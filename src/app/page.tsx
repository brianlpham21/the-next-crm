"use client";

import { useTheme } from "next-themes";

import Hero from "@/components/hero-section";
import FlipCardSection from "@/components/flipcard-section";
import Board from "@/components/board";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-gray-800">
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
        MODE
      </div>
      <Hero />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* css for basic web page container  */}

      <FlipCardSection />

      <div>
        <Board />
      </div>
      <div>Scroll Animation</div>

      <div className="absolute top-5 right-5">
        <button
          className="bg-gray-700 text-black dark:text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
