const stars = createStars(78);

function mulberry32(seed: number) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createStars(count: number) {
  const random = mulberry32(20261016);
  return Array.from({ length: count }, (_, id) => {
    const size = random() * 1.7 + 0.5;
    return {
      id,
      left: `${random() * 100}%`,
      top: `${random() * 100}%`,
      size,
      duration: `${random() * 4 + 2.8}s`,
      delay: `${random() * 5}s`,
      glow: size > 1.7,
    };
  });
}

export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="orb"
        style={{
          left: "-8%",
          top: "8%",
          width: "28rem",
          height: "28rem",
          background: "rgba(100, 39, 67, 0.45)",
        }}
      />
      <div
        className="orb"
        style={{
          right: "-10%",
          top: "32%",
          width: "24rem",
          height: "24rem",
          background: "rgba(215, 183, 121, 0.16)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="orb"
        style={{
          left: "20%",
          bottom: "-8%",
          width: "26rem",
          height: "26rem",
          background: "rgba(36, 21, 38, 0.9)",
          animationDelay: "-14s",
        }}
      />
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            boxShadow: star.glow ? "0 0 8px rgba(255,245,235,0.8)" : undefined,
          }}
        />
      ))}
    </div>
  );
}
