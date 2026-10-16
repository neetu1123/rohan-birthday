const balloons = [
  { left: "4%", delay: "0s", duration: "24s", tone: "rose", scale: 1 },
  { left: "16%", delay: "-8s", duration: "27s", tone: "gold", scale: 0.72 },
  { left: "30%", delay: "-3s", duration: "22s", tone: "wine", scale: 0.86 },
  { left: "48%", delay: "-14s", duration: "26s", tone: "ivory", scale: 0.64 },
  { left: "62%", delay: "-6s", duration: "23s", tone: "rose", scale: 0.9 },
  { left: "74%", delay: "-11s", duration: "28s", tone: "gold", scale: 0.7 },
  { left: "86%", delay: "-2s", duration: "21s", tone: "wine", scale: 1.05 },
  { left: "93%", delay: "-16s", duration: "25s", tone: "ivory", scale: 0.58 },
];

export default function RomanticBalloons({ count = balloons.length }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {balloons.slice(0, count).map((balloon) => (
        <span
          key={`${balloon.left}-${balloon.delay}`}
          className={`balloon balloon-${balloon.tone}`}
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
            transform: `scale(${balloon.scale})`,
          }}
        >
          <span className="balloon-shape" />
          <span className="balloon-string" />
        </span>
      ))}
    </div>
  );
}
