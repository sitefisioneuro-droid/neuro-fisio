import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
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
  title: "NeuroFisio Infantil | Fisioterapia Neurológica Pediátrica",
  description:
    "Fisioterapia neurológica pediátrica especializada em Torcicolo Congênito, Assimetria Craniana e Atraso no Desenvolvimento Motor. Agende sua consulta via WhatsApp.",
  keywords: [
    "fisioterapia neurológica infantil",
    "torcicolo congênito",
    "assimetria craniana",
    "atraso motor",
    "fisioterapia pediátrica",
    "neurodesenvolvimento",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
