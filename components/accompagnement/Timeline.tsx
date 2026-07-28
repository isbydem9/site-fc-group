"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const etapesParDefaut = [
  {
    semaine: "Semaine 1",
    titre: "On construit.",
    corps:
      "Ton site et tes pages de vente. Ta page Meta créée ou remise d'aplomb. Le suivi des conversions (CAPI) branché, pour que la publicité sache qui achète vraiment. Et ton assistant WhatsApp automatique configuré si ton compte le permet.",
  },
  {
    semaine: "Semaine 2",
    titre: "On lance.",
    corps:
      "Création des campagnes publicitaires Meta et mise en ligne. La machine commence à tourner.",
  },
  {
    semaine: "Semaine 3",
    titre: "On affine.",
    corps:
      "On exploite les données réelles pour recibler ceux qui ont déjà montré de l'intérêt. C'est là que les campagnes deviennent rentables.",
  },
  {
    semaine: "Semaine 4",
    titre: "Je te passe les clés.",
    corps:
      "Analyse des résultats, puis passation complète : tous les accès, et je t'explique comment ça marche pour que tu ne dépendes plus de moi. Tout ce qui a été créé t'appartient.",
  },
];

type Etape = {
  semaine: string;
  titre: string;
  corps: string;
};

type TimelineProps = {
  etapes?: Etape[];
};

export function Timeline({ etapes = etapesParDefaut }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative mt-10">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--navy-line)]" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-[linear-gradient(180deg,var(--or),var(--champagne))]"
      />
      <div className="flex flex-col gap-10 md:gap-14">
        {etapes.map((etape) => (
          <div key={etape.semaine} className="relative pl-10 md:pl-14">
            <span className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-[var(--or)] bg-[var(--navy)]" />
            <p className="eyebrow">{etape.semaine}</p>
            <h3 className="display-font mt-2 text-2xl font-semibold text-[var(--creme)] md:text-3xl">
              {etape.titre}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
              {etape.corps}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
