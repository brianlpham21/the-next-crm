"use client";

import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Container from "./Container";
import { Shrikhand } from "next/font/google";

const containerNames = ["To Do", "In Progress", "Testing", "Done"];

const shrikhand = Shrikhand({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Board() {
  const [items, setItems] = useState<Record<string, string[]>>({
    container1: [
      "[FE] Optimize Image Loading with Next.js",
      "[FE] Setup End-to-End Testing with Cypress",
    ],
    container2: [
      "[BE] Add WebSocket Support for Real-Time Updates",
      "[FE] Create Reusable Form Validation Component",
      "[FE] Create Error Boundary Component to Handle UI Failures",
      "[FE] Implement Slack Integration",
    ],
    container3: [
      "[FE] Improve Mobile Responsiveness for Landing Page",
      "[BE] Improve Error Handling in API Responses",
      "[DevOps] Improve CI/CD Pipeline for Faster Deployments",
      "[DevOps] Fix Dockerfile for Production Build",
    ],
    container4: [],
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findContainer(id: string): string | undefined {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key]?.includes(id));
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const id = String(active.id);
    const overId = String(over.id);

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = overIndex === overItems.length - 1;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: activeItems.filter((item) => item !== id),
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const id = String(active.id);
    const overId = String(over.id);

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
  }

  return (
    <div className="lg:mx-14 text-center">
      <h1
        className={`${shrikhand.className} text-3xl text-gray-700 dark:text-gray-300 mb-3`}
      >
        The Productivity Playground
      </h1>
      <div className="flex flex-col md:flex-row">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {Object.entries(items).map(([key, value], index) => (
            <Container
              key={key}
              id={key}
              items={value}
              containerName={containerNames[index]}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}
