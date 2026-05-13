import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Fisioterapia Neurofuncional Pediátrica em Belo Horizonte | Ana Cássia",
  description:
    "Fisioterapia neurofuncional pediátrica em Belo Horizonte. Especialista em torcicolo, assimetria craniana e atraso motor. Atendimento domiciliar e em consultório.",
  keywords: [
    "fisioterapia neurofuncional infantil",
    "fisioterapia pediátrica belo horizonte",
    "torcicolo congênito",
    "assimetria craniana",
    "atraso motor",
    "fisioterapia bh",
    "neurodesenvolvimento",
  ],
  authors: [{ name: "Ana Cássia Siqueira da Cunha" }],
  openGraph: {
    title: "Fisioterapia Neurofuncional Infantil em Belo Horizonte | Ana Cássia",
    description: "Especialista em torcicolo, assimetria craniana e atraso motor. Cuidado gentil e especializado para o seu filho.",
    url: "https://neurofisioinfantil.com.br", // Substituir pelo domínio real se disponível
    siteName: "NeuroFisio Infantil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeuroFisio Infantil - Ana Cássia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia Neurofuncional Infantil em Belo Horizonte | Ana Cássia",
    description: "Especialista em torcicolo, assimetria craniana e atraso motor.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/fav.png",
  },
  alternates: {
    canonical: "https://neurofisioinfantil.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "NeuroFisio Infantil - Ana Cássia",
    "image": "https://neurofisioinfantil.com.br/images/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Jaceguai 208, salas 1213/1214",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30411-073",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.9213709,
      "longitude": -43.9587323
    },
    "url": "https://neurofisioinfantil.com.br",
    "telephone": "+5531999935571",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "founder": {
      "@type": "Person",
      "name": "Ana Cássia Siqueira da Cunha",
      "jobTitle": "Fisioterapeuta Neurofuncional",
      "hasCredential": [
        "Pós-graduação em Neurologia pela UFMG",
        "Mestrado em Bioengenharia pela UNIVAP"
      ]
    }
  };

  return (
    <html lang="pt-BR" className={`${poppins.variable} ${quicksand.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGHFKKHF');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGHFKKHF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
