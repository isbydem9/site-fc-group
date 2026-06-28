"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Constellation } from "@/components/ui/Constellation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MaskReveal } from "@/components/ui/MaskReveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 28 };
  const animate = reduce ? undefined : { opacity: 1, y: 0 };
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen overflow-hidden bg-[var(--navy)] pt-20"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Constellation density={70} />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,22,40,0.2),rgba(10,22,40,0.94)_58%)]" />
      <div className="container-fc relative z-10 flex min-h-[calc(100vh-5rem)] items-center pb-12">
        <motion.div className="max-w-4xl" style={{ y, opacity }}>
          <motion.p
            className="eyebrow"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            FC Group — À ton appel, Mali.
          </motion.p>
          <motion.h1
            className="display-font mt-6 max-w-5xl text-[clamp(2rem,9vw,3rem)] font-semibold leading-[1.05] text-[var(--creme)] md:text-[clamp(2.5rem,6vw,5rem)]"
            initial={reduce ? false : { opacity: 1 }}
            animate={reduce ? undefined : { opacity: 1 }}
          >
            <MaskReveal
              lines={[
                "L'Afrique a des milliers d'entrepreneurs.",
                "Nous leur donnons les outils",
                "pour réussir seuls.",
              ]}
              immediate
            />
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            FC Group construit l&apos;intelligence artificielle qui permet à un entrepreneur africain
            de travailler seul — et bien. Pas pour rester seul. Pour grandir jusqu&apos;à pouvoir
            embaucher.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#apps" className="w-full sm:w-auto">
              Découvrir nos outils
            </MagneticButton>
            <a
              href="https://wa.me/22379061789"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center border-b border-[var(--or)] text-sm font-bold text-[var(--creme)] transition hover:text-[var(--or-bright)] sm:px-1"
            >
              Collaborer avec nous
            </a>
          </motion.div>
        </motion.div>
      </div>
      <a
        href="#vision"
        className="focus-ring absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-[var(--or)]"
        aria-label="Faire défiler vers la vision"
      >
        <span className="h-12 w-px origin-bottom bg-[var(--or)] opacity-70 [animation:pulse-line_1.8s_ease-in-out_infinite]" />
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
