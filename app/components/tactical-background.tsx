type TacticalBackgroundProps = {
  variant?: "hero" | "modal";
};

export function TacticalBackground({
  variant = "hero",
}: TacticalBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`hero-tactical ${
        variant === "modal" ? "case-modal-tactical" : ""
      }`}
    >
      <div className="hero-tactical-grid" />
      <div className="hero-tactical-scan" />
      <div className="hero-tactical-nodes">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <svg
        className="hero-tactical-map"
        preserveAspectRatio="none"
        viewBox="0 0 1600 760"
      >
        <g className="hero-map-lines">
          <path d="M-80 145C180 190 290 300 545 248S910 105 1190 188s365 42 500-8" />
          <path d="M-70 206C180 248 340 350 570 302S900 164 1195 235s354 35 470 8" />
          <path d="M55 85 315 170 520 126 790 234 1050 120 1350 202 1590 145" />
          <path d="M30 330 280 275 485 358 735 286 950 356 1240 275 1580 335" />
          <path d="M148 72v252M492 55v345M1010 38v310M1420 64v302" />
        </g>
        <g className="hero-map-rings">
          <circle cx="128" cy="260" r="58" />
          <circle cx="128" cy="260" r="42" />
          <circle cx="1340" cy="274" r="178" />
          <circle cx="1340" cy="274" r="146" />
          <circle cx="1340" cy="274" r="112" />
          <path d="M1340 76v396M1142 274h396" />
        </g>
        <g className="hero-map-markers">
          <path d="m475 214 8 14-8 14-8-14Z" />
          <path d="m925 314 8 14-8 14-8-14Z" />
          <path d="m151 174 7 12-7 12-7-12Z" />
          <circle cx="1180" cy="188" r="4" />
          <circle cx="620" cy="280" r="3" />
        </g>
      </svg>

      <svg
        className="hero-terrain"
        preserveAspectRatio="none"
        viewBox="0 0 1600 360"
      >
        <g className="hero-terrain-lines">
          {Array.from({ length: 15 }, (_, index) => (
            <path
              d={`M-80 ${54 + index * 22} C180 ${18 + index * 24}, 315 ${
                112 + index * 13
              }, 540 ${68 + index * 19} S880 ${120 + index * 15}, 1080 ${
                70 + index * 20
              } S1430 ${30 + index * 23}, 1680 ${82 + index * 18}`}
              key={index}
            />
          ))}
          {Array.from({ length: 18 }, (_, index) => (
            <path
              d={`M${index * 100 - 70} 360 Q${index * 92 + 40} 165 ${
                index * 88 + 160
              } 0`}
              key={`vertical-${index}`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
