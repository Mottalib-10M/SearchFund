"use client";

import { type RefObject, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Phase colors - must match PHASE_COLORS in journey-phases.ts */
/* ------------------------------------------------------------------ */
const PHASE_COLORS = [
  "#5856D6", // prepare
  "#0071E3", // fundraise
  "#32ADE6", // search
  "#34C759", // acquire
  "#FF9F0A", // operate
  "#AF52DE", // exit
] as const;

const PHASE_COUNT = PHASE_COLORS.length;

/* ------------------------------------------------------------------ */
/* SVG path segments - 6 connected cubic Bezier curves */
/* ViewBox: 0 0 200 1200 (tall, narrow) */
/* Each segment spans 200 units of vertical space. */
/* The trail weaves left-right in an organic S-curve pattern. */
/* ------------------------------------------------------------------ */
const SEGMENTS = [
  // Segment 1 (prepare): top-center → curves right → ends center-left
  "M 100,0 C 160,40 170,120 120,200",
  // Segment 2 (fundraise): picks up → curves left
  "M 120,200 C 70,280 40,320 80,400",
  // Segment 3 (search): picks up → curves right
  "M 80,400 C 120,480 170,520 130,600",
  // Segment 4 (acquire): picks up → curves left
  "M 130,600 C 90,680 50,720 90,800",
  // Segment 5 (operate): picks up → curves right
  "M 90,800 C 130,880 160,920 120,1000",
  // Segment 6 (exit): picks up → curves left → ends center
  "M 120,1000 C 80,1080 60,1140 100,1200",
] as const;

/* ------------------------------------------------------------------ */
/* Animated segment - one per phase */
/* ------------------------------------------------------------------ */
function AnimatedSegment({
  d,
  color,
  scrollYProgress,
  rangeStart,
  rangeEnd,
}: {
  d: string;
  color: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  rangeStart: number;
  rangeEnd: number;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [0, 1],
  );

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      fill="none"
      style={{ pathLength }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Mobile progress bar */
/* ------------------------------------------------------------------ */
function MobileProgressBar({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Map scroll progress to a height percentage
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Map scroll progress to the active phase color
  const backgroundColor = useTransform(scrollYProgress, (v) => {
    const idx = Math.min(
      Math.floor(v * PHASE_COUNT),
      PHASE_COUNT - 1,
    );
    return PHASE_COLORS[Math.max(0, idx)];
  });

  return (
    <div
      className="fixed left-0 top-0 z-10 block h-full w-[3px] sm:hidden"
      aria-hidden
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-gray-200/40" />
      {/* Animated fill */}
      <motion.div
        className="absolute left-0 top-0 w-full origin-top"
        style={{ height, backgroundColor }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component */
/* ------------------------------------------------------------------ */
export default function JourneyTrail({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pre-compute per-segment scroll ranges (each segment = 1/6 of total)
  const segmentRanges = useMemo(
    () =>
      SEGMENTS.map((_, i) => ({
        start: i / PHASE_COUNT,
        end: (i + 1) / PHASE_COUNT,
      })),
    [],
  );

  return (
    <>
      {/* ── Desktop / tablet SVG trail ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
        aria-hidden
      >
        <svg
          viewBox="0 0 200 1200"
          preserveAspectRatio="none"
          className="h-full w-full"
          style={{ willChange: "auto" }}
        >
          {/* Background ghost paths */}
          {SEGMENTS.map((d, i) => (
            <path
              key={`bg-${i}`}
              d={d}
              stroke="#E5E5EA"
              strokeOpacity={0.4}
              strokeWidth={3}
              strokeLinecap="round"
              fill="none"
            />
          ))}

          {/* Animated colored paths */}
          {SEGMENTS.map((d, i) => (
            <AnimatedSegment
              key={`fg-${i}`}
              d={d}
              color={PHASE_COLORS[i]}
              scrollYProgress={scrollYProgress}
              rangeStart={segmentRanges[i].start}
              rangeEnd={segmentRanges[i].end}
            />
          ))}
        </svg>
      </div>

      {/* ── Mobile progress bar ── */}
      <MobileProgressBar scrollYProgress={scrollYProgress} />
    </>
  );
}
