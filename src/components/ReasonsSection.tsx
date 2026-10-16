"use client";

import { useState } from "react";
import { reasons } from "../data/birthdayContent";
import SceneHeading from "./SceneHeading";

export default function ReasonsSection() {
  const [open, setOpen] = useState<boolean[]>(() => reasons.cards.map(() => false));

  return (
    <section id="reasons" className="relative px-5 py-28 md:px-10 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,39,67,0.35),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SceneHeading title={reasons.title} />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.cards.map((card, index) => {
            const isOpen = open[index] ?? false;
            return (
              <li key={card.id} className="flip-scene">
                <button
                  type="button"
                  className={`flip-inner ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpen((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)))
                  }
                >
                  <span className="flip-face border border-gold/35 bg-gradient-to-br from-plum to-midnight" aria-hidden={isOpen}>
                    <span className="font-display text-sm tracking-[0.32em] text-gold">{card.number}</span>
                    <span className="mt-3 font-display text-4xl text-ivory">{card.title}</span>
                    <span className="mt-4 text-xs tracking-[0.2em] text-rose uppercase">
                      {isOpen ? "Tap to close" : "Tap to reveal"}
                    </span>
                  </span>
                  <span className="flip-face flip-back border border-gold/50" aria-hidden={!isOpen}>
                    <span className="font-display text-2xl leading-snug">{card.message}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
