"use client";

import { useState } from "react";
import { gallery } from "../data/birthdayContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import CinematicImage from "./CinematicImage";
import PhotoLightbox from "./PhotoLightbox";
import SceneHeading from "./SceneHeading";

function frameClass(index: number) {
  if (index === 0) return "sm:col-span-2 xl:col-span-2 xl:row-span-2 min-h-[24rem] sm:min-h-[32rem]";
  if (index % 7 === 3) return "sm:col-span-2 min-h-[18rem]";
  return "min-h-[20rem]";
}

export default function MemoryGallery() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, index: -1 });

  return (
    <section id="gallery" className="relative px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SceneHeading title={gallery.title} text={gallery.text} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.items.map((item, index) => (
            <button
              key={item.src}
              id={`photo-${index}`}
              type="button"
              className={`group relative overflow-hidden rounded-3xl border border-gold/25 text-left ${frameClass(index)}`}
              style={{
                transform:
                  tilt.index === index ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : undefined,
              }}
              onMouseMove={(event) => {
                if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
                const rect = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                setTilt({ x: y * -6, y: x * 7, index });
              }}
              onMouseLeave={() => setTilt({ x: 0, y: 0, index: -1 })}
              onClick={() => setActive(index)}
              aria-label={`Open photo: ${item.caption}`}
            >
              <div className="absolute inset-0 transition duration-700 group-hover:scale-[1.045]">
                <CinematicImage src={item.src} alt={item.alt} variant={index} />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight via-midnight/55 to-transparent p-5">
                <span className="block font-display text-2xl leading-tight text-ivory md:text-3xl">{item.caption}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <PhotoLightbox
          items={gallery.items}
          index={active}
          onClose={() => {
            const current = active;
            setActive(null);
            window.setTimeout(() => document.getElementById(`photo-${current}`)?.focus(), 0);
          }}
          onChange={setActive}
        />
      )}
    </section>
  );
}
