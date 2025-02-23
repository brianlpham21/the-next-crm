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
        <div className="absolute w-full h-full flex rounded-xl text-center items-center justify-center text-xl font-bold [backface-visibility:hidden] bg-gray-50 dark:bg-gray-700 dark:text-gray-200 p-2">
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
          {flipOnClick && (
            <div className="flex gap-1 items-center absolute top-2 right-2 bg-green-700 text-white text-sm px-2 py-1 rounded-full">
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
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                />
              </svg>
              <div>Clickable</div>
            </div>
          )}
        </div>

        <div className="absolute w-full h-full flex border-2 rounded-xl items-center text-center justify-center text-xl font-bold [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-300 dark:bg-blue-200 text-gray-700 dark:text-black p-2">
          {backContent}
        </div>
      </div>
    </div>
  );
}
