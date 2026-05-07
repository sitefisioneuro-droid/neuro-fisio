import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
