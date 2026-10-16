"use client";

import { Heart } from "lucide-react";
import { useEffect } from "react";
import { hero } from "../data/birthdayContent";
import { scrollToSection } from "../lib/scroll";
import CinematicImage from "./CinematicImage";
import RomanticBalloons from "./RomanticBalloons";

const sparkles = [
  { left: "8%", top: "16%", delay: "0s" },
  { left: "86%", top: "18%", delay: "0.7s" },
  { left: "14%", top: "72%", delay: "1.2s" },
  { left: "82%", top: "70%", delay: "0.3s" },
  { left: "48%", top: "6%", delay: "1s" },
  { left: "94%", top: "44%", delay: "1.6s" },
  { left: "2%", top: "46%", delay: "0.4s" },
];

export default function BirthdayHero() {
  useEffect(() => {
    document.getElementById("hero-title")?.focus({ preventScroll: true });
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,39,67,0.42),transparent_62%)]"
        aria-hidden="true"
      />
      <RomanticBalloons count={5} />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-full border border-gold/70 shadow-[0_0_40px_rgba(215,183,121,0.28)] sm:h-44 sm:w-44">
          <CinematicImage src={hero.portrait} alt={hero.portraitAlt} priority />
        </div>
        <div className="relative">
          {sparkles.map((sparkle) => (
            <span
              key={`${sparkle.left}-${sparkle.top}`}
              className="sparkle"
              style={{ left: sparkle.left, top: sparkle.top, animationDelay: sparkle.delay }}
              aria-hidden="true"
            />
          ))}
          <h1
            id="hero-title"
            tabIndex={-1}
            className="section-title mt-5 text-[clamp(3.1rem,9vw,7.4rem)] outline-none"
          >
            {hero.greeting}
          </h1>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-3 font-display text-[clamp(2.2rem,6vw,4.8rem)] leading-none text-ivory">
            <span>{hero.name}</span>
            <Heart className="h-7 w-7 fill-rose text-rose sm:h-9 sm:w-9" aria-hidden="true" />
          </p>
        </div>

        <p className="section-copy max-w-2xl">{hero.subheading}</p>

        <div className="mt-10 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <button type="button" className="btn-gold" onClick={() => scrollToSection("story")}>
            {hero.discover}
          </button>
          <button type="button" className="btn-ghost" onClick={() => scrollToSection("letter")}>
            {hero.letter}
          </button>
        </div>
      </div>

      <button
        type="button"
        className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2"
        onClick={() => scrollToSection("story")}
        aria-label="Scroll to the story"
      >
        <span />
      </button>
    </section>
  );
}
