"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

interface ContainerProps {
  id: string;
  items: string[];
}

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
      <div ref={setNodeRef} className="px-2 m-2 flex-1 bg-gray-100 rounded-md">
        {items.map((id: string) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
