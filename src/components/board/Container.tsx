"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { Roboto_Slab } from "next/font/google";

interface ContainerProps {
  id: string;
  items: string[];
  containerName: string;
}

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Container({
  id,
  items,
  containerName,
}: ContainerProps) {
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
        className="px-2 m-2 flex-1 min-h-10 rounded-md bg-gray-300 dark:bg-gray-500"
      >
        <h1
          className={`flex justify-center pt-2 text-gray-800 dark:text-gray-200 ${robotoSlab.className}`}
          style={{ fontWeight: "800" }}
        >
          {containerName}
        </h1>
        {items.map((id: string) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
