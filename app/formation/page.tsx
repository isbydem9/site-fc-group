import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Lightbulb, Sparkles } from "lucide-react";
import { FooterLegal } from "@/components/FooterLegal";
import { Timeline } from "@/components/accompagnement/Timeline";
import { CheckoutLink } from "@/components/formation/CheckoutLink";
import { FormationHeader } from "@/components/formation/FormationHeader";
import { InPersonLink } from "@/components/formation/InPersonLink";
import { OfferViewTracker } from "@/components/formation/FormationTracking";
import { StickyFormationCta } from "@/components/formation/StickyFormationCta";
import { VslPlayer } from "@/components/formation/VslPlayer";
import { Constellation } from "@/components/ui/Constellation";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { formationOffer } from "@/lib/formation-offer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: formationOffer.seoTitle,
  description: formationOffer.description,
  alternates: { canonical: formationOffer.canonical },
  openGraph: { title: formationOffer.seoTitle, description: formationOffer.description, url: formationOffer.canonical },
  twitter: { title: formationOffer.seoTitle, description: formationOffer.description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: formationOffer.name,
  description: formationOffer.description,
  provider: { "@type": "Organization", "@id": "https://fcgroupml.com/#organization" },
  hasCourseInstance: [
    { "@type": "CourseInstance", courseMode: "online", offers: { "@type": "Offer", price: formationOffer.online.price, priceCurrency: formationOffer.online.currency, url: `https://fcgroupml.com${formationOffer.canonical}` } },
    { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: formationOffer.inPerson.location }, offers: { "@type": "Offer", price: formationOffer.inPerson.price, priceCurrency: formationOffer.inPerson.currency } },
  ],
};

const path = ["Apprendre", "Créer", "Montrer", "Proposer", "Facturer"];
const outcomes = [
  ["Structurer avant de construire", "Tu transformes une idée floue en plan clair, prêt à être exécuté."],
  ["Créer une direction qui inspire confiance", "Tu choisis les couleurs, les textes et la hiérarchie qui donnent une vraie présence au projet."],
  ["Guider l’IA avec précision", "Tu apprends à demander, corriger et améliorer sans te perdre dans le jargon."],
  ["Produire un site qui fonctionne partout", "Tu construis un résultat lisible sur téléphone, avec des images, des boutons et WhatsApp connectés."],
  ["Mettre en ligne et recommencer", "Tu publies ton projet, tu le montres comme preuve et tu reproduis la méthode pour d’autres besoins."],
];
const modules = [
  { semaine: "Étape 1", titre: "Installer et comprendre les outils.", corps: "Tu prépares ton environnement de travail, tu comprends le rôle de chaque outil et tu obtiens une base prête pour construire." },
  { semaine: "Étape 2", titre: "Structurer le projet et sa direction visuelle.", corps: "Tu réalises ton cahier des charges, l’organisation des pages et ta charte graphique. À la fin, l’IA sait exactement ce qu’elle doit produire." },
  { semaine: "Étape 3", titre: "Donner de bonnes instructions à l’IA.", corps: "Tu apprends à formuler, découper et améliorer tes demandes. Tu obtiens une première version cohérente de ton site." },
  { semaine: "Étape 4", titre: "Construire, corriger et rendre responsive.", corps: "Tu ajustes les textes, les images, les boutons et l’affichage mobile jusqu’à obtenir un projet propre et présentable." },
  { semaine: "Étape 5", titre: "Mettre en ligne et connecter les actions.", corps: "Tu publies le site, tu relies WhatsApp et tu apprends à observer puis améliorer ce que les visiteurs utilisent." },
];
const faq = [
  ["Dois-je déjà savoir coder ?", "Non. La formation part de zéro et t’apprend à guider l’IA sans passer par l’apprentissage traditionnel de la programmation."],
  ["Ai-je besoin d’un ordinateur ?", "Oui. Un ordinateur et une connexion internet sont nécessaires pour pratiquer et construire le projet dans de bonnes conditions."],
  ["Quels outils vais-je utiliser ?", formationOffer.pendingInformation.tools],
  ["Devrai-je payer certains outils séparément ?", formationOffer.pendingInformation.paidTools],
  ["Comment vais-je recevoir mon accès ?", formationOffer.pendingInformation.accessDelivery],
  ["Comment fonctionne le suivi WhatsApp ?", `Tu bénéficies de ${formationOffer.online.followUpDays} jours de suivi WhatsApp pour poser tes questions et te débloquer pendant la pratique.`],
  ["Quelle différence entre la formation en ligne et le présentiel ?", `La formation en ligne te permet d’avancer à ton rythme. Le présentiel comprend ${formationOffer.inPerson.sessions} séances individuelles à Bamako et un accompagnement face à face.`],
  ["Puis-je proposer des sites à des clients après la formation ?", "La méthode t’apprend à produire, présenter et reproduire un résultat concret que tu peux proposer comme service."],
  ["Comment effectuer le paiement par Orange Money ?", "Clique sur le bouton d’accès : un message WhatsApp prérempli te permettra de recevoir les instructions de paiement Orange Money."],
  ["Pendant combien de temps puis-je accéder à la formation ?", formationOffer.pendingInformation.accessDuration],
];

const primaryButton = "focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--or)] px-6 py-3 text-center text-sm font-bold text-[var(--navy)] transition hover:bg-[var(--or-bright)] sm:px-8";

export default function FormationPage() {
  return (
    <>
      <FormationHeader />
      <main className="overflow-x-clip bg-[var(--navy)] pb-28 pt-20 text-[var(--creme)]">
        <div className="pointer-events-none fixed inset-0"><Constellation density={48} /></div>
        <div className="relative z-10">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

          <section className="pb-8 pt-8 md:pb-10 md:pt-12">
            <div className="container-fc text-center">
              <p className="eyebrow">Créer des sites <span aria-hidden="true">•</span> Monétiser l’IA</p>
              <h1 className="display-font mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.06] md:text-6xl">
                <MaskReveal lines={["Ne te contente plus d’utiliser l’IA.", "Apprends à gagner avec."]} immediate />
              </h1>
              <Reveal delay={0.1}><p className="mx-auto mt-5 max-w-3xl text-base leading-[1.65] text-[var(--creme-muted)] md:text-xl">Apprends à créer des sites professionnels sans coder, puis découvre comment utiliser l’IA au quotidien pour transformer tes compétences en opportunités de revenus.</p></Reveal>
              <Reveal delay={0.16}><p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-[var(--champagne)]">La méthode utilisée pour construire Sahel Agent, Djinn, Nana et Bassitan.</p></Reveal>
            </div>
          </section>

          <section className="pb-14 md:pb-20" aria-label="Présentation vidéo">
            <div className="container-fc max-w-5xl">
              <Reveal><VslPlayer /></Reveal>
              <div className="mt-5 text-center">
                <p className="text-sm text-[var(--creme-muted)]">{formationOffer.vsl.durationLabel}</p>
                <CheckoutLink className={`${primaryButton} mt-4`}>Accéder à la formation — {formationOffer.online.priceLabel}</CheckoutLink>
                <p className="mt-3 text-xs text-[var(--creme-muted)]">Paiement Orange Money · Formation en ligne · 30 jours de suivi WhatsApp</p>
              </div>
            </div>
          </section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc">
            <Reveal><p className="eyebrow">Le vrai problème</p><h2 className="display-font mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Tu connais déjà les outils. Mais tu ne sais toujours pas quoi vendre.</h2></Reveal>
            <div className="mt-8 grid gap-6 text-base leading-[1.75] text-[var(--creme-muted)] md:grid-cols-2 md:text-lg">
              <Reveal><p>Tu regardes de nouvelles vidéos sur l’IA. Chaque semaine, un nouvel outil apparaît avec une nouvelle promesse. Tu accumules les astuces, les prompts et les onglets ouverts.</p></Reveal>
              <Reveal delay={0.1}><p>Mais devant un client, la question reste la même : <strong className="text-[var(--creme)]">quel résultat concret peux-tu lui livrer ?</strong> Cette formation transforme ton intérêt en une compétence complète, visible et vendable.</p></Reveal>
            </div>
          </div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc">
            <Reveal><h2 className="display-font max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Pendant que certains parlent de l’IA, d’autres l’utilisent déjà pour créer et vendre.</h2><p className="mt-6 max-w-3xl text-base leading-[1.75] text-[var(--creme-muted)] md:text-lg">Autour de toi, des commerces, restaurants, marques, indépendants, associations et entrepreneurs ont besoin de sites, de catalogues, de pages claires et de boutons WhatsApp. Tu peux apprendre à produire ce résultat.</p></Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">{path.map((item, index) => <Reveal key={item} delay={index * .06}><div className="gold-border h-full rounded-2xl bg-[var(--navy-elevated)] p-4"><span className="text-xs font-bold text-[var(--or)]">0{index + 1}</span><p className="display-font mt-2 text-lg font-semibold">{item}.</p></div></Reveal>)}</div>
          </div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc">
            <Reveal><p className="eyebrow">Résultats concrets</p><h2 className="display-font mt-4 text-3xl font-semibold md:text-5xl">Ce que tu seras capable de construire.</h2></Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">{outcomes.map(([title, text], i) => <Reveal key={title} delay={i * .05}><article className="gold-border flex h-full gap-4 rounded-2xl bg-[var(--navy-elevated)] p-6"><Check className="mt-1 shrink-0 text-[var(--or)]" size={20}/><div><h3 className="display-font text-xl font-semibold text-[var(--creme)]">{title}</h3><p className="mt-2 leading-[1.7] text-[var(--creme-muted)]">{text}</p></div></article></Reveal>)}</div>
          </div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc">
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
              <Reveal><div className="gold-border relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--navy-elevated)]"><Image src="/founder.jpg" alt="Ismaël Dembélé, fondateur de FC Group à Bamako" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover object-[center_25%]"/><div className="absolute inset-x-4 bottom-4 rounded-xl border border-[var(--navy-line)] bg-[rgba(10,22,40,.86)] p-4 backdrop-blur"><p className="display-font text-xl font-semibold">Ismaël Dembélé</p><p className="text-sm text-[var(--creme-muted)]">Fondateur de FC Group · Bamako</p></div></div></Reveal>
              <Reveal delay={.1}><div><p className="eyebrow">La preuve par le travail</p><h2 className="display-font mt-4 text-3xl font-semibold leading-tight md:text-5xl">Je ne t’enseigne pas une théorie. Je te montre ce que j’utilise.</h2><p className="mt-6 text-lg leading-[1.75] text-[var(--creme-muted)]">Je ne suis pas développeur de formation. Pourtant, j’ai construit plusieurs produits en ligne grâce à l’IA. Et c’est précisément la méthode que je vais te transmettre.</p></div></Reveal>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{formationOffer.projects.map((project, i) => <Reveal key={project.name} delay={i * .06}><article className="gold-border flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--navy-elevated)]"><div className="relative aspect-[9/14] overflow-hidden border-b border-[var(--navy-line)]"><Image src={project.image} alt={`Capture réelle du projet ${project.name}`} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-top"/></div><div className="flex flex-1 flex-col p-5"><h3 className="display-font text-2xl font-semibold">{project.name}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--creme-muted)]">{project.description}</p><a href={project.url} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--or)]">Voir le projet <ArrowUpRight size={16}/></a></div></article></Reveal>)}</div>
          </div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc"><Reveal><p className="eyebrow">Le programme</p><h2 className="display-font mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">De l’idée au site publié.</h2></Reveal><Timeline etapes={modules}/></div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc"><Reveal><div className="relative overflow-hidden rounded-2xl border border-[var(--or)] bg-[linear-gradient(135deg,var(--navy-elevated),rgba(201,167,107,.12))] p-7 shadow-2xl shadow-black/20 md:p-12"><Sparkles className="absolute right-8 top-8 text-[var(--or)] opacity-60" size={44}/><p className="eyebrow">Bonus exclusif</p><div className="mt-5 inline-flex rounded-full border border-[var(--or)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--or-bright)]">Inclus avec la formation</div><p className="display-font mt-6 text-2xl font-semibold text-[var(--or)]">Le Système IA Rentable</p><h2 className="display-font mt-3 text-4xl font-semibold md:text-6xl">Créer des sites n’est que le début.</h2><p className="mt-6 max-w-3xl text-base leading-[1.75] text-[var(--creme-muted)] md:text-lg">Une fois que tu comprends comment utiliser l’IA pour produire un résultat utile, tu commences à voir des opportunités partout. Dans ce bonus, tu découvriras comment utiliser l’IA au quotidien pour identifier des services, produire plus rapidement et transformer tes capacités en nouvelles occasions de revenus.</p></div></Reveal></div></section>

          <SectionSeparator />
          <section id="offre" className="scroll-mt-28 py-14 md:py-20"><div className="container-fc"><div className="mx-auto max-w-4xl">
            <Reveal><article className="relative overflow-hidden rounded-2xl border border-[var(--or)] bg-[var(--navy-elevated)] p-7 shadow-2xl shadow-black/30 md:p-12"><OfferViewTracker/><p className="eyebrow">Formation complète en ligne</p><h2 className="display-font mt-4 text-3xl font-semibold md:text-5xl">Tout ce qu’il te faut pour passer de l’idée au premier projet.</h2><p className="display-font mt-7 text-5xl font-semibold text-[var(--or)] md:text-7xl">{formationOffer.online.priceLabel}</p><ul className="mt-8 grid gap-4 text-[var(--creme-muted)] md:grid-cols-2">{["Formation complète de création de sites avec l’IA","Méthode guidée étape par étape","Un projet concret à construire et publier","Bonus Le Système IA Rentable","30 jours de suivi WhatsApp","Paiement par Orange Money"].map(item => <li key={item} className="flex gap-3"><Check className="shrink-0 text-[var(--or)]" size={19}/><span>{item}</span></li>)}</ul><p className="mt-7 text-sm text-[var(--creme-muted)]">{formationOffer.online.delivery}</p><CheckoutLink className={`${primaryButton} mt-7 w-full sm:w-auto`}>{formationOffer.online.ctaLabel}</CheckoutLink><p className="mt-3 text-xs text-[var(--creme-muted)]">Paiement Orange Money · Accès en ligne · Suivi WhatsApp inclus</p></article></Reveal>
            <Reveal delay={.1}><article className="gold-border mt-8 rounded-2xl bg-[rgba(15,30,51,.82)] p-7 md:p-10"><p className="eyebrow">Option premium · Bamako</p><h2 className="display-font mt-4 text-3xl font-semibold">Tu préfères être accompagné en face à face ?</h2><p className="display-font mt-5 text-4xl font-semibold text-[var(--or)]">{formationOffer.inPerson.priceLabel}</p><p className="mt-5 leading-[1.75] text-[var(--creme-muted)]">Cinq séances individuelles à Bamako, un accompagnement personnalisé et 30 jours de suivi. Trois places maximum par mois pour préserver la qualité du face-à-face.</p><InPersonLink className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--or)] px-6 text-sm font-bold text-[var(--creme)] transition hover:bg-[var(--or)] hover:text-[var(--navy)]">Vérifier les places en présentiel</InPersonLink></article></Reveal>
          </div></div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc"><Reveal><p className="eyebrow">Pour toi</p><h2 className="display-font mt-4 text-3xl font-semibold md:text-5xl">Cette formation est faite pour toi si…</h2></Reveal><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Tu veux transformer ton intérêt pour l’IA en compétence concrète.","Tu veux construire tes propres projets.","Tu veux pouvoir proposer un service clair.","Tu es prêt à pratiquer entre les leçons.","Tu disposes d’un ordinateur et d’une connexion.","Tu pars de zéro en programmation."].map((item,i)=><Reveal key={item} delay={i*.04}><div className="gold-border flex h-full gap-3 rounded-2xl bg-[var(--navy-elevated)] p-5"><Lightbulb className="shrink-0 text-[var(--or)]" size={20}/><p>{item}</p></div></Reveal>)}</div></div></section>

          <SectionSeparator />
          <section className="py-14 md:py-20"><div className="container-fc max-w-4xl"><Reveal><p className="eyebrow">Questions fréquentes</p><h2 className="display-font mt-4 text-3xl font-semibold md:text-5xl">Tout ce que tu dois savoir.</h2></Reveal><div className="mt-9 space-y-3">{faq.map(([q,a])=><details key={q} className="gold-border group rounded-2xl bg-[var(--navy-elevated)] p-5 open:border-[var(--or)]"><summary className="focus-ring cursor-pointer list-none pr-8 font-bold text-[var(--creme)] marker:hidden">{q}<span className="float-right text-[var(--or)] group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 leading-[1.7] text-[var(--creme-muted)]">{a}</p></details>)}</div></div></section>

          <SectionSeparator />
          <section className="py-16 text-center md:py-24"><div className="container-fc"><Reveal><h2 className="display-font mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">La prochaine fois que tu ouvriras l’IA, tu sauras quoi en faire.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-[var(--creme-muted)]">Apprends à construire, à montrer ton savoir-faire et à transformer l’IA en véritable outil d’opportunités.</p><CheckoutLink className={`${primaryButton} mt-7`}>Accéder à la formation — {formationOffer.online.priceLabel}</CheckoutLink><p className="mt-3 text-xs text-[var(--creme-muted)]">Paiement Orange Money · Formation en ligne · 30 jours de suivi WhatsApp</p></Reveal></div></section>
          <FooterLegal />
        </div>
      </main>
      <StickyFormationCta />
    </>
  );
}
