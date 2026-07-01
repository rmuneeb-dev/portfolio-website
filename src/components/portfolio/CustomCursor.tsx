import { useEffect, useRef, useState } from "react";

/**
 * Premium cursor: a small dot follows the pointer instantly, while a larger
 * ring trails with spring-easing. Grows + glows on hover of any interactive
 * element (a, button, [role=button], input, textarea, [data-cursor=hover]).
 * Hidden on touch / coarse pointers.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);
  const pressedRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let dx = mx;
    let dy = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]',
      );
      hoverRef.current = interactive;
      setHover(interactive);
    };
    const onDown = () => {
      pressedRef.current = true;
      setPressed(true);
    };
    const onUp = () => {
      pressedRef.current = false;
      setPressed(false);
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const loop = () => {
      // Dot lerps slightly (just enough to smooth jitter) so it doesn't
      // race ahead of the ring; ring follows the dot with the same easing
      // curve so both feel locked together.
      dx += (mx - dx) * 0.45;
      dy += (my - dy) * 0.45;
      rx += (dx - rx) * 0.32;
      ry += (dy - ry) * 0.32;
      const currentScale = 1; // Keep cursor small always
      const currentPressScale = pressedRef.current ? 0.85 : 1;
      const scaleValue = currentScale * currentPressScale;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%) scale(${scaleValue})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scaleValue})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringScale = 1;
  const pressScale = pressed ? 0.85 : 1;
  const dotScale = 1;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border transition-[width,height,background,border-color,opacity,transform] duration-200 ease-out"
        style={{
          borderColor: "color-mix(in oklab, var(--color-signal) 80%, transparent)",
          background: "transparent",
          boxShadow: "0 0 12px -4px color-mix(in oklab, var(--color-signal) 40%, transparent)",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full transition-[box-shadow,background,transform] duration-200 ease-out"
        style={{
          background: "var(--color-signal)",
          boxShadow: "0 0 10px var(--color-signal)",
          willChange: "transform",
        }}
      />
    </>
  );
}