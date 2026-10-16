"use client";

import { useEffect, useState } from "react";
import { navigation } from "../data/birthdayContent";
import { scrollToSection } from "../lib/scroll";
import { useExperience } from "./experience-context";

export default function ScrollProgress() {
  const { started, cycle } = useExperience();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(navigation[0].id);

  useEffect(() => {
    if (!started) return;

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [started, cycle]);

  useEffect(() => {
    if (!started) return;
    const elements = navigation
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.7], rootMargin: "-15% 0px -40% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [started, cycle]);

  if (!started) return null;

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 h-0.5 bg-white/5" aria-hidden="true">
        <div className="h-full origin-left bg-gold" style={{ width: `${progress * 100}%` }} />
      </div>

      <nav aria-label="Story sections" className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            aria-label={item.label}
            aria-current={active === item.id ? "true" : undefined}
            className="grid h-6 w-6 place-items-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full border border-gold transition ${
                active === item.id ? "scale-125 bg-gold" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </nav>

      <details className="fixed top-4 left-4 z-50 lg:hidden">
        <summary className="cursor-pointer list-none rounded-full border border-gold/40 bg-midnight/80 px-3 py-2 text-[0.68rem] tracking-[0.22em] text-gold uppercase backdrop-blur">
          Journey
        </summary>
        <div className="mt-2 flex min-w-36 flex-col rounded-2xl border border-gold/30 bg-midnight/92 p-2 backdrop-blur">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-xl px-3 py-2 text-left text-sm ${
                active === item.id ? "text-gold" : "text-ivory/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </details>
    </>
  );
}
