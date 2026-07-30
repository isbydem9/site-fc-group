import type { Metadata } from "next";
import { FooterLegal } from "@/components/FooterLegal";
import { Nav } from "@/components/Nav";
import { AccompagnementForm } from "@/components/accompagnement/AccompagnementForm";
import { PriceCounter } from "@/components/accompagnement/PriceCounter";
import { Timeline } from "@/components/accompagnement/Timeline";
import { Constellation } from "@/components/ui/Constellation";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Accompagnement e-commerce et pub Meta à Bamako",
  description:
    "En un mois : ton site, tes pages de vente, tes campagnes Meta et ton assistant WhatsApp. Monté, lancé et remis entre tes mains. 150 000 FCFA.",
  alternates: { canonical: "/accompagnement" },
};

const preuves = [
  { nom: "Sahel Agent", url: "https://sahelagent.com" },
  { nom: "Djinn", url: "https://djinn.fcgroupml.com" },
  { nom: "Nana", url: "https://nana.fcgroupml.com" },
  { nom: "Bassitan", url: "https://bassitan.shop" },
];

// Valeur à modifier à la main (1 ou 2).
const PLACES_RESTANTES: number = 2;

export default function AccompagnementPage() {
  const moisCourant = new Intl.DateTimeFormat("fr-FR", { month: "long" })
    .format(new Date())
    .toLocaleLowerCase("fr-FR");
  return (
    <>
      <Nav />
      <main className="bg-[var(--navy)] pt-20 text-[var(--creme)]">
        <div className="pointer-events-none fixed inset-0">
          <Constellation density={55} />
        </div>
        <div className="relative z-10">
        {/* HERO */}
        <section className="pb-14 pt-12 md:pb-20 md:pt-16">
          <div className="container-fc">
            <p className="eyebrow">Accompagnement — 1 mois</p>
            <h1 className="display-font mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] text-[var(--creme)] md:text-6xl">
              <MaskReveal
                lines={["Fais tourner ton business 24h/24.", "Sans embaucher personne."]}
                immediate
              />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-[var(--creme-muted)] md:text-xl">
                Site, pages de vente, campagnes Meta, assistant WhatsApp qui répond à ta
                place. En un mois, je monte le système complet, je le lance, et je te passe
                les clés.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* LE PROBLÈME */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <h2 className="display-font max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Ce n&apos;est pas ton produit le problème.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 text-base leading-[1.7] text-[var(--creme-muted)] md:grid-cols-2 md:text-lg">
              <Reveal delay={0.08}>
                <p>
                  Tu vends des sacs, des cosmétiques, des habits. Ou tu es coach, artisan,
                  consultant. Dans les deux cas c&apos;est pareil : tu as un bon produit, un
                  vrai savoir-faire — et ta vente dépend entièrement de toi.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Tu réponds toi-même à chaque message. Tu relances toi-même. Tu postes, ça
                  fait trois likes, et rien. Le problème, c&apos;est que tu n&apos;as pas de
                  machine. Tu as un travail à plein temps déguisé en business.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* TIMELINE */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Le déroulement</p>
              <h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Ce qu&apos;on fait, semaine par semaine.
              </h2>
            </Reveal>
            <Timeline />
          </div>
        </section>

        <SectionSeparator />

        {/* POURQUOI MOI */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Pourquoi moi</p>
              <h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Je ne vais pas te montrer des captures d&apos;écran.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                Tu en as déjà vu des dizaines sur Facebook, et tu sais comme moi que
                n&apos;importe qui peut les fabriquer. Ce que je peux te montrer, c&apos;est
                ce que j&apos;ai construit. Tu cliques, tu vérifies toi-même.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                {preuves.map((preuve) => (
                  <a
                    key={preuve.nom}
                    href={preuve.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex min-h-11 items-center rounded-full border border-[var(--navy-line)] px-5 py-2 text-sm font-bold text-[var(--creme)] transition-all duration-500 ease-[var(--ease-signature)] hover:border-[var(--or)] hover:bg-[var(--or)] hover:text-[var(--navy)]"
                  >
                    {preuve.nom}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                Sahel Agent, Djinn et Nana : trois outils développés seul depuis Bamako. Et
                Bassitan, ma propre boutique en ligne — le site, les pages de vente, les
                campagnes. Tout ce que je vais mettre en place pour toi, je l&apos;ai
                d&apos;abord fait pour moi, avec mon argent. Je lance aussi des campagnes
                publicitaires pour des commerçants ici, à Bamako.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* PRIX + RARETÉ */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <div className="gold-border shimmer rounded-2xl bg-[var(--navy-elevated)] p-7 md:p-12">
                <div className="eyebrow mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--champagne)]" />
                  <span>
                    {["avril", "août", "octobre"].includes(moisCourant)
                      ? `Places d'${moisCourant}`
                      : `Places de ${moisCourant}`}
                  </span>
                </div>
                <p className="display-font text-6xl font-semibold text-[var(--or)] md:text-8xl">
                  {PLACES_RESTANTES}
                </p>
                <p className="mt-2 text-xl text-[var(--creme)] md:text-2xl">
                  {PLACES_RESTANTES === 1
                    ? "place restante ce mois-ci"
                    : "places restantes ce mois-ci"}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                  Je ne prends que 3 projets par mois. Un accompagnement, c&apos;est quatre
                  semaines où je suis dans ton business chaque semaine. Au-delà de trois en
                  parallèle, je ne peux plus tenir ce niveau d&apos;attention — et je ne
                  travaille pas autrement. Quand les places du mois sont prises, tu passes au
                  mois suivant. Ce tarif évoluera à mesure que mon agenda se remplit.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="gold-border mt-8 rounded-2xl bg-[var(--navy-elevated)] p-7 md:mt-10 md:p-12">
                <p className="eyebrow">Le prix</p>
                <p className="mt-4 text-sm text-[var(--creme-muted)]">
                  Le même travail, en Europe : 1 300 000 FCFA (environ 2000 €)
                </p>
                <p className="display-font mt-4 text-5xl font-semibold text-[var(--or)] md:text-7xl">
                  <PriceCounter /> FCFA
                </p>
                <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                  En Europe, ce travail se facture autour de 2000 € — plus d&apos;un million
                  de FCFA. Je le fais à 150 000. Pas parce que c&apos;est au rabais : parce
                  qu&apos;ici, ce genre de service, personne n&apos;y croit encore. Le prix
                  bas, c&apos;est pour que tu puisses tester sans risquer gros.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--creme)]">Paiement en 2 fois</p>
                    <p className="mt-2 text-sm leading-[1.6] text-[var(--creme-muted)]">
                      100 000 FCFA à la signature, 50 000 FCFA au début de la semaine 3.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--creme)]">Compris</p>
                    <p className="mt-2 text-sm leading-[1.6] text-[var(--creme-muted)]">
                      Site, pages de vente, CAPI, campagnes, retargeting, passation. Nom de
                      domaine et hébergement offerts la première année.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--creme)]">En plus</p>
                    <p className="mt-2 text-sm leading-[1.6] text-[var(--creme-muted)]">
                      Le budget publicitaire Meta, réglé directement par toi à Meta. Environ
                      60 000 FCFA pour le mois, soit 3 € par jour. Ajustable.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* FRANCHISE */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-7">
                  <h3 className="display-font text-2xl font-semibold text-[var(--or)]">
                    Ce que je ne te promets pas
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Je ne te garantis pas de ventes. Personne d&apos;honnête ne peut le faire
                    — ça dépend de ton produit, de ton prix, de ton marché, de ton budget
                    pub. Ce que je garantis, c&apos;est le travail : le système monté, lancé,
                    optimisé et remis entre tes mains en un mois.
                  </p>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    L&apos;assistant WhatsApp automatique dépend de la compatibilité de ton
                    compte WhatsApp Business. Je vérifie ça dès le premier appel, avant que tu
                    paies quoi que ce soit.
                  </p>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Et je te livre autonome. Pas de maintenance, pas d&apos;abonnement caché,
                    pas de dépendance : à la fin du mois tu as les clés et tu sais t&apos;en
                    servir. Si tu veux qu&apos;on continue ensemble, c&apos;est un choix, pas
                    une obligation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-7">
                  <h3 className="display-font text-2xl font-semibold text-[var(--or)]">
                    Ce n&apos;est pas pour toi si
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Tu n&apos;as pas encore de produit ou de service à vendre. Tu cherches à
                    gagner de l&apos;argent sans rien vendre de réel. Tu n&apos;as pas 60 000
                    FCFA à mettre en publicité. Ou tu attends un miracle en un mois sans lever
                    le petit doigt.
                  </p>
                  <p className="mt-5 text-base leading-[1.7] text-[var(--creme)]">
                    C&apos;est pour toi si tu vends déjà quelque chose de vrai, que ça marche
                    un peu en direct, et que tu veux passer à l&apos;échelle sans embaucher
                    une équipe.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA FORMULAIRE */}
        <section className="py-16 md:py-24">
          <div className="container-fc text-center">
            <Reveal>
              <p className="mb-4 text-sm font-medium text-[var(--champagne)]">
                {PLACES_RESTANTES === 1
                  ? "Il ne reste qu'une place ce mois-ci."
                  : `Il ne reste que ${PLACES_RESTANTES} places ce mois-ci.`}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="display-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                On en parle 15 minutes.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.65] text-[var(--creme-muted)]">
                Je regarde ton activité et je te dis franchement si c&apos;est pour toi. Si ce
                n&apos;est pas le cas, je te le dis aussi — je ne prends pas tous les projets.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <AccompagnementForm />
            </Reveal>
          </div>
        </section>
        <FooterLegal />
        </div>
      </main>
    </>
  );
}
