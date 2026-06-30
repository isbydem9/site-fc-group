"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const apps: {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  visual: string;
  href: string;
}[] = [
  {
    name: "Nana",
    tagline: "La veille qui te garde en avance.",
    description:
      "Nana lit le web pour toi et te raconte ce qui compte vraiment pour ton business. Chaque jour, l'essentiel de l'actu entrepreneuriale africaine, sans le bruit.",
    visual:
      "radial-gradient(circle at 30% 20%, rgba(201,167,107,0.38), transparent 34%), linear-gradient(135deg, rgba(10,22,40,0.82), rgba(15,30,51,0.96))",
    href: "https://nana.fcgroupml.com",
  },
  {
    name: "Djinn",
    tagline: "De l'idée au business plan.",
    description:
      "Tu parles, elle construit ton dossier. Une Djinn qui transforme ton idée en projet structuré, pendant que vous discutez.",
    image: "/djinn.png",
    visual:
      "radial-gradient(circle at 70% 20%, rgba(224,196,138,0.28), transparent 34%), linear-gradient(135deg, rgba(15,30,51,0.9), rgba(10,22,40,0.98))",
    href: "https://djinn.fcgroupml.com",
  },
  {
    name: "Sahel Agent",
    tagline: "Ton copilote commercial.",
    description:
      "Trouve des clients, gère tes prospects, écris tes messages. L'IA qui prospecte pendant que tu travailles.",
    image: "/sahel-agent.png",
    visual:
      "radial-gradient(circle at 50% 18%, rgba(201,167,107,0.32), transparent 34%), linear-gradient(135deg, rgba(10,22,40,0.88), rgba(15,30,51,0.98))",
    href: "https://sahelagent.com",
  },
];

export function Apps() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shotY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 26, reduce ? 0 : -26]);

  function onCardMove(event: React.MouseEvent<HTMLElement>) {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <section ref={ref} id="apps" className="section-pad bg-[var(--navy)]">
      <div className="container-fc">
        <Reveal>
          <p className="eyebrow">Nos outils</p>
          <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            <MaskReveal lines={["Des outils qui travaillent.", "Pas des promesses."]} />
          </h2>
        </Reveal>

        <div className="apps-grid mt-12 grid gap-6 md:grid-cols-3">
          {apps.map((app, index) => (
            <Reveal key={app.name} delay={index * 0.1}>
              <article
                className="app-card group shimmer gold-border min-h-[420px] rounded-2xl bg-[var(--navy-elevated)] p-7"
                onMouseMove={onCardMove}
              >
                <motion.div className="absolute inset-0" style={{ y: shotY }} aria-hidden="true">
                  <div
                    className="app-shot h-full w-full bg-cover bg-center opacity-0 group-hover:opacity-[0.18] group-focus-within:opacity-[0.18]"
                    style={{ backgroundImage: app.image ? `url(${app.image}), ${app.visual}` : app.visual }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-elevated)] via-[rgba(15,30,51,0.88)] to-[rgba(15,30,51,0.5)]" />
                <div className="relative z-10 flex h-full min-h-[360px] flex-col">
                  <span className="w-fit rounded-full bg-[rgba(201,167,107,0.15)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--or-bright)]">
                    En production
                  </span>
                  <h3 className="display-font mt-8 text-4xl font-semibold text-[var(--creme)]">{app.name}</h3>
                  <p className="mt-4 text-xl font-medium text-[var(--champagne)]">{app.tagline}</p>
                  <p className="mt-5 max-w-md leading-[1.7] text-[var(--creme-muted)]">{app.description}</p>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-auto inline-flex w-fit items-center gap-2 pt-10 text-sm font-bold text-[var(--or)] transition hover:text-[var(--or-bright)]"
                  >
                    Découvrir <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
