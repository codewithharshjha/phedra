"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with [Your Name] was a game-changer for our blockchain initiative. He brought deep technical expertise and delivered a secure, scalable product ahead of schedule. His communication was clear, and he handled complex smart contract logic like a pro. Highly recommended for any Web3 development!",
    name: "Rishav Jain",
    title: "Blockchain Product – Client Review",
  },
  {
    quote:
      "We needed a platform that could handle farm data, logistics, and user-friendly dashboards. [Your Name] not only understood the agricultural nuances but also built a system that streamlined our operations. He was responsive, proactive, and truly went above and beyond.",
    name: "Shashank Mishra",
    title: "Agriculture Sector Project – Client Review"

  },
  {
    quote: "From listings to CRM integration, [Your Name] delivered a fully functional real estate portal that exceeded our expectations. The UI/UX was sleek and easy to use. He handled third-party integrations like payment and maps seamlessly. A reliable and skilled developer!.",
    name: "Dhruv gupta",
    title: "Real Estate Project – Client Review",
  },
  {
    quote:
      "Our e-commerce platform needed speed, scalability, and a polished frontend—and that’s exactly what [Your Name] delivered. He integrated payment gateways, built a clean admin panel, and optimized our site for performance. We're already seeing growth in conversions!.",
    name: "Jane Austen",
    title: "E-commerce Project – Client Review",
  },

];
