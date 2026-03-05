"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function HeroImage() {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={
        resolvedTheme === "dark"
          ? "/creative-thinking-2.gif"
          : "/creative-thinking.gif"
      }
      alt="Creative Thinking"
      width={900}
      height={900}
      unoptimized
      className="w-full h-auto"
    />
  );
}
