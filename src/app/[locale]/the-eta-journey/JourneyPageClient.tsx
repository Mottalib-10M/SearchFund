"use client";

import { useRef } from "react";
import { journeyPhases } from "@/data/journey-phases";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyNav from "@/components/journey/JourneyNav";
import JourneyPhase from "@/components/journey/JourneyPhase";
import JourneyTrail from "@/components/journey/JourneyTrail";
import JourneyOutro from "@/components/journey/JourneyOutro";

export default function JourneyPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      <JourneyHero />
      <JourneyNav />
      <JourneyTrail containerRef={containerRef} />

      {journeyPhases.map((phase, index) => (
        <JourneyPhase key={phase.id} phase={phase} index={index} />
      ))}

      <JourneyOutro />
    </div>
  );
}
