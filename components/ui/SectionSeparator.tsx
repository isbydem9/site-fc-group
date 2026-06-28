"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionSeparator() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
      whileInView={reduce ? { opacity: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0.4 : 1, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto h-px max-w-[1200px] origin-left bg-[linear-gradient(90deg,transparent,var(--or),transparent)] opacity-70"
    />
  );
}
