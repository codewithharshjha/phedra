"use client";

import { FloatingDockDemo } from "@/parts/Floatingheader";
import { AnimatedTooltipPreview } from "@/parts/FloatingMember";
import { LayoutGridDemo } from "@/parts/Founder";
import { SparklesPreview } from "@/parts/Hero";
import { InfiniteMovingCardsDemo } from "@/parts/InfiniteMovingCard";
import { TypewriterEffectDemo } from "@/parts/Memer";
import { ThreeDCardDemo } from "@/parts/ProjectCard";
import { TextGenerateEffectDemo } from "@/parts/TextGenerater";
import { TimelineDemo } from "@/parts/WorkProcess";
import Image from "next/image";
import Footer from "@/parts/Footer";
import { GlobeDemo } from "@/parts/GlobeDemo";
import { TabsDemo } from "@/parts/Tabsdemo";

export default function Home() {
  const data = [
    {
      title: "Biofield Power",
      description: "Transforming Agriculture with clean energy",
      image: "/pic1.jpeg",
      url: "https://biofieldpower.com/",
    },
    {
      title: "Rimon Ai",
      description: "Innovating the future of tech",
      image: "/rimonai.png",
      url: "https://rimon.ai/",
    },
    {
      title: "Dapprader",
      description: "Blockchain sustainable systems",
      image: "/blockchain.png",
      url: "https://dappradar.com/",
    },
    {
      title: "Red Phantom Technocelty 4",
      description: "Service Provider Company",
      image: "/redphantom.png",
      url: "https://rptechnovelty.com/",
    },
    {
      title: "Kitabwalah",
      description: "Smart agriculture revolution",
      image: "/pic5.jpeg",
      url: "https://kitabwalah.com/",
    },
    {
      title: "Project 7",
      description: "Energy innovation at scale",
      image: "/pic7.jpeg",
      url: "https://www.virtueaze.com/",
    },
  ];

  return (
    <div className="bg-black scroll-smooth">
      {/* Header Section */}
      <div className="grid grid-cols-3 justify-center p-0.5 items-center" id="home">
        <div>
          <img
            src="logo.jpeg"
            className="h-12 w-12 ml-10 mt-[-15px]"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="mt-[-5px]">
          <FloatingDockDemo />
        </div>
        <div className=" ml-[80px] mt-[20px]">
          <AnimatedTooltipPreview />
        </div>
      </div>

      <SparklesPreview />

      {/* Projects Section */}
      <div id="projects" className="grid grid-cols-3 gap-10 mt-[-80px] p-12">
        {data.map((item, key) => (
          <div key={key}>
            <ThreeDCardDemo item={item} />
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className=" mt-[-200px]">
 <TimelineDemo />

      </div>
     
      {/* Typewriter Section */}
      <div id="typewriter" className=" mt-40">
        <TypewriterEffectDemo />
          <LayoutGridDemo />
      </div>
<InfiniteMovingCardsDemo/>
      {/* Services Section */}
        <GlobeDemo />
      <div id="tabs">
        <TabsDemo />
      </div>

      
    <div id="footer">
   <Footer />
    </div>
   
    </div>
  );
}
