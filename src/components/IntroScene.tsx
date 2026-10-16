"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { intro } from "../data/birthdayContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useExperience } from "./experience-context";

const NAME_STAGE = 3;
const CTA_STAGE = 4;

export default function IntroScene() {
  const { begin, cycle } = useExperience();
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState(-1);

  useEffect(() => {
    if (reduced) {
      setStage(CTA_STAGE);
      return;
    }

    const delays = [500, 2900, 5600, 8200, 9800];
    const timers = delays.map((delay, index) => window.setTimeout(() => setStage(index), delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [reduced]);

  useEffect(() => {
    if (cycle > 0) {
      document.getElementById("open-surprise")?.focus();
    }
  }, [cycle]);

  const ready = stage >= CTA_STAGE;

  return (
    <div className="relative flex min-h-[100dvh] flex-col px-6 py-8">
      {stage < CTA_STAGE && (
        <button
          type="button"
          onClick={() => setStage(CTA_STAGE)}
          className="absolute top-6 right-5 text-xs font-medium tracking-[0.22em] text-ivory/70 uppercase"
        >
          {intro.skip}
        </button>
      )}

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
        <div className="flex min-h-40 flex-col justify-center gap-5">
          {intro.lines.map((line, index) => (
            <motion.p
              key={line}
              animate={{
                opacity: stage >= index ? (stage === index ? 1 : 0.42) : 0,
                y: stage >= index ? 0 : 14,
              }}
              transition={{ duration: reduced ? 0 : 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(1.55rem,3.4vw,2.7rem)] leading-snug text-ivory italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="mt-10 min-h-28">
          {stage >= NAME_STAGE && (
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="display-name text-[clamp(1.7rem,6vw,5.2rem)] text-ivory"
            >
              <span className="block sm:inline">Rohan</span>{" "}
              <span className="block sm:inline">Chourasia</span>
            </motion.h1>
          )}
        </div>

        <div className={`cta-reveal mt-2 ${ready ? "is-shown" : ""}`}>
          <p className="text-sm tracking-[0.16em] text-rose uppercase">{intro.hint}</p>
          <button id="open-surprise" type="button" className="btn-gold mt-6" onClick={begin}>
            {intro.openButton}
          </button>
        </div>
      </div>

      <p className="pb-2 text-center font-script text-3xl text-rose">{intro.signature}</p>
    </div>
  );
}
