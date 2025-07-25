import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 – Agriculture + Biomedical",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We designed and implemented a hybrid solution combining precision agriculture with biomedical data analytics. The system uses IoT sensors, drone imagery, and predictive health diagnostics to boost crop yields and monitor soil and plant health in real time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/process2.jpeg"
              alt="Agriculture tech"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/process3.jpeg"
              alt="Biomedical sensors"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="IoT and farming"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Crop health monitoring"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023 – AI Chatbot",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed an AI-powered chatbot integrated with a custom knowledge base, multilingual support, voice recognition, and human fallback. It is used by customer support teams and educational institutions to deliver intelligent, real-time assistance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/process5.jpeg"
              alt="AI chat interface"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/process6.jpeg"
              alt="NLP engine"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Bot dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="AI knowledge base"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2022 – 3D/VR/AR for Real Estate",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Launched a real estate experience platform using 3D modeling, virtual tours (VR), and AR-enabled furniture placement. Agents and clients can explore properties remotely with photorealistic walkthroughs and smart interactivity.
          </p>
          <div className="mb-8 space-y-2">
            <p className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Real-time WebGL 3D models</p>
            <p className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ AR-based home staging via mobile</p>
            <p className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ VR-ready immersive property tours</p>
            <p className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Agent dashboard with analytics</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/process9.jpeg"
              alt="3D modeling"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/process8.jpeg"
              alt="VR Tour"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/vir1.png"
              alt="Real estate platform"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="/vir2.png"
              alt="Client dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
