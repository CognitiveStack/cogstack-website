import { Hero } from "@/components/home/Hero";
import { StackDiagram } from "@/components/home/StackDiagram";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { TechStack } from "@/components/home/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackDiagram />
      <WhatWeBuild />
      <TechStack />
    </>
  );
}
