"use client";

import { Roboto_Slab } from "next/font/google";
import { useEffect, useState } from "react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Alert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 opacity-0 scale-95 animate-fadeIn">
        <div className="flex items-center justify-between">
          <p className={`mr-4 ${robotoSlab.className}`}>
            Reminder: Meeting starts in 10 minutes!
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-300 transition"
          >
            ✖
          </button>
        </div>
      </div>
    )
  );
}
