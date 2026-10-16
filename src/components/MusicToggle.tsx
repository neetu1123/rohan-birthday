"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useExperience } from "./experience-context";

export default function MusicToggle() {
  const { musicOn, musicAvailable, toggleMusic } = useExperience();
  const label = !musicAvailable
    ? "Background music is not available yet"
    : musicOn
      ? "Pause background music"
      : "Play background music";

  return (
    <button
      type="button"
      className="icon-button fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50"
      onClick={toggleMusic}
      disabled={!musicAvailable}
      aria-pressed={musicOn}
      aria-label={label}
      title={label}
    >
      {musicOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}
