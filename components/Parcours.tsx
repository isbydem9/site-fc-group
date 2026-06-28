import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "L'origine",
    body: "Je suis né au Mali, dans une famille où le travail prenait toute la place. Au lycée, j'ai eu le déclic : ce n'était pas un manque d'amour, c'était que gagner sa vie dévorait tout le temps. De là est née une obsession — réussir sans sacrifier le mien.",
  },
  {
    number: "02",
    title: "Le digital",
    body: "Je suis parti étudier le commerce en Tunisie. Puis le Covid m'a confiné avec un ordinateur, un téléphone et TikTok. J'ai découvert que le digital pouvait générer des revenus. Premiers projets, e-commerce, Facebook Ads avant même Meta. Beaucoup d'échecs commerciaux — mais énormément appris.",
  },
  {
    number: "03",
    title: "La réalité du terrain",
    body: "De retour au Mali, master de logistique en poche, j'ai affronté le népotisme. Plutôt que d'attendre une opportunité, j'ai créé la mienne : Demarketing, une agence où je transformais ma maîtrise de la publicité en résultats. Mais mes clients voulaient des campagnes miracles sans rien connaître à la vente — pour eux, le marketing digital tenait de la sorcellerie. C'est là, sur le terrain, qu'est née l'idée de Sahel Agent : et si une IA leur apprenait à vendre ?",
  },
  {
    number: "04",
    title: "La bascule",
    body: "Avec Sahel Soft, ma branche logicielle, j'ai bâti Sahel Agent. Puis Djinn. Tout a convergé vers une seule intelligence : Assi. Ma conviction s'est précisée — mettre l'IA, petit à petit, au service de chaque solo-entrepreneur africain.",
  },
  {
    number: "05",
    title: "FC Group",
    body: "J'ai réuni mes projets sous une même bannière. Un nom en hommage à Fatoumata Coulibaly, ma mère — celle qui m'a soutenu quand je n'avais rien. Mon ambition : un conglomérat africain où technologie, production et communication se renforcent. Aujourd'hui, tout tourne autour d'Assi.",
  },
];

export function Parcours() {
  return (
    <section id="parcours" className="bg-[var(--navy)] py-[clamp(4rem,9vh,7rem)]">
      <div className="container-fc">
        <Reveal>
          <p className="eyebrow">Mon parcours</p>
          <h2 className="display-font mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            <MaskReveal
              lines={[
                "Je n'ai jamais couru après l'argent.",
                "J'ai couru après le temps.",
              ]}
            />
          </h2>
        </Reveal>

        <div className="relative mt-10 md:mt-12">
          <div className="absolute bottom-3 left-[1.55rem] top-3 w-px bg-[var(--navy-line)] md:left-[6.15rem]" />
          <div className="space-y-10">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <article className="group relative grid gap-5 pl-16 md:grid-cols-[8rem_1fr] md:gap-8 md:pl-0">
                  <div className="absolute left-[1.12rem] top-2 z-10 h-4 w-4 rounded-full border border-[var(--or)] bg-[var(--navy)] shadow-[0_0_0_6px_rgba(201,167,107,0.08)] transition-all duration-500 ease-[var(--ease-signature)] group-hover:bg-[var(--or)] group-hover:shadow-[0_0_26px_rgba(201,167,107,0.45)] md:left-[5.72rem]" />
                  <div className="display-font text-3xl font-semibold text-[var(--or)] md:text-right md:text-4xl">
                    {step.number}
                  </div>
                  <div className="gold-border rounded-2xl bg-[rgba(15,30,51,0.68)] p-6 transition-all duration-500 ease-[var(--ease-signature)] group-hover:-translate-y-1 group-hover:border-[var(--or)]">
                    <h3 className="display-font text-2xl font-semibold text-[var(--creme)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-[1.75] text-[var(--creme-muted)] md:text-lg">
                      {step.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
