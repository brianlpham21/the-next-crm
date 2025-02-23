"use client";

import { ReactNode, useState } from "react";
import { Shrikhand } from "next/font/google";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});
interface CardProps {
  frontContent?: ReactNode;
  photoUrl?: string | StaticImport;
  backContent: ReactNode;
  flipOnClick?: boolean;
}

export default function Card({
  frontContent,
  photoUrl,
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
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
          ${
            flipOnClick
              ? isFlipped
                ? "[transform:rotateY(180deg)]"
                : ""
              : "group-hover:[transform:rotateY(180deg)]"
          }`}
      >
        <div className="absolute w-full h-full flex border-2 rounded-xl items-center justify-center text-xl font-bold [backface-visibility:hidden] bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
          {photoUrl ? (
            <Image
              alt=""
              src={photoUrl}
              className="object-cover"
              fill
              style={{ borderRadius: "10px" }}
            />
          ) : (
            frontContent
          )}
        </div>

        <div className="absolute w-full h-full flex border-2 rounded-xl items-center justify-center text-xl font-bold [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-300 dark:bg-blue-200 text-gray-700 dark:text-black">
          {backContent}
        </div>
      </div>
    </div>
  );
}
