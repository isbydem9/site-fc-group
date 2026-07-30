import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { MetaPixel } from "@/components/tracking/MetaPixel";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fcgroupml.com"),
  title: {
    default: "FC Group — L'IA au service des entrepreneurs maliens",
    template: "%s | FC Group",
  },
  description:
    "FC Group construit l'intelligence artificielle qui aide les entrepreneurs africains à réussir seuls. Nana, Djinn, Sahel Agent et plus — depuis Bamako, Mali.",
  keywords: [
    "FC Group",
    "FC Group Mali",
    "startup Mali",
    "startup IA Mali",
    "intelligence artificielle Mali",
    "IA Mali",
    "IA Afrique",
    "IA entrepreneurs",
    "Nana",
    "Sahel Agent",
    "Djinn",
    "Ismaël Dembélé",
    "logiciel entrepreneur Mali",
    "tech Mali",
    "intelligence artificielle Afrique",
  ],
  authors: [{ name: "Ismaël Dembélé" }],
  creator: "Ismaël Dembélé",
  publisher: "FC Group",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fcgroupml.com",
    siteName: "FC Group",
    title: "FC Group — L'IA au service des entrepreneurs africains",
    description:
      "L'intelligence artificielle qui aide les entrepreneurs africains à réussir seuls. Depuis Bamako, Mali.",
    images: [
      { url: "/logo-fcgroup.png", width: 1200, height: 630, alt: "FC Group — À ton appel, Mali." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Group — L'IA au service des entrepreneurs africains",
    description: "L'IA qui aide les entrepreneurs africains à réussir seuls. Depuis Bamako, Mali.",
    images: ["/logo-fcgroup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-fcgroup.png",
    apple: "/logo-fcgroup.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FC Group",
    alternateName: "FC Group Mali",
    url: "https://fcgroupml.com",
    logo: "https://fcgroupml.com/logo-fcgroup.png",
    description:
      "FC Group construit l'intelligence artificielle qui aide les entrepreneurs africains à réussir seuls.",
    slogan: "À ton appel, Mali.",
    foundingDate: "2025",
    founder: { "@type": "Person", name: "Ismaël Dembélé" },
    foundingLocation: { "@type": "Place", name: "Bamako, Mali" },
    areaServed: "Afrique de l'Ouest",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Écosystème FC Group",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Nana",
            applicationCategory: "BusinessApplication",
            url: "https://nana.fcgroupml.com",
            description: "La veille business par l'IA pour les entrepreneurs africains.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Djinn",
            applicationCategory: "BusinessApplication",
            url: "https://djinn.fcgroupml.com",
            description: "De l'idée au business plan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Sahel Agent",
            applicationCategory: "BusinessApplication",
            url: "https://sahelagent.com",
            description: "Copilote commercial IA.",
          },
        },
      ],
    },
    sameAs: [
      "https://nana.fcgroupml.com",
      "https://www.tiktok.com/@sahelagent",
      "https://www.youtube.com/channel/UCB60cGygrCWsIqSVC7rrQ0w",
      "https://www.instagram.com/fcgroupml",
      "https://www.facebook.com/61586727920038",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-fcgroup.png" type="image/png" />
      </head>
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
