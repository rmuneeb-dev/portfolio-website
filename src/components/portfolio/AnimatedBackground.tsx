import { useEffect, useRef } from "react";

/**
 * Layered premium background: soft animated gradients, blurred light orbs,
 * floating particles, ultra-light grid, noise, and a faint cursor glow.
 */
export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const setCursorVars = (x: number, y: number) => {
      container.style.setProperty("--cursor-x", `${x}px`);
      container.style.setProperty("--cursor-y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      setCursorVars(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", onMove);
    setCursorVars(window.innerWidth / 2, window.innerHeight / 2);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-layer-base animate-background-wash" />
      <div className="absolute inset-0 bg-layer-soft animate-layer-shift" />
      <div className="absolute inset-0 bg-layer-grid animate-grid-drift" />
      <div className="absolute inset-0 bg-layer-noise" />
      <div className="absolute inset-0 bg-cursor-glow" />

      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className="bg-particle bg-p-1" />
      <div className="bg-particle bg-p-2" />
      <div className="bg-particle bg-p-3" />
      <div className="bg-particle bg-p-4" />
      <div className="bg-particle bg-p-5" />
    </div>
  );
}
