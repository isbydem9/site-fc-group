"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MaskReveal({
  lines,
  immediate = false,
}: {
  lines: string[];
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const play = immediate || inView || reduce;

  return (
    <span ref={ref}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? { y: "0%" } : { y: "110%" }}
            animate={play ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
