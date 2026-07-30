import type { Metadata } from "next";
import { FooterLegal } from "@/components/FooterLegal";
import { Nav } from "@/components/Nav";
import { AccompagnementForm } from "@/components/accompagnement/AccompagnementForm";
import { Timeline } from "@/components/accompagnement/Timeline";
import { Constellation } from "@/components/ui/Constellation";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Formation : créer ton site avec l'IA à Bamako",
  description:
    "5 séances individuelles à Bamako plus un mois de suivi. Tu repars avec ton site en ligne et la méthode. 50 000 FCFA.",
  alternates: { canonical: "/formation" },
};

// Valeur à modifier à la main (1 ou 2).
const PLACES_FORMATION: number = 2;

const preuves = [
  { nom: "Sahel Agent", url: "https://sahelagent.com" },
  { nom: "Djinn", url: "https://djinn.fcgroupml.com" },
  { nom: "Nana", url: "https://nana.fcgroupml.com" },
  { nom: "Bassitan", url: "https://bassitan.shop" },
];

const seances = [
  {
    semaine: "Séance 1",
    titre: "La base.",
    corps:
      "On installe les outils et les comptes, on cadre l'idée directrice de ton projet. Tu repars avec ton environnement de travail prêt.",
  },
  {
    semaine: "Séance 2",
    titre: "Cahier des charges et charte graphique.",
    corps:
      "On écrit noir sur blanc ce que ton site doit faire : les pages, les sections, les boutons d'action. Et on pose tes bases visuelles — couleurs, typographies, références. C'est l'étape que tout le monde saute, et c'est pour ça que la plupart des sites ne vendent rien.",
  },
  {
    semaine: "Séance 3",
    titre: "Prompt engineering et vibe coding.",
    corps:
      "Le cœur de la formation. Comment écrire des instructions que l'IA exécute vraiment, comment itérer sans tout casser. À la fin de la séance, la première version de ton site existe.",
  },
  {
    semaine: "Séance 4",
    titre: "Déploiement.",
    corps:
      "On met ton site en ligne pour de vrai, on branche tes boutons WhatsApp. À partir d'ici, ton mois de suivi démarre.",
  },
  {
    semaine: "Séance 5 — bonus",
    titre: "Mesure et analytics.",
    corps:
      "Pendant ton mois de suivi : on installe les outils qui te disent qui vient, d'où, et ce qu'ils font chez toi. Sans ça tu avances les yeux fermés.",
  },
];

const acquis = [
  {
    titre: "Ton site en ligne.",
    corps:
      "Pas une maquette, pas un brouillon. Un site déployé, avec tes boutons qui fonctionnent.",
  },
  {
    titre: "La méthode, pas un outil.",
    corps:
      "Les outils d'IA changent tous les six mois. Ce que je t'enseigne, c'est comment leur parler — et ça reste valable quel que soit l'outil qui sortira demain. Tu ne deviens pas dépendant d'un logiciel, tu deviens capable.",
  },
  {
    titre: "Un mois de suivi.",
    corps:
      "Après le déploiement, tu m'écris sur WhatsApp quand tu bloques. Je réponds sous 24h ouvrées. Je ne travaille pas à ta place — je te débloque pour que tu continues seul.",
  },
  {
    titre: "Tes comptes, tes accès, ton site.",
    corps: "Tout est à ton nom dès le premier jour. Personne d'autre ne tient les clés.",
  },
];

export default function FormationPage() {
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
            <p className="eyebrow">Formation — 5 séances à Bamako</p>
            <h1 className="display-font mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] text-[var(--creme)] md:text-6xl">
              <MaskReveal
                lines={["Apprends à construire ton site", "toi-même. Avec l'IA."]}
                immediate
              />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-2xl text-lg leading-[1.65] text-[var(--creme-muted)] md:text-xl">
                5 séances en présentiel à Bamako, plus un mois de suivi. Tu repars avec ton
                site en ligne et surtout avec la méthode — celle que j&apos;utilise pour
                construire mes propres outils.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* LA DOULEUR */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <h2 className="display-font max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Ton site ne t&apos;appartient pas tant que tu ne sais pas y toucher.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 text-base leading-[1.7] text-[var(--creme-muted)] md:grid-cols-2 md:text-lg">
              <Reveal delay={0.08}>
                <p>
                  Tu as un site, ou tu en veux un. Dans les deux cas, tu dépends de
                  quelqu&apos;un. Tu veux changer un prix, tu écris à ton développeur. Il
                  répond dans trois jours. Tu veux ajouter une page avant le week-end, il est
                  occupé.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  Un jour il change de numéro et tu ne le retrouves plus — avec tes accès. Ton
                  site, c&apos;est ton outil de vente, le seul endroit où tu es visible
                  24h/24. Il doit être entre tes mains.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* LE PROGRAMME */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Le programme</p>
              <h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Cinq séances, une méthode.
              </h2>
            </Reveal>
            <Timeline etapes={seances} />
          </div>
        </section>

        <SectionSeparator />

        {/* CE QUE TU REPARS AVEC */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <h2 className="display-font max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Ce que tu repars avec.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {acquis.map((item, index) => (
                <Reveal key={item.titre} delay={index * 0.08}>
                  <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-7">
                    <h3 className="display-font text-2xl font-semibold text-[var(--or)]">
                      {item.titre}
                    </h3>
                    <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                      {item.corps}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* POURQUOI MOI */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <p className="eyebrow">Pourquoi moi</p>
              <h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                Je n&apos;ai pas appris à coder. J&apos;ai appris à faire coder.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                Je ne t&apos;enseigne pas une méthode lue quelque part. C&apos;est exactement
                comme ça que je construis mes propres outils.
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
                Quatre projets en ligne, construits seul depuis Bamako, avec cette méthode. Tu
                cliques, tu vérifies. Je ne suis pas développeur de formation — et
                c&apos;est précisément pour ça que ça marche : ce que je te transmets,
                c&apos;est la méthode d&apos;un entrepreneur qui construit, pas d&apos;un
                ingénieur qui explique.
              </p>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* PLACES PUIS PRIX */}
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
                  {PLACES_FORMATION}
                </p>
                <p className="mt-2 text-xl text-[var(--creme)] md:text-2xl">
                  {PLACES_FORMATION === 1
                    ? "place restante ce mois-ci"
                    : "places restantes ce mois-ci"}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                  Je ne prends que 3 élèves par mois. Une formation, c&apos;est cinq créneaux
                  d&apos;une heure trente que je bloque dans mon agenda, plus un mois où je
                  réponds à tes questions. Au-delà de trois en parallèle, je ne peux plus
                  tenir ce niveau de disponibilité — et je ne travaille pas autrement.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="gold-border mt-8 rounded-2xl bg-[var(--navy-elevated)] p-7 md:mt-10 md:p-12">
                <p className="eyebrow">Le prix</p>
                <p className="display-font mt-4 text-5xl font-semibold text-[var(--or)] md:text-7xl">
                  50 000 FCFA
                </p>
                <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                  Cinq séances individuelles, en face à face, plus un mois de suivi. Pas un
                  groupe de vingt personnes où tu n&apos;oses pas poser ta question.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-bold text-[var(--creme)]">Paiement</p>
                    <p className="mt-2 text-sm leading-[1.6] text-[var(--creme-muted)]">
                      En totalité avant la première séance, par Orange Money, Wave ou en
                      espèces sur place.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--creme)]">Évolution</p>
                    <p className="mt-2 text-sm leading-[1.6] text-[var(--creme-muted)]">
                      Ce tarif évoluera à mesure que mon agenda se remplit.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* PRÉREQUIS ET FILTRE */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-7">
                  <h3 className="display-font text-2xl font-semibold text-[var(--or)]">
                    Ce qu&apos;il te faut
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Un ordinateur portable qui fonctionne et une connexion internet, pour
                    les séances et pendant le suivi. C&apos;est le seul matériel exigé.
                  </p>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Et du travail entre les séances. Je ne fais pas ton site à ta place : je
                    t&apos;apprends à le faire. Entre deux rendez-vous, tu avances sur ton
                    projet.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-7">
                  <h3 className="display-font text-2xl font-semibold text-[var(--or)]">
                    Ce n&apos;est pas pour toi si
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-[var(--creme-muted)]">
                    Tu n&apos;es pas à Bamako — les séances sont en présentiel, on se voit en
                    vrai. Tu cherches quelqu&apos;un qui fasse le travail à ta place. Tu
                    n&apos;as pas d&apos;ordinateur portable. Ou tu penses qu&apos;en cinq
                    rendez-vous sans rien faire entre les deux, ça va se construire tout
                    seul.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* PASSERELLE VERS L'ACCOMPAGNEMENT */}
        <section className="py-14 md:py-20">
          <div className="container-fc">
            <Reveal>
              <div className="gold-border mx-auto max-w-3xl rounded-2xl bg-[var(--navy-elevated)] p-7 text-center md:p-12">
                <h3 className="display-font text-2xl font-semibold text-[var(--or)] md:text-3xl">
                  Tu veux que ce soit fait, pas appris ?
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
                  Si tu n&apos;as pas le temps d&apos;apprendre et que tu veux qu&apos;on te
                  monte le système complet — site, pages de vente, campagnes Meta, assistant
                  WhatsApp — c&apos;est l&apos;accompagnement d&apos;un mois.
                </p>
                <a
                  href="/accompagnement"
                  className="focus-ring mt-7 inline-flex min-h-11 items-center rounded-full border border-[var(--navy-line)] px-5 py-2 text-sm font-bold text-[var(--creme)] transition-all duration-500 ease-[var(--ease-signature)] hover:border-[var(--or)] hover:bg-[var(--or)] hover:text-[var(--navy)]"
                >
                  Voir l&apos;accompagnement
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA FORMULAIRE */}
        <section className="py-16 md:py-24">
          <div className="container-fc text-center">
            <Reveal>
              <p className="mb-4 text-sm font-medium text-[var(--champagne)]">
                {PLACES_FORMATION === 1
                  ? "Il ne reste qu'une place ce mois-ci."
                  : `Il ne reste que ${PLACES_FORMATION} places ce mois-ci.`}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="display-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
                On en parle 15 minutes.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.65] text-[var(--creme-muted)]">
                Je regarde ton projet et je te dis franchement si la formation est faite pour
                toi. Si ce n&apos;est pas le cas, je te le dis aussi.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <AccompagnementForm
                source="Formation"
                labelActivite="Ton projet"
                placeholderActivite="Ex : boutique de cosmétiques, salon de coiffure, service de couture…"
              />
            </Reveal>
          </div>
        </section>
        <FooterLegal />
        </div>
      </main>
    </>
  );
}
