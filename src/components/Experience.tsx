"use client";

import { AnimatePresence, motion } from "framer-motion";
import Atmosphere from "./Atmosphere";
import BackToTop from "./BackToTop";
import BirthdayHero from "./BirthdayHero";
import { ExperienceProvider, useExperience } from "./experience-context";
import FinalBirthdayScene from "./FinalBirthdayScene";
import FutureDreams from "./FutureDreams";
import IntroScene from "./IntroScene";
import LetterScene from "./LetterScene";
import MemoryGallery from "./MemoryGallery";
import MusicToggle from "./MusicToggle";
import ReasonsSection from "./ReasonsSection";
import ScrollProgress from "./ScrollProgress";
import StoryTimeline from "./StoryTimeline";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function OpeningLight() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20"
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,183,121,0.32),transparent_58%)]" />
    </motion.div>
  );
}

function ExperienceView() {
  const { started, cycle } = useExperience();
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative z-0 min-h-[100dvh] bg-midnight text-ivory">
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <ScrollProgress />
      <MusicToggle />
      <main>
        <AnimatePresence>
          {!started && (
            <motion.div
              key="intro"
              className="fixed inset-0 z-30"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0.01 : 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <IntroScene />
            </motion.div>
          )}
        </AnimatePresence>

        {started && (
          <motion.div
            key={cycle}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0.01 : 1.05, delay: reduced ? 0 : 0.28, ease: "easeOut" }}
          >
            {!reduced && <OpeningLight />}
            <BirthdayHero />
            <StoryTimeline />
            <MemoryGallery />
            <ReasonsSection />
            <LetterScene />
            <FutureDreams />
            <FinalBirthdayScene />
            <BackToTop />
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default function Experience() {
  return (
    <ExperienceProvider>
      <ExperienceView />
    </ExperienceProvider>
  );
}
