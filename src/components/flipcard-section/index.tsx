"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Card from "./card";

export default function FlipCardSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ opacity }}>
        <div className="flex justify-center gap-3 p-6 overflow-h">
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
        </div>
      </motion.div>
    </div>
  );
}
