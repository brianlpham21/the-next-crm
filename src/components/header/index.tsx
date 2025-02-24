"use client";

import { useEffect, useState } from "react";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 left-0 w-full bg-white dark:bg-gray-300 shadow-md transition-transform duration-700 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <h1
          className={`text-2xl text-gray-500 dark:text-gray-700 ${shrikhand.className}`}
        >
          THE NEXT CRM
        </h1>
      </div>
    </div>
  );
}
