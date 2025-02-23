"use client";

import { useTheme } from "next-themes";

import Hero from "@/components/hero-section";
import FlipCardSection from "@/components/flipcard-section";
import Board from "@/components/board";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <Hero />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* css for basic web page container  */}

      <FlipCardSection />

      <div>
        <Board />
      </div>

      <div className="fixed top-5 right-5 z-10">
        <button
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 border-2 border-gray-300"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
