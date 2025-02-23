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

  const cards = [
    {
      photoUrl:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backContent: "",
      flipOnClick: false,
    },
    { frontContent: "", backContent: "", flipOnClick: true },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1592937238247-cd0090e02f65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backContent: "",
      flipOnClick: false,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backContent: "",
      flipOnClick: false,
    },
    { frontContent: "", backContent: "", flipOnClick: true },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backContent: "",
      flipOnClick: true,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backContent: "",
      flipOnClick: true,
    },
    { frontContent: "", backContent: "", flipOnClick: true },
  ];

  return (
    <div ref={ref} className="relative m-auto p-auto w-full lg:mb-10">
      <motion.div className="flex overflow-x-scroll" style={{ opacity }}>
        <div className="flex flex-nowrap gap-2 ml-10 mr-5 py-5">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
