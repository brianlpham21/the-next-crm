"use client";

import { ReactNode, useState } from "react";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});
interface CardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  flipOnClick?: boolean;
}

export default function Card({
  frontContent,
  backContent,
  flipOnClick = false,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipOnClick) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={`w-60 h-96 [perspective:1000px] ${
        flipOnClick ? "" : "group"
      } cursor-pointer ${shrikhand.className}`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] border-4 rounded-xl dark:border-gray-600 border-gray-400
          ${
            flipOnClick
              ? isFlipped
                ? "[transform:rotateY(180deg)]"
                : ""
              : "group-hover:[transform:rotateY(180deg)]"
          }`}
      >
        <div className="absolute w-full h-full flex items-center justify-center text-xl font-bold rounded-lg [backface-visibility:hidden] bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          {frontContent}
        </div>

        <div className="absolute w-full h-full flex items-center justify-center text-xl font-bold rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-300 dark:bg-blue-200 text-gray-700 dark:text-black">
          {backContent}
        </div>
      </div>
    </div>
  );
}
