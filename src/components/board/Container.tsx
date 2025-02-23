"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { Shrikhand } from "next/font/google";

interface ContainerProps {
  id: string;
  items: string[];
}

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Container({ id, items }: ContainerProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className="px-2 m-2 flex-1 rounded-md bg-gray-300 dark:bg-gray-500"
      >
        <h1
          className={`flex justify-center pt-2 text-gray-800 dark:text-gray-200 ${shrikhand.className}`}
        >
          Container
        </h1>
        {items.map((id: string) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
