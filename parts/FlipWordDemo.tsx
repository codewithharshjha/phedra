import React from "react";
import { FlipWords } from "../components/ui/flip-words"

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[15rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-bold  text-blue-600 dark:text-blue-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Phaedra Plus
      </div>
    </div>
  );
}
