"use client";

import { useState } from "react";

type CinematicImageProps = {
  src: string;
  alt: string;
  variant?: number;
  priority?: boolean;
};

export default function CinematicImage({ src, alt, variant = 0, priority = false }: CinematicImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0">
      <div className={`placeholder-art art-${variant % 6}`} />
      {!failed && (
        // Personal photos may not exist yet. A plain image can fail softly into the painted frame.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
