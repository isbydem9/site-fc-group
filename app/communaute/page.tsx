import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Constellation } from "@/components/ui/Constellation";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

export const metadata: Metadata = {
  title: "Make Wari Online — Le cercle des entrepreneurs du web",
  description:
    "Un groupe d'entraide entre entrepreneurs du web qui construisent pour de vrai. Pas un marché, pas de pub : des conseils, du soutien, du vrai réseau.",
};

const GROUP_INVITE_LINK = "https://chat.whatsapp.com/EfYAIAcpA789hsXdwNF0yS";

const peurs = [
  {
    titre: "« Si je parle de mon idée, on va me la voler. »",
    corps:
      "Non. Une idée ne vaut rien tant qu'elle n'est pas exécutée — et l'exécution, c'est toi, ton énergie, ta façon de faire. Personne ne peut voler ça. La vérité que personne ne te dit : celui qui partage son idée avance dix fois plus vite que celui qui la garde secrète dans un tiroir. Le secret ne protège pas ton projet, il l'étouffe.",
  },
  {
    titre: "« Si on critique mon projet, c'est pour me décourager. »",
    corps:
      "Pas ici. Ici, on attaque l'idée pour la rendre meilleure, jamais la personne. Une remarque qui pique aujourd'hui, c'est une erreur que tu ne feras pas demain. Ceux qui te disent « c'est parfait » ne t'aident pas — ceux qui te disent « attention à ça » te font gagner des mois.",
  },
  {
    titre: "« Je débute, j'ai rien à apporter. »",
    corps:
      "Faux. Ta question de débutant, c'est le déclic d'un autre. Ton regard neuf voit ce que les habitués ne voient plus. Dans ce groupe, on ne mesure pas ta valeur à tes résultats — on la mesure à ta volonté de construire et de participer. Tu donnes ce que tu peux, tu reçois le reste.",
  },
];

export default function CommunautePage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--navy)] pt-20 text-[var(--creme)]">
        <div className="pointer-events-none fixed inset-0">
          <Constellation density={55} />
        </div>
        <div className="relative z-10">
        {/* HERO + TRI fusionnés */}
        <section className="pb-14 pt-12 md:pb-20 md:pt-16">
          <div className="container-fc">
            <p className="eyebrow">Make Wari Online</p>
            <h1 className="display-font mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] text-[var(--creme)] md:text-6xl">
              <MaskReveal
                lines={[
                  "Si tu cherches un endroit",
                  "pour balancer tes produits,",
                  "ferme cette page.",
                ]}
                immediate
              />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-[var(--creme-muted)] md:text-xl">
                Vraiment. Mais si tu cherches des frères entrepreneurs qui te donnent de
                vrais conseils, qui regardent ton projet et t&apos;aident à le construire,
                qui commentent ta vidéo pour que l&apos;algorithme te voie enfin — alors
                reste. Tu es exactement là où il faut.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="gold-border mt-9 max-w-2xl rounded-2xl bg-[var(--navy-elevated)] p-6 md:p-7">
                <p className="display-font text-xl font-semibold text-[var(--or)] md:text-2xl">
                  Ici, ce n&apos;est pas un marché.
                </p>
                <p className="mt-3 text-base leading-[1.65] text-[var(--creme-muted)]">
                  On ne poste pas de photos de chaussures avec le prix. On ne spamme pas de
                  liens. On ne transfère pas de chaînes. Ceux qui viennent juste vendre
                  repartent aussi vite qu&apos;ils sont entrés — c&apos;est la seule règle
                  qui ne se négocie pas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex items-center gap-3">
                <span className="h-10 w-px bg-[linear-gradient(180deg,var(--or),transparent)]" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--creme-muted)]">
                  Ce qui te retient est juste en dessous
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* LES PEURS */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Les barrières dans ta tête</p>
              <h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Si tu hésites, c&apos;est sûrement à cause d&apos;une de ces trois peurs.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {peurs.map((peur, index) => (
                <Reveal key={peur.titre} delay={0.08 * (index + 1)}>
                  <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-6">
                    <h3 className="display-font text-lg font-semibold leading-snug text-[var(--or)]">
                      {peur.titre}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-[var(--creme-muted)]">
                      {peur.corps}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* CE QU'ON FAIT VRAIMENT */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <h2 className="display-font max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Ce qu&apos;on fait vraiment ici.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 text-base leading-[1.7] text-[var(--creme-muted)] md:grid-cols-2 md:text-lg">
              <Reveal delay={0.08}>
                <p>
                  On partage des conseils terrain qui font vraiment avancer. Pas de la
                  théorie de gourou — du concret, testé, qui marche. Tu arrives avec une
                  idée ? On la développe avec toi, on la creuse, on la rend plus solide.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Tu publies du contenu ? Tu mets le lien, et on t&apos;offre des vues, des
                  likes, de vrais commentaires. Aujourd&apos;hui pour toi, demain pour un
                  autre. C&apos;est comme ça qu&apos;on perce à plusieurs.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="md:col-span-2">
                  Et quand un membre lance quelque chose — une app, un service, une
                  activité — le groupe s&apos;active. Ceux que ça intéresse le contactent en
                  privé. Les autres l&apos;aident à trouver des clients, le conseillent sur
                  sa communication. Ici, on ne te vend rien : on travaille pour ta réussite.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* MON ENGAGEMENT */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Mon engagement</p>
              <div className="gold-border mt-5 rounded-2xl bg-[var(--navy-elevated)] p-7 md:p-10">
                <p className="max-w-3xl text-lg leading-[1.75] text-[var(--creme)] md:text-xl">
                  Moi, c&apos;est Ismaël. Je construis Sahel Agent, Djinn et Nana — trois
                  outils, seul, depuis Bamako. Je sais ce que c&apos;est qu&apos;avancer sans
                  personne à qui parler.
                </p>
                <p className="mt-5 max-w-3xl text-base leading-[1.75] text-[var(--creme-muted)] md:text-lg">
                  C&apos;est pour ça que ce groupe existe. Et je ne me contente pas de
                  l&apos;ouvrir : j&apos;y partage régulièrement ce que j&apos;apprends en
                  construisant — des tips, des conseils, des news qui comptent, et les
                  opportunités que je croise. Ce que je sais, tu le sauras aussi.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA FINAL */}
        <section className="py-16 md:py-24">
          <div className="container-fc text-center">
            <Reveal>
              <h2 className="display-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Si tu as lu jusqu&apos;ici, tu n&apos;es pas là pour vendre des chaussures.
                Tu es là pour construire.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--creme-muted)]">
                Alors bienvenue chez toi.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex justify-center">
                <MagneticButton
                  href={GROUP_INVITE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer"
                >
                  Rejoindre Make Wari Online
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-5 text-sm text-[var(--creme-muted)]">
                Entraide entre entrepreneurs du web. Zéro spam, tu quittes quand tu veux.
              </p>
            </Reveal>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
