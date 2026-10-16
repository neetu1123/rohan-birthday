"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { finale } from "../data/birthdayContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useExperience } from "./experience-context";

const particles = [
  { left: "18%", delay: "0s" },
  { left: "32%", delay: "0.4s" },
  { left: "48%", delay: "0.8s" },
  { left: "63%", delay: "0.2s" },
  { left: "76%", delay: "1s" },
  { left: "24%", delay: "1.3s" },
  { left: "70%", delay: "0.6s" },
];

export default function FinalBirthdayScene() {
  const { replay } = useExperience();
  const reduced = usePrefersReducedMotion();
  const [wished, setWished] = useState(false);

  useEffect(() => {
    if (!wished) return;
    const timer = window.setTimeout(() => {
      document.getElementById("final-message")?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "nearest",
      });
    }, reduced ? 0 : 700);
    return () => window.clearTimeout(timer);
  }, [reduced, wished]);

  const makeWish = async () => {
    if (wished) return;
    setWished(true);
    if (reduced) return;

    const { default: confetti } = await import("canvas-confetti");
    const colors = ["#D7B779", "#D9A0B0", "#FFF5EB", "#F3D7A1", "#8E4A63"];
    void confetti({
      particleCount: 90,
      spread: 72,
      startVelocity: 34,
      origin: { y: 0.62 },
      colors,
      scalar: 0.9,
      ticks: 180,
    });
    void confetti({
      particleCount: 36,
      spread: 110,
      startVelocity: 18,
      origin: { y: 0.68 },
      colors,
      scalar: 0.7,
      decay: 0.92,
    });
  };

  return (
    <section id="finale" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,183,121,0.16),rgba(20,12,18,0.55)_46%,rgba(11,11,20,0.82))]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute top-16 left-[8%] h-40 w-40 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-24 right-[10%] h-48 w-48 rounded-full bg-burgundy/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(1.6rem,3vw,2.3rem)] text-rose italic">{finale.lead}</p>
        <h2 className="section-title mt-4 text-balance">{finale.title}</h2>

        <div className="relative">
          {wished &&
            particles.map((particle) => (
              <span
                key={particle.left}
                className="wish-particle"
                style={{ left: particle.left, bottom: "4rem", animationDelay: particle.delay }}
                aria-hidden="true"
              />
            ))}
          <BirthdayCake lit={!wished} />
        </div>

        {!wished && (
          <button type="button" className="btn-gold mt-8" onClick={() => void makeWish()}>
            {finale.button}
          </button>
        )}

        {wished && (
          <motion.div
            id="final-message"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : 0.35 }}
            aria-live="polite"
          >
            <div className="mx-auto mt-8 max-w-xl space-y-4 text-[1.05rem] leading-8 text-ivory">
              {finale.message.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-10 font-script text-4xl text-gold">{finale.signature}</p>
            <div className="glow-heart mx-auto mt-6 w-fit" aria-hidden="true">
              <Heart className="h-7 w-7 fill-current" />
            </div>
            <button type="button" className="btn-ghost mt-8" onClick={replay}>
              {finale.replay}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function BirthdayCake({ lit }: { lit: boolean }) {
  return (
    <div className="cake" aria-hidden="true">
      <div className="candles">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="candle" key={index}>
            <div className="flame-hold">
              <div className={`flame ${lit ? "" : "is-out"}`} />
            </div>
            <div className="stick" />
          </div>
        ))}
      </div>
      <div className="tier tier-top">
        <div className="frosting" />
        <span className="drip" style={{ left: "22%", height: "1.1rem" }} />
        <span className="drip" style={{ right: "26%", height: "0.8rem" }} />
      </div>
      <div className="tier tier-mid">
        <div className="frosting" />
        <span className="drip" style={{ left: "18%", height: "1.3rem" }} />
        <span className="drip" style={{ left: "48%", height: "0.9rem" }} />
        <span className="drip" style={{ right: "16%", height: "1.2rem" }} />
      </div>
      <div className="tier tier-base">
        <div className="frosting" />
        <div className="pearls" />
      </div>
      <div className="plate" />
      <div className="cake-glow" />
    </div>
  );
}
