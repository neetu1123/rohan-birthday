"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { story } from "../data/birthdayContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import CinematicImage from "./CinematicImage";
import RomanticBalloons from "./RomanticBalloons";
import SceneHeading from "./SceneHeading";

export default function StoryTimeline() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.4 });

  return (
    <section id="story" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-36">
      <RomanticBalloons />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(36,21,38,0.55),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SceneHeading title={story.title} text={story.text} />

        <div ref={ref} className="relative mt-20">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-gold/20 md:left-1/2" aria-hidden="true" />
          <motion.div
            style={reduced ? undefined : { scaleY }}
            className="absolute top-0 bottom-0 left-3 w-px origin-top bg-gold md:left-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-16 md:space-y-24">
            {story.chapters.map((chapter, index) => {
              const flip = index % 2 === 1;
              return (
                <motion.li
                  key={chapter.id}
                  initial={reduced ? false : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: reduced ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid items-center gap-6 pl-12 md:grid-cols-2 md:gap-16 md:pl-0"
                >
                  <span className="absolute top-1 left-3 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-gold/70 bg-midnight font-display text-sm text-gold md:left-1/2">
                    {chapter.number}
                  </span>

                  <div className={flip ? "md:order-2 md:pl-8" : "md:pr-8 md:text-right"}>
                    <p className="text-xs tracking-[0.32em] text-gold uppercase">Chapter {chapter.number}</p>
                    <h3 className="mt-2 font-display text-4xl text-ivory md:text-5xl">{chapter.title}</h3>
                    <p className="mt-4 text-base leading-8 text-rose">{chapter.body}</p>
                  </div>

                  <div className={flip ? "md:order-1 md:pr-8" : "md:pl-8"}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/25">
                      {chapter.image ? (
                        <CinematicImage src={chapter.image} alt={chapter.imageAlt ?? chapter.title} variant={index} />
                      ) : (
                        <div className={`placeholder-art art-${index % 6}`} />
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
