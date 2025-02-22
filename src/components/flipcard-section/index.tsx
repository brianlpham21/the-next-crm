"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Card from "./card";

export default function FlipCardSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative m-auto p-auto w-full lg:mb-10">
      <motion.div className="flex overflow-x-scroll" style={{ opacity }}>
        <div className="flex flex-nowrap gap-2 ml-10 mr-5">
          <Card
            frontContent="Click to Flip"
            backContent="Click to Flip Back"
            flipOnClick
          />
          <Card
            frontContent="Hover to Flip"
            backContent="Unhover to Flip Back"
          />
          <Card
            frontContent="Click to Flip"
            backContent="Click to Flip Back"
            flipOnClick
          />
          <Card
            frontContent="Hover to Flip"
            backContent="Unhover to Flip Back"
          />
          <Card
            frontContent="Click to Flip"
            backContent="Click to Flip Back"
            flipOnClick
          />
          <Card
            frontContent="Hover to Flip"
            backContent="Unhover to Flip Back"
          />
          <Card
            frontContent="Click to Flip"
            backContent="Click to Flip Back"
            flipOnClick
          />
          <Card
            frontContent="Hover to Flip"
            backContent="Unhover to Flip Back"
          />
        </div>
      </motion.div>
    </div>
  );
}
