"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ItemProps {
  id: string;
}

export function Item({ id }: ItemProps) {
  return (
    <div className="flex items-center justify-center w-full h-10 bg-gray-600 my-2 border-2 border-gray-700 rounded-md text-gray-200 py-5">
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
