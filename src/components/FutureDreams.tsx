"use client";

import type { DreamTone } from "../data/birthdayContent";
import { dreams } from "../data/birthdayContent";
import Reveal from "./Reveal";
import SceneHeading from "./SceneHeading";

const tones: Record<DreamTone, string> = {
  sunset:
    "radial-gradient(circle at 18% 18%, rgba(215,183,121,0.62), transparent 36%), linear-gradient(165deg, #7a3a4c, #241526 72%)",
  celebration:
    "radial-gradient(circle at 80% 16%, rgba(255,245,235,0.28), transparent 28%), linear-gradient(180deg, #642743, #1a1018)",
  places:
    "radial-gradient(circle at 50% 80%, rgba(215,183,121,0.28), transparent 34%), linear-gradient(200deg, #14101c, #3c2438 80%)",
  together:
    "radial-gradient(circle at 20% 70%, rgba(217,160,176,0.5), transparent 38%), linear-gradient(160deg, #4a2436, #0b0b14)",
  unwritten:
    "linear-gradient(180deg, rgba(215,183,121,0.16), transparent 22%), linear-gradient(180deg, #0b0b14, #2a1524)",
};

export default function FutureDreams() {
  return (
    <section id="dreams" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(122,58,52,0.45),rgba(36,21,38,0.35)_38%,rgba(11,11,20,0.2))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SceneHeading title={dreams.title} text={dreams.text} />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {dreams.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.06}
              className={`xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""} ${index === 4 ? "md:col-span-2 xl:col-span-2" : ""}`}
            >
              <article
                className="flex min-h-72 flex-col justify-end rounded-3xl border border-gold/25 p-6"
                style={{ background: tones[card.tone] }}
              >
                <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">Someday</p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ivory">{card.title}</h3>
                <p className="mt-3 leading-7 text-ivory/85">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] leading-snug text-ivory italic">
            {dreams.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
