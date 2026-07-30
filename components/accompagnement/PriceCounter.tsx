"use client";

import { useEffect, useRef, useState } from "react";

type PriceCounterProps = {
  from?: number;
  to?: number;
};

const formatter = new Intl.NumberFormat("fr-FR");

export function PriceCounter({ from = 1300000, to = 150000 }: PriceCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(to);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setCount(from);

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
          setCount(to);
          observer.disconnect();
          return;
        }

        const duration = 1600;
        let startedAt: number | null = null;
        const tick = (timestamp: number) => {
          if (startedAt === null) startedAt = timestamp;
          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const value = from + (to - from) * easedProgress;
          setCount(Math.round(value / 1000) * 1000);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(tick);
          } else {
            setCount(to);
          }
        };

        animationFrame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [from, to]);

  return <span ref={ref}>{formatter.format(count)}</span>;
}
