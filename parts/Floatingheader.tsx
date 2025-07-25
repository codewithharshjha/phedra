"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandProducthunt,
  IconHome,
  IconDeviceDesktopFilled,
  IconPhoneDone,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white bg-white/10 rounded-lg p-1" />
      ),
      href: "#home",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandProducthunt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Services",
      icon: (
        <IconDeviceDesktopFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#tabs",
    },
    {
      title: "SocialMedia",
      icon: (
        <IconPhoneDone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#typewriter",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
