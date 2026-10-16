"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { music } from "../data/birthdayContent";

type ExperienceContextValue = {
  started: boolean;
  cycle: number;
  musicOn: boolean;
  musicAvailable: boolean;
  begin: () => void;
  replay: () => void;
  toggleMusic: () => void;
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [started, setStarted] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const availableRef = useRef(true);
  const mutedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.42;
  }, []);

  const markMusicMissing = useCallback(() => {
    availableRef.current = false;
    setMusicAvailable(false);
    setMusicOn(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = started ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [started]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !availableRef.current) return;

    void audio
      .play()
      .then(() => setMusicOn(true))
      .catch(() => {
        if (audio.error) markMusicMissing();
        setMusicOn(false);
      });
  }, [markMusicMissing]);

  const begin = useCallback(() => {
    setStarted(true);
    if (!mutedRef.current) play();
  }, [play]);

  const replay = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setStarted(false);
    setCycle((value) => value + 1);
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !availableRef.current) return;

    if (!audio.paused) {
      audio.pause();
      mutedRef.current = true;
      setMusicOn(false);
      return;
    }

    mutedRef.current = false;
    play();
  }, [play]);

  return (
    <ExperienceContext.Provider
      value={{ started, cycle, musicOn, musicAvailable, begin, replay, toggleMusic }}
    >
      <audio
        ref={audioRef}
        src={music.src}
        loop
        preload="auto"
        aria-hidden="true"
        onError={markMusicMissing}
        className="pointer-events-none fixed top-0 left-0 h-px w-px opacity-0"
      />
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }
  return context;
}
