"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

const operatorMetrics = [
  { label: "Revenue Supported", value: "$15M" },
  { label: "Products Launched", value: "6" },
  { label: "App Downloads", value: "100K+" },
];

export function HologramOperatorPanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const panel = panelRef.current;
    if (!panel) return;

    const bounds = panel.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    panel.style.setProperty("--tilt-x", `${vertical * -5}deg`);
    panel.style.setProperty("--tilt-y", `${horizontal * 6}deg`);
    panel.style.setProperty("--shift-x", `${horizontal * 9}px`);
    panel.style.setProperty("--shift-y", `${vertical * 9}px`);
  }

  function resetTilt() {
    const panel = panelRef.current;
    if (!panel) return;

    panel.style.setProperty("--tilt-x", "0deg");
    panel.style.setProperty("--tilt-y", "0deg");
    panel.style.setProperty("--shift-x", "0px");
    panel.style.setProperty("--shift-y", "0px");
  }

  return (
    <div className="hologram-shell relative mx-auto w-full max-w-[560px] lg:mr-0">
      <div className="hologram-ambient" />
      <div
        aria-label="Holographic operator profile for Cole Kirkpatrick"
        className="hologram-tilt"
        onPointerLeave={resetTilt}
        onPointerMove={handlePointerMove}
        ref={panelRef}
      >
        <div className="hologram-panel">
          <div className="hologram-grid" />
          <div className="hologram-stars" />
          <div className="hologram-radar" />
          <div className="hologram-scanlines" />
          <div className="hologram-scan-beam" />

          <span className="hud-corner hud-corner-tl" />
          <span className="hud-corner hud-corner-tr" />
          <span className="hud-corner hud-corner-bl" />
          <span className="hud-corner hud-corner-br" />

          <div className="operator-identity">
            <p className="hud-label">Operator Profile</p>
            <div className="mt-2 flex items-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.035em] text-cyan-50 sm:text-base">
                Cole Kirkpatrick
              </h2>
              <span className="holo-status-dot" />
            </div>
            <p className="mt-1.5 text-[10px] text-cyan-100/65">Systems Builder</p>
            <p className="mt-0.5 text-[10px] text-cyan-100/45">
              Strategic Operator
            </p>
          </div>

          <div className="operator-status">
            <p className="hud-label">Operator Status</p>
            <div className="mt-2 flex items-center justify-end gap-2">
              <span className="font-mono text-xs font-semibold tracking-[0.12em] text-cyan-300">
                ONLINE
              </span>
              <span className="holo-status-dot" />
            </div>
          </div>

          <div className="execution-mode">
            <p className="hud-label">Execution Mode</p>
            <p className="mt-2 font-mono text-sm font-semibold tracking-[0.12em] text-cyan-200 sm:text-base">
              ACTIVE
            </p>
            <span className="execution-line" />
          </div>

          <div className="hologram-stage">
            <span className="orbit orbit-outer" />
            <span className="orbit orbit-middle" />
            <span className="orbit orbit-inner" />
            <span className="orbit-particle orbit-particle-one" />
            <span className="orbit-particle orbit-particle-two" />

            <div className="hologram-portrait">
              <div className="portrait-aura" />
              <Image
                alt="Cole Kirkpatrick rendered as a blue hologram"
                className="hologram-portrait-image"
                height={1400}
                priority
                sizes="(max-width: 640px) 190px, 240px"
                src="/cole-kirkpatrick-hologram.png"
                width={800}
              />
            </div>
          </div>

          <div className="operator-metrics">
            {operatorMetrics.map((metric) => (
              <div className="operator-metric" key={metric.label}>
                <span className="operator-metric-notch" />
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="operator-focus">
            <div className="mb-2 flex items-center justify-between">
              <p className="hud-label">Focus</p>
              <span className="holo-status-dot" />
            </div>
            {["Strategy", "Systems", "Product", "Growth"].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="hologram-signature">
            <span>CK // OP-001</span>
            <span className="signature-line" />
            <span>READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
