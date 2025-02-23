"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  display: "swap",
  subsets: ["latin"],
});
interface ItemProps {
  id: string;
}

export function Item({ id }: ItemProps) {
  return (
    <div
      className={`flex items-center text-center justify-center w-full my-2 border-2 px-2 py-5 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200 border-gray-400 dark:border-gray-700 ${robotoSlab.className}`}
    >
      {id}
    </div>
  );
}

export default function SortableItem({ id }: ItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item id={id} />
    </div>
  );
}
