"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      element.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed -left-[150px] -top-[150px] z-30 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,167,107,0.10),transparent_65%)] mix-blend-screen"
    />
  );
}
