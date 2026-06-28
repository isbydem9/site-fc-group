"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
          setCount(value);
          observer.disconnect();
          return;
        }

        let frame = 0;
        const frames = 42;
        const tick = () => {
          frame += 1;
          setCount(Math.round((value * frame) / frames));
          if (frame < frames) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}
