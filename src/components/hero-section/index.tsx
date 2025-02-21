"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Move text left and right based on scroll position
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 1500]);

  return (
    <div className="w-full h-screen opacity-0 animate-fadeIn">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center transform -rotate-12 -translate-y-5">
          <motion.div style={{ x: moveLeft }}>
            <h1
              className={`text-9xl font-bold italic text-white ${shrikhand.className} font-mono transform scale-100 translate-y-3`}
            >
              THE
            </h1>
          </motion.div>
          <motion.div style={{ x: moveRight }}>
            <h1
              className={`text-9xl font-bold italic text-white ${shrikhand.className} font-mono transform scale-150`}
            >
              NEXT
            </h1>
          </motion.div>
          <motion.div style={{ x: moveLeft }}>
            <h1
              className={`text-9xl font-bold italic text-white ${shrikhand.className} font-mono transform scale-125 -translate-y-1`}
            >
              CRM
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
