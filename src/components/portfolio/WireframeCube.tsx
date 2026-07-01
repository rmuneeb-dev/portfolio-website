import { useEffect, useRef } from "react";

/**
 * Lightweight canvas-based wireframe cube with orbiting spheres.
 * No three.js — hand-rolled projection to keep bundle small.
 */
export function WireframeCube({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Cube vertices
    const s = 1;
    const verts: [number, number, number][] = [
      [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
      [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
    ];
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    const project = (x: number, y: number, z: number, scale: number) => {
      const persp = 3 / (3 + z);
      return {
        x: w / 2 + x * scale * persp,
        y: h / 2 + y * scale * persp,
        z,
        s: persp,
      };
    };

    const rotate = (
      [x, y, z]: [number, number, number],
      ax: number,
      ay: number,
    ): [number, number, number] => {
      // rotate around Y
      let cy = Math.cos(ay), sy = Math.sin(ay);
      let x1 = x * cy + z * sy;
      let z1 = -x * sy + z * cy;
      // rotate around X
      let cx = Math.cos(ax), sx = Math.sin(ax);
      let y1 = y * cx - z1 * sx;
      let z2 = y * sx + z1 * cx;
      return [x1, y1, z2];
    };

    let t = 0;
    const draw = () => {
      t += 0.0022;
      ctx.clearRect(0, 0, w, h);

      const scale = Math.min(w, h) * 0.22;
      const ax = t * 0.7;
      const ay = t;

      const rv = verts.map((v) => rotate(v, ax, ay));
      const pv = rv.map((v) => project(v[0], v[1], v[2], scale));

      // glow
      const grad = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.min(w, h) * 0.5);
      grad.addColorStop(0, "rgba(255,140,40,0.35)");
      grad.addColorStop(1, "rgba(255,140,40,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // edges
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = "rgba(255,170,90,0.85)";
      ctx.shadowColor = "rgba(255,140,40,0.8)";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      for (const [a, b] of edges) {
        ctx.moveTo(pv[a].x, pv[a].y);
        ctx.lineTo(pv[b].x, pv[b].y);
      }
      ctx.stroke();

      // vertices
      ctx.shadowBlur = 8;
      for (const p of pv) {
        ctx.fillStyle = `rgba(255,200,140,${0.5 + p.s * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * p.s, 0, Math.PI * 2);
        ctx.fill();
      }

      // orbiting spheres
      const orbits = 3;
      for (let i = 0; i < orbits; i++) {
        const phase = (i / orbits) * Math.PI * 2;
        const r = scale * 1.9;
        const ox = Math.cos(t * 0.5 + phase) * r;
        const oy = Math.sin(t * 0.7 + phase) * r * 0.35;
        const oz = Math.sin(t * 0.5 + phase) * r;
        const p = project(ox / scale, oy / scale, oz / scale, scale);
        const radius = 5 + p.s * 3;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        g.addColorStop(0, "rgba(255,180,90,0.95)");
        g.addColorStop(1, "rgba(255,140,40,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,220,180,1)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}