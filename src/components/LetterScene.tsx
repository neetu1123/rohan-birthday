"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { letter } from "../data/birthdayContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { scrollToSection } from "../lib/scroll";

type Phase = "closed" | "opening" | "open";

export default function LetterScene() {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    if (phase !== "opening") return;
    const timer = window.setTimeout(() => setPhase("open"), reduced ? 0 : 1000);
    return () => window.clearTimeout(timer);
  }, [phase, reduced]);

  const openLetter = () => {
    if (phase !== "closed") return;
    setPhase(reduced ? "open" : "opening");
  };

  return (
    <section id="letter" className="relative px-5 py-28 md:px-10 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(36,21,38,0.15),rgba(100,39,67,0.5),rgba(11,11,20,0.72))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="section-title text-balance">{letter.title}</h2>
        <p className="section-copy">{letter.hint}</p>

        {phase !== "open" && (
          <div className="mt-12">
            <button
              type="button"
              className={`envelope ${phase === "opening" ? "is-opening" : ""}`}
              onClick={openLetter}
              aria-label={letter.openButton}
            >
              <span className="envelope-body" />
              <span className="envelope-pocket" />
              <span className="envelope-flap" />
              <span className="envelope-seal">
                <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
            </button>
            <button type="button" className="btn-gold mt-8" onClick={openLetter}>
              {letter.openButton}
            </button>
          </div>
        )}

        {phase === "open" && (
          <motion.article
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="letter-paper mx-auto mt-12 max-w-2xl rounded-[1.6rem] px-6 py-10 text-left sm:px-12 sm:py-14"
            aria-live="polite"
          >
            <p className="font-display text-3xl italic">{letter.greeting}</p>
            <div className="mt-6 space-y-5 text-[1.05rem] leading-8">
              {letter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">{letter.closing}</p>
            <p className="mt-2 font-script text-4xl text-burgundy">{letter.signature}</p>
            <div className="mt-10 text-center">
              <button type="button" className="btn-gold" onClick={() => scrollToSection("dreams")}>
                {letter.keep}
              </button>
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
}
