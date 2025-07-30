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
import { FocusCardsDemo } from "@/parts/FocuscardDemo";
import { FlipWordsDemo } from "@/parts/FlipWordDemo";
import { AnimatedTestimonialsDemo } from "@/parts/OurClient";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
    <div className="bg-black scroll-smooth min-h-screen">
      {/* Header Section */}
      <header
        id="home"
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <FloatingDockDemo />
            </div>
            <div className="hidden sm:block">
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <SparklesPreview />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-y-0 ">
            {data.map((item, key) => (
              <div key={key} className="flex justify-center  sm:mb-[-60px]">
                <ThreeDCardDemo item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 mt-0 sm:mt-[-170px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TimelineDemo />
        </div>
      </section>

      {/* Typewriter Section */}
      <section id="typewriter" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="text-center">
            <TypewriterEffectDemo />
          </div>
          <div>
            <LayoutGridDemo />
          </div>
        </div>
      </section>

      {/* Infinite Moving Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 mt-0 sm:mt-[-250px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Globe Section */}
      <section className="py-12 sm:py-16 lg:py-20 mt-0 sm:mt-[-240px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlobeDemo />
        </div>
      </section>

      {/* Tabs Section */}
      <section id="tabs" className="py-12 sm:py-16 lg:py-20 mt-[-230px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TabsDemo />
        </div>
      </section>
      <section id="tabs" className="py-12 sm:py-16 lg:py-20  bg-white rounded-lg  ">
        <div className="flex flex-col  mx-auto px-4 sm:px-6 lg:px-8">
          <FlipWordsDemo />
       

  <FocusCardsDemo/>


        
        </div>
      </section>
      {/* Our Client */}
      <section id="tabs" className="py-12 sm:py-16 lg:py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className=" text-white text-center text-6xl font-bold">Our Client</h1>
        <AnimatedTestimonialsDemo/>
        </div>
      </section>
      {/* Footer */}
      <footer id="footer" className="mt-12 sm:mt-16 lg:mt-20">
        <Footer />
      </footer>
    </div>
  );
}
