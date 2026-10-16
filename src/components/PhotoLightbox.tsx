"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "../data/birthdayContent";
import CinematicImage from "./CinematicImage";

type PhotoLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function PhotoLightbox({ items, index, onClose, onChange }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);
  const item = items[index];
  const captionId = "lightbox-caption";

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const getFocusable = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"));

    getFocusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onChange, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-midnight/88 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={captionId}
        className="relative flex w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchStart.current = event.changedTouches[0]?.clientX ?? 0;
        }}
        onTouchEnd={(event) => {
          const end = event.changedTouches[0]?.clientX ?? 0;
          const delta = end - touchStart.current;
          if (delta > 50) onChange((index - 1 + items.length) % items.length);
          if (delta < -50) onChange((index + 1) % items.length);
        }}
      >
        <button type="button" className="icon-button absolute -top-1 right-0 z-10" onClick={onClose} aria-label="Close photo">
          <X className="h-5 w-5" />
        </button>

        <div className="flex w-full items-center gap-3">
          <button
            type="button"
            className="icon-button shrink-0"
            onClick={() => onChange((index - 1 + items.length) % items.length)}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative h-[min(68dvh,720px)] min-w-0 flex-1 overflow-hidden rounded-3xl border border-gold/30">
            <CinematicImage src={item.src} alt={item.alt} variant={index} priority />
          </div>

          <button
            type="button"
            className="icon-button shrink-0"
            onClick={() => onChange((index + 1) % items.length)}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p id={captionId} className="mt-5 max-w-xl text-center font-display text-2xl text-ivory">
          {item.caption}
        </p>
        <p className="mt-2 text-xs tracking-[0.24em] text-rose uppercase">
          {index + 1} / {items.length}
          <span className="sr-only">. Arrow keys move between photos. Escape closes.</span>
        </p>
      </div>
    </div>
  );
}
