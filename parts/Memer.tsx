"use client";
import InputDatahtmlForm from "@/forms/InputDataForm";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export function TypewriterEffectDemo() {
  const words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
    {
      text: "Phaedra Plus.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  // Function to scroll to footer
  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      // footer.scrollIntoView({ behavior: "smooth" });
      footer.scrollIntoView({behavior:"smooth"})
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-[-300px] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {/* <button onClick={handleScrollToFooter}className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button> */}
        <Popover>
  <PopoverTrigger className=" text-black bg-white rounded-lg p-2 sc">Join Now</PopoverTrigger>
  <PopoverContent className="  bg-black text-white rounded-lg h-auto w-auto p-10  ">
  <InputDatahtmlForm/>
  </PopoverContent>
</Popover>
        <button
          onClick={handleScrollToFooter}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
