"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  
  {
    id: 3,
    name: "Kaushal",
    designation: "Software Developer",
    image:
      "/f1.jpeg",
  },
  {
    id: 4,
    name: "Vinayk",
    designation: "Devops-Engineer",
    image:
      "/f2.jpeg",
  },
  {
    id: 5,
    name: "Saurabh",
    designation: "Backend-Developer",
    image:
      "f3.jpeg",
  },
  {
    id: 6,
    name: "Harsh",
    designation: "Blockchain Developer",
    image:
      "f4.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
