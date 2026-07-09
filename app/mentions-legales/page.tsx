import Link from "next/link";
import { Constellation } from "@/components/ui/Constellation";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Mentions légales — FC Group",
  description:
    "Mentions légales de FC Group, édité par FC SERVICES, entreprise individuelle immatriculée à Bamako, Mali.",
};

const h2 = "display-font text-2xl font-semibold text-[var(--creme)] md:text-3xl";
const body = "mt-4 space-y-2 text-base leading-[1.8] text-[var(--creme-muted)]";

export default function MentionsLegales() {
  return (
    <main>
      <section className="section-pad relative overflow-hidden bg-[var(--navy)]">
        <div className="absolute inset-0">
          <Constellation density={22} />
        </div>

        <div className="container-fc relative z-10">
          <Reveal>
            <Link
              href="/"
              className="focus-ring text-sm text-[var(--creme-muted)] transition hover:text-[var(--or)]"
            >
              ← Retour à l’accueil
            </Link>

            <p className="eyebrow mt-8">Informations légales</p>
            <h1 className="display-font mt-5 text-4xl font-semibold leading-tight text-[var(--creme)] md:text-5xl">
              Mentions légales
            </h1>
          </Reveal>

          <div className="mt-14 max-w-3xl space-y-12">
            <Reveal>
              <div>
                <h2 className={h2}>1. Éditeur du site</h2>
                <div className={body}>
                  <p>
                    Le site FC Group est édité par{" "}
                    <strong className="text-[var(--creme)]">FC SERVICES</strong>, entreprise
                    individuelle immatriculée au Mali.
                  </p>
                  <p>Responsable : Ismaël Nawogo Dembélé</p>
                  <p>RCCM : ML-BKO-01-2026-A-03806</p>
                  <p>NINA : 325900107010001D0009Y</p>
                  <p>Siège social : Kalaban Coro, Bamako, Mali</p>
                  <p>Téléphone : +223 72 30 23 64 / +223 79 06 17 89</p>
                  <p>Email : isbydem9@gmail.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>2. Directeur de la publication</h2>
                <p className={body}>Ismaël Nawogo Dembélé, responsable de FC SERVICES.</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>3. Hébergement</h2>
                <p className={body}>
                  Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
                  États-Unis — vercel.com
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>4. Propriété intellectuelle</h2>
                <p className={body}>
                  L’ensemble des contenus présents sur le site FC Group (textes, logos, visuels,
                  éléments graphiques, marques Djinn, Nana, Sahel Agent, Marketing IA) est la
                  propriété exclusive de FC SERVICES, sauf mention contraire. Toute reproduction,
                  représentation ou diffusion, totale ou partielle, sans autorisation écrite
                  préalable est interdite.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>5. Données personnelles</h2>
                <p className={body}>
                  Le site FC Group peut collecter des données personnelles (nom, adresse email,
                  numéro de téléphone) lorsque vous nous contactez ou utilisez nos services. Ces
                  données servent uniquement à répondre à vos demandes et au fonctionnement de nos
                  services. Elles ne sont ni vendues ni cédées à des tiers. Vous disposez d’un droit
                  d’accès, de rectification et de suppression de vos données en nous contactant à
                  l’adresse ci-dessus.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>6. Responsabilité</h2>
                <p className={body}>
                  FC SERVICES s’efforce d’assurer l’exactitude des informations publiées sur ce
                  site, sans garantir qu’elles soient exhaustives ou exemptes d’erreurs. Le site peut
                  contenir des liens vers des sites tiers dont FC SERVICES n’assume pas la
                  responsabilité du contenu.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className={h2}>7. Contact</h2>
                <p className={body}>
                  Pour toute question relative aux présentes mentions légales, écrivez-nous sur
                  WhatsApp au +223 79 06 17 89 ou par email à isbydem9@gmail.com.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
