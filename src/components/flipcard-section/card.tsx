"use client";

import { ReactNode, useState } from "react";

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
      className={`w-64 h-96 [perspective:1000px] ${
        flipOnClick ? "" : "group"
      } cursor-pointer`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]  border-2 rounded-xl border-gray-500
          ${
            flipOnClick
              ? isFlipped
                ? "[transform:rotateY(180deg)]"
                : ""
              : "group-hover:[transform:rotateY(180deg)]"
          }`}
      >
        <div className="absolute w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold rounded-lg [backface-visibility:hidden]">
          {frontContent}
        </div>

        <div className="absolute w-full h-full bg-red-500 flex items-center justify-center text-white text-xl font-bold rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}
