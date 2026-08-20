"use client";

import { useState } from "react";
import { generateEventId } from "@/lib/meta";
import { formationOffer } from "@/lib/formation-offer";

const WHATSAPP_NUMBER = formationOffer.whatsappNumber;

const champStyle =
  "w-full rounded-xl border border-[var(--navy-line)] bg-[var(--navy)] px-4 py-3 text-base text-[var(--creme)] placeholder-[var(--creme-muted)] outline-none transition-colors duration-300 focus:border-[var(--or)]";

type AccompagnementFormProps = {
  source?: string;
  labelActivite?: string;
  placeholderActivite?: string;
};

export function AccompagnementForm({
  source = "Accompagnement",
  labelActivite = "Ce que tu vends",
  placeholderActivite = "Ex : cosmétiques, coaching sportif, couture…",
}: AccompagnementFormProps) {
  const [nom, setNom] = useState("");
  const [activite, setActivite] = useState("");
  const [tel, setTel] = useState("");
  const [erreur, setErreur] = useState("");

  function envoyer() {
    if (!nom.trim() || !activite.trim() || !tel.trim()) {
      setErreur("Remplis les trois champs pour qu'on puisse caler l'appel.");
      return;
    }
    setErreur("");
    const eventId = generateEventId();

    try {
      window.fbq?.(
        "track",
        "Lead",
        {
          content_name: source,
          content_category: source,
          currency: "XOF",
        },
        { eventID: eventId },
      );
    } catch {}

    void fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Lead",
        eventId,
        eventSourceUrl: window.location.href,
        source,
        contentName: source,
        contentCategory: source,
        user: {
          nom,
          telephone: tel,
        },
      }),
      keepalive: true,
    }).catch(() => {});

    const message =
      "Bonjour " + formationOffer.founderName + ", je viens de la page " + source + " du site FC Group.\n\n" +
      "Nom : " + nom.trim() + "\n" +
      "Activité : " + activite.trim() + "\n" +
      "WhatsApp : " + tel.trim() + "\n\n" +
      "Je voudrais qu'on cale l'appel de 15 minutes.";
    window.open(
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="gold-border mx-auto mt-9 max-w-lg rounded-2xl bg-[var(--navy-elevated)] p-6 text-left md:p-8">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="nom" className="text-sm font-medium text-[var(--creme-muted)]">
            Ton nom
          </label>
          <input
            id="nom"
            type="text"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
            placeholder="Ton nom complet"
            className={`mt-2 ${champStyle}`}
          />
        </div>
        <div>
          <label htmlFor="activite" className="text-sm font-medium text-[var(--creme-muted)]">
            {labelActivite}
          </label>
          <input
            id="activite"
            type="text"
            value={activite}
            onChange={(event) => setActivite(event.target.value)}
            placeholder={placeholderActivite}
            className={`mt-2 ${champStyle}`}
          />
        </div>
        <div>
          <label htmlFor="tel" className="text-sm font-medium text-[var(--creme-muted)]">
            Ton numéro WhatsApp
          </label>
          <input
            id="tel"
            type="tel"
            inputMode="tel"
            value={tel}
            onChange={(event) => setTel(event.target.value)}
            placeholder="+223 __ __ __ __"
            className={`mt-2 ${champStyle}`}
          />
        </div>

        {erreur ? (
          <p className="text-sm font-medium text-[var(--champagne)]">{erreur}</p>
        ) : null}

        <button
          type="button"
          onClick={envoyer}
          className="focus-ring shimmer mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--or)] px-6 py-3 text-sm font-bold text-[var(--navy)] transition-all duration-500 ease-[var(--ease-signature)] hover:bg-[var(--or-bright)]"
        >
          Réserver mon appel
        </button>

        <p className="text-center text-xs text-[var(--creme-muted)]">
          Tu seras redirigé vers WhatsApp pour qu&apos;on cale un créneau.
        </p>
      </div>
    </div>
  );
}
