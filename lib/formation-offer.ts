const whatsappNumber = "22379061789";

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const formationOffer = {
  founderName: "Ismaël",
  name: "Créer des sites avec l’IA",
  seoTitle: "Créer des sites avec l’IA et monétiser ses compétences",
  description:
    "Apprends à créer des sites professionnels sans coder, à utiliser l’IA au quotidien et à transformer tes compétences en services. Formation en ligne depuis Bamako avec 30 jours de suivi WhatsApp.",
  canonical: "/formation",
  online: {
    id: "formation-ia-online-25000-xof",
    price: 25000,
    priceLabel: "25 000 FCFA",
    currency: "XOF",
    delivery: "Accès en ligne — modalités exactes à confirmer",
    payment: "Orange Money",
    followUpDays: 30,
    ctaLabel: "Commencer maintenant — 25 000 FCFA",
  },
  inPerson: {
    price: 75000,
    priceLabel: "75 000 FCFA",
    currency: "XOF",
    sessions: 5,
    maxPlacesPerMonth: 3,
    location: "Bamako",
    followUpDays: 30,
  },
  whatsappNumber,
  vsl: {
    src: "https://youtu.be/sQF2ruBzOq4",
    videoId: "sQF2ruBzOq4",
    poster: "https://i.ytimg.com/vi/sQF2ruBzOq4/maxresdefault.jpg",
    durationLabel: "Moins de 5 minutes pour découvrir la méthode.",
  },
  projects: [
    {
      name: "Sahel Agent",
      description: "Un copilote commercial pensé pour accompagner la prospection.",
      image: "/sahel-agent.png",
      url: "https://sahelagent.com",
      status: "En ligne",
    },
    {
      name: "Djinn",
      description: "Un outil qui transforme une idée en projet structuré.",
      image: "/formation/djinn.png",
      url: "https://djinn.fcgroupml.com",
      status: "En ligne",
    },
    {
      name: "Nana",
      description: "Une veille business conçue pour les entrepreneurs africains.",
      image: "/formation/nana.png",
      url: "https://nana.fcgroupml.com",
      status: "En ligne",
    },
    {
      name: "Bassitan",
      description: "Une boutique en ligne construite pour vendre simplement.",
      image: "/formation/bassitan.png",
      url: "https://www.bassitan.shop",
      status: "En ligne",
    },
  ],
  pendingInformation: {
    tools: "La liste définitive des outils sera précisée dans ton accès.",
    paidTools: "Les éventuels coûts d’outils tiers doivent encore être confirmés avant publication.",
    accessDelivery: "Le mode exact de remise des accès doit encore être confirmé avant publication.",
    accessDuration: "La durée d’accès à la formation doit encore être confirmée avant publication.",
  },
} as const;

export const formationCheckoutUrl = whatsappUrl(
  `Bonjour ${formationOffer.founderName}, je souhaite accéder à la formation en ligne « Créer des sites avec l’IA » à 25 000 FCFA. Comment effectuer le paiement ?`,
);

export const formationInPersonUrl = whatsappUrl(
  `Bonjour ${formationOffer.founderName}, je souhaite avoir des informations sur la formation présentielle à Bamako à 75 000 FCFA. Y a-t-il encore une place disponible ?`,
);

export function formatXof(value: number) {
  return `${new Intl.NumberFormat("fr-FR").format(value)} FCFA`;
}
