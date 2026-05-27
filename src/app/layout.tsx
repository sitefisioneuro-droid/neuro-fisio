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
    "Fisioterapia neurofuncional pediátrica em Belo Horizonte. Especialista em torcicolo congênito, assimetria craniana e atraso no desenvolvimento motor infantil.",
  keywords: [
    "fisioterapia neurofuncional infantil",
    "fisioterapia pediátrica belo horizonte",
    "fisioterapeuta pediatrica belo horizonte",
    "torcicolo congênito bh",
    "assimetria craniana bh",
    "atraso no desenvolvimento motor bh",
    "fisioterapia bh",
    "fisioterapeuta infantil bh",
    "fisioterapia para bebes bh",
    "estimulacao precoce bh",
    "fisioterapia neuropediatrica bh",
    "neurodesenvolvimento infantil",
    "fisioterapia infantil em domicilio bh",
    "fisioterapia pediatrica prado bh",
    "torcicolo muscular congenito tratamento",
    "plagiocefalia posicional bh",
  ],
  authors: [{ name: "Ana Cássia Siqueira da Cunha" }],
  openGraph: {
    title: "Fisioterapia Neurofuncional Infantil em Belo Horizonte | Ana Cássia",
    description: "Especialista em torcicolo congênito, assimetria craniana e atraso no desenvolvimento motor. Cuidado gentil e especializado.",
    url: "https://anacassiafisio.com",
    siteName: "NeuroFisio Infantil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeuroFisio Infantil - Fisioterapia Pediátrica em Belo Horizonte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia Neurofuncional Infantil em Belo Horizonte | Ana Cássia",
    description: "Especialista em torcicolo congênito, assimetria craniana e atraso motor em Belo Horizonte.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/fav.png",
  },
  alternates: {
    canonical: "https://anacassiafisio.com",
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
    "image": "https://anacassiafisio.com/images/logo.jpg",
    "description": "Fisioterapia neurofuncional pediátrica em Belo Horizonte. Especializada em torcicolo muscular congênito, assimetrias cranianas e atraso do desenvolvimento motor em bebês e crianças.",
    "medicalSpecialty": "PediatricPhysicalTherapy",
    "knowsAbout": [
      "Fisioterapia Neurofuncional Pediátrica",
      "Torcicolo Muscular Congênito",
      "Assimetria Craniana",
      "Plagiocefalia Posicional",
      "Atraso no Desenvolvimento Motor",
      "Estimulação Motora Precoce",
      "Fisioterapia de Bebês"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Belo Horizonte"
    },
    "priceRange": "$$",
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
    "url": "https://anacassiafisio.com",
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
