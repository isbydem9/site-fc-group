import { Counter } from "@/components/ui/Counter";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: 2, label: "Applications en production" },
  { value: 5, label: "Applications dans l'écosystème" },
  { value: 1, label: "Cerveau IA partagé : Assi" },
];

export function Vision() {
  return (
    <section id="vision" className="section-pad bg-[var(--navy)]">
      <div className="container-fc">
        <Reveal>
          <p className="eyebrow">Notre vision</p>
          <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            <MaskReveal lines={["Le solo-entrepreneuriat n'est pas un échec.", "C'est un début."]} />
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-7 text-base leading-[1.7] text-[var(--creme-muted)] md:grid-cols-2 md:text-lg">
          <Reveal delay={0.1}>
            <p>
              En Afrique, les jeunes entrepreneurs n&apos;ont presque jamais accès à
              l&apos;investissement. Ils doivent tout faire eux-mêmes : vendre, prospecter, gérer,
              structurer. Seuls. La plupart s&apos;épuisent avant même d&apos;avoir une chance de
              grandir.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              FC Group existe pour changer ça. Nous construisons des outils d&apos;intelligence
              artificielle qui font le travail de toute une équipe — pour l&apos;entrepreneur qui
              n&apos;en a pas encore une. L&apos;entrepreneur reste le héros de son histoire. Notre IA
              n&apos;est que le guide qui l&apos;éclaire et construit à ses côtés.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="gold-border mt-14 grid overflow-hidden rounded-2xl bg-[rgba(15,30,51,0.72)] md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-7 ${index > 0 ? "border-t border-[var(--navy-line)] md:border-l md:border-t-0" : ""}`}
              >
                <div className="display-font text-5xl font-semibold text-[var(--or)]">
                  <Counter value={stat.value} />
                </div>
                <p className="mt-3 text-sm font-medium text-[var(--creme-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-[var(--creme-muted)]">Du Mali vers toute l&apos;Afrique de l&apos;Ouest.</p>
        </Reveal>
      </div>
    </section>
  );
}
