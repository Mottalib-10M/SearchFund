"use client";

import { Fragment, type RefObject, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Phase colors                                                       */
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
/* Paths — ViewBox 0 0 1000 5000                                      */
/*                                                                    */
/* Junction Y positions aligned to section title heights:             */
/*   500 (10%) → Prepare                                              */
/*  1100 (22%) → Fundraise  ← confirmed perfect                      */
/*  1850 (37%) → Search                                               */
/*  2600 (52%) → Acquire                                              */
/*  3350 (67%) → Operate                                              */
/*  4100 (82%) → Exit                                                 */
/*  5000        → end                                                 */
/*                                                                    */
/* All junctions have mirrored control points (tangent continuity).   */
/* ------------------------------------------------------------------ */

const KNOT_PATH = [
  "M 500,20",
  "C 700,35 900,80 850,160",
  "C 800,240 600,280 460,220",
  "C 320,160 150,120 140,210",
  "C 130,300 330,340 490,290",
  "C 650,240 870,170 880,260",
  "C 890,350 730,390 570,360",
  "C 410,330 230,380 240,300",
  "C 250,220 390,190 520,230",
  "C 650,270 750,340 690,390",
  "C 630,440 460,420 400,360",
  "C 340,300 390,250 490,280",
  "C 590,310 660,380 620,430",
  "C 580,480 540,490 500,500",
].join(" ");

const GHOST_PATH = [
  KNOT_PATH,
  "C 460,510 350,580 400,720",
  "C 450,860 700,1000 780,1100",
  "C 860,1200 300,1550 300,1850",
  "C 300,2150 750,2350 720,2600",
  "C 690,2850 250,3050 350,3350",
  "C 450,3650 800,3800 720,4100",
  "C 640,4400 380,4750 500,5000",
].join(" ");

const SEGMENTS = [
  "M 500,500 C 460,510 350,580 400,720 C 450,860 700,1000 780,1100",
  "M 780,1100 C 860,1200 300,1550 300,1850",
  "M 300,1850 C 300,2150 750,2350 720,2600",
  "M 720,2600 C 690,2850 250,3050 350,3350",
  "M 350,3350 C 450,3650 800,3800 720,4100",
  "M 720,4100 C 640,4400 380,4750 500,5000",
] as const;

/* Scroll ranges = junction Y / 5000                                  */
const SEGMENT_SCROLLS = [
  { start: 0.10, end: 0.22 },  // Prepare  → Fundraise
  { start: 0.22, end: 0.37 },  // Fundraise → Search
  { start: 0.37, end: 0.52 },  // Search   → Acquire
  { start: 0.52, end: 0.67 },  // Acquire  → Operate
  { start: 0.67, end: 0.82 },  // Operate  → Exit
  { start: 0.82, end: 1.00 },  // Exit     → end
];

/* ------------------------------------------------------------------ */
/* Animated segment                                                   */
/* ------------------------------------------------------------------ */
function AnimatedSegment({
  d,
  color,
  scrollYProgress,
  rangeStart,
  rangeEnd,
  initialProgress = 0,
  opacity = 0.22,
}: {
  d: string;
  color: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  rangeStart: number;
  rangeEnd: number;
  initialProgress?: number;
  opacity?: number;
}) {
  const pathLength = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [initialProgress, 1],
  );

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={12.8}
      strokeLinecap="round"
      strokeOpacity={opacity}
      fill="none"
      style={{ pathLength }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Mobile timeline trail                                              */
/* ------------------------------------------------------------------ */
const PHASE_SCROLL_STARTS = [0.10, 0.22, 0.37, 0.52, 0.67, 0.82];
const PHASE_IDS = ["prepare", "fundraise", "search", "acquire", "operate", "exit"];

function MobileTrail({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [activePhase, setActivePhase] = useState(-1);
  const activeRef = useRef(-1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      let phase = -1;
      for (let i = PHASE_SCROLL_STARTS.length - 1; i >= 0; i--) {
        if (v >= PHASE_SCROLL_STARTS[i]) {
          phase = i;
          break;
        }
      }
      if (phase !== activeRef.current) {
        activeRef.current = phase;
        setActivePhase(phase);
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div
      className="fixed left-2.5 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center sm:hidden"
    >
      {PHASE_COLORS.map((color, i) => (
        <Fragment key={i}>
          {/* Phase node */}
          <button
            onClick={() =>
              document
                .getElementById(PHASE_IDS[i])
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={`Phase ${i + 1}: ${PHASE_IDS[i]}`}
            className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-all duration-300 ${
              i <= activePhase
                ? "border-transparent text-white"
                : "border-gray-300/50 bg-white/80 text-gray-400 backdrop-blur-sm"
            }`}
            style={
              i <= activePhase
                ? {
                    backgroundColor: color,
                    boxShadow: `0 0 12px ${color}40`,
                  }
                : undefined
            }
          >
            {i + 1}
          </button>

          {/* Connecting segment */}
          {i < PHASE_COUNT - 1 && (
            <div className="relative h-5 w-[3px] overflow-hidden rounded-full bg-gray-200/30">
              <div
                className="absolute inset-x-0 top-0 rounded-full transition-all duration-500 ease-out"
                style={{
                  height:
                    i < activePhase
                      ? "100%"
                      : i === activePhase
                        ? "50%"
                        : "0%",
                  backgroundColor: color,
                }}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                     */
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

  return (
    <>
      {/* ── Desktop / tablet SVG trail ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
        aria-hidden
      >
        <svg
          viewBox="0 0 1000 5000"
          preserveAspectRatio="none"
          className="h-full w-full"
          style={{ willChange: "auto" }}
        >
          {/* Ghost path */}
          <path
            d={GHOST_PATH}
            stroke="#E5E5EA"
            strokeOpacity={0.18}
            strokeWidth={12.8}
            strokeLinecap="round"
            fill="none"
          />

          {/* Knot: 90% pre-drawn — brand blue */}
          <AnimatedSegment
            d={KNOT_PATH}
            color="#0071E3"
            scrollYProgress={scrollYProgress}
            rangeStart={0}
            rangeEnd={0.10}
            initialProgress={0.9}
            opacity={0.22}
          />

          {/* Phase segments */}
          {SEGMENTS.map((d, i) => (
            <AnimatedSegment
              key={i}
              d={d}
              color={PHASE_COLORS[i]}
              scrollYProgress={scrollYProgress}
              rangeStart={SEGMENT_SCROLLS[i].start}
              rangeEnd={SEGMENT_SCROLLS[i].end}
            />
          ))}
        </svg>
      </div>

      {/* ── Mobile timeline trail ── */}
      <MobileTrail scrollYProgress={scrollYProgress} />
    </>
  );
}
