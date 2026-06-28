"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  tw: number;
};

export function Constellation({ density = 60 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let mx = 0;
    let my = 0;
    let points: Point[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seed = () => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const count = mobile ? Math.min(30, density) : density;
      points = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.offsetWidth * scale);
      canvas.height = Math.floor(canvas.offsetHeight * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      seed();
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = (event.clientX - rect.left - rect.width / 2) / rect.width;
      my = (event.clientY - rect.top - rect.height / 2) / rect.height;
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      points.forEach((point) => {
        if (!reduce) {
          point.x += point.vx;
          point.y += point.vy;
          point.tw += 0.03;
        }

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        const px = point.x + mx * 18;
        const py = point.y + my * 18;
        const alpha = Math.max(0.1, 0.35 + Math.sin(point.tw) * 0.3);
        ctx.beginPath();
        ctx.arc(px, py, point.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,167,107,${alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
