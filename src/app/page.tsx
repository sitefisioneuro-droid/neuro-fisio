"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Baby,
  Brain,
  Footprints,
  Instagram,
  Clock,
  Heart,
  Award,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import styles from "./page.module.css";

/* ── Número do WhatsApp (trocar pelo real) ── */
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta de fisioterapia neurológica infantil."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════ */}
      <header className={styles.header}>
        <div className={styles.nav}>
          <a href="#" className={styles.logoArea}>
            <Image
              src="/images/logo.jpg"
              alt="NeuroFisio Infantil"
              width={200}
              height={80}
              className={styles.logoImg}
              priority
            />
          </a>

          <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
            <a href="#especialidades" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Especialidades
            </a>
            <a href="#sobre" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
            <a href="#profissional" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Profissional
            </a>
            <a href="#localizacao" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Localização
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btnWhatsapp ${styles.navCta}`}
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon size={18} />
              Agendar Consulta
            </a>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════════════════
            HERO — 1ª Dobra
            ════════════════════════════════════════════ */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>


              <h1 className={styles.heroTitle}>
                Cuidado gentil para o{" "}
                <span className={styles.heroTitleHighlight}>
                  desenvolvimento motor
                </span>{" "}
                do seu filho.
              </h1>

              <p className={styles.heroSubtitle}>
                Especialista em Torcicolo Congênito, Assimetria Craniana e
                Atraso no Desenvolvimento Motor. Transformamos o brincar em
                reabilitação especializada.
              </p>

              <div className={styles.heroActions}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btnWhatsapp"
                >
                  <WhatsAppIcon size={18} />
                  Agendar Consulta via WhatsApp
                </a>
                <a href="#especialidades" className="btn btnOutline">
                  Conhecer Especialidades
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SOBRE — 2ª Dobra
            ════════════════════════════════════════════ */}
        <section id="sobre" className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImage}>
                <Image
                  src="/images/about.png"
                  alt="Ambiente terapêutico acolhedor com brinquedos"
                  width={500}
                  height={420}
                />
              </div>
              <div className={styles.aboutImageDecor} />
            </div>

            <div>
              <span className={styles.aboutLabel}>Missão & Valores</span>
              <h2 className={styles.aboutTitle}>
                Aqui, oferecemos mais que fisioterapia...
              </h2>

              <p className={styles.aboutText}>
                Acreditamos que cada pequeno passo é uma grande conquista. Nossa
                abordagem é centrada na criança e na família, transformando o
                tratamento neurológico em uma jornada de descoberta e superação
                — em um ambiente que parece mais um espaço de acolhimento do que
                uma clínica tradicional.
              </p>

              <hr className={styles.aboutDivider} />

              <p className={styles.aboutText}>
                Combinamos o rigor da ciência com a delicadeza que o cuidado
                infantil exige. Nosso objetivo é potencializar o desenvolvimento
                motor de cada bebê, prevenir complicações e promover autonomia
                através de técnicas modernas e humanizadas de neurorreabilitação
                pediátrica.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            ESPECIALIDADES
            ════════════════════════════════════════════ */}
        <section id="especialidades" className={styles.specialties}>
          <div className={styles.specialtiesInner}>
            <p className={styles.sectionLabel}>O que fazemos</p>
            <h2 className={styles.sectionTitle}>Nossas Especialidades</h2>
            <p className={styles.sectionSubtitle}>
              Intervenção precoce com foco nos problemas mais comuns do
              desenvolvimento motor infantil, sempre com carinho e evidência
              científica.
            </p>

            <div className={styles.specialtiesGrid}>
              {/* Card 1 — Torcicolo */}
              <div className={`${styles.specialtyCard} ${styles.cardSage}`}>
                <div className={`${styles.iconCircle} ${styles.iconSage}`}>
                  <Baby size={28} />
                </div>
                <h3 className={styles.cardTitle}>Torcicolo Congênito</h3>
                <p className={styles.cardText}>
                  Tratamento especializado para correção postural precoce,
                  promovendo alongamento e fortalecimento muscular para garantir
                  a simetria motora desde as primeiras semanas de vida.
                </p>
                <span className={`${styles.cardTag} ${styles.tagSage}`}>
                  Intervenção Precoce
                </span>
              </div>

              {/* Card 2 — Assimetria Craniana */}
              <div className={`${styles.specialtyCard} ${styles.cardBlush}`}>
                <div className={`${styles.iconCircle} ${styles.iconBlush}`}>
                  <Brain size={28} />
                </div>
                <h3 className={styles.cardTitle}>Assimetria Craniana</h3>
                <p className={styles.cardText}>
                  Avaliação especializada e orientações de posicionamento para
                  prevenção e correção, garantindo o desenvolvimento harmônico
                  da forma craniana do bebê.
                </p>
                <span className={`${styles.cardTag} ${styles.tagBlush}`}>
                  Preventivo
                </span>
              </div>

              {/* Card 3 — Atraso Motor */}
              <div className={`${styles.specialtyCard} ${styles.cardLavender}`}>
                <div className={`${styles.iconCircle} ${styles.iconLavender}`}>
                  <Footprints size={28} />
                </div>
                <h3 className={styles.cardTitle}>Atraso no Desenvolvimento Motor</h3>
                <p className={styles.cardText}>
                  Estimulação dos marcos motores — rolar, sentar, engatinhar e
                  caminhar — através de atividades lúdicas fundamentadas na
                  neuroplasticidade.
                </p>
                <span className={`${styles.cardTag} ${styles.tagLavender}`}>
                  Estimulação
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            PROFISSIONAL
            ════════════════════════════════════════════ */}
        <section id="profissional" className={styles.professional}>
          <div className={styles.proInner}>
            <div className={styles.proCard}>
              <div className={styles.proImageWrapper}>
                <div className={styles.proImageAccent} />
                <div className={styles.proImage}>
                  <Image
                    src="/images/doctor.png"
                    alt="Foto da profissional"
                    width={320}
                    height={400}
                  />
                </div>
              </div>

              <div>
                <p className={styles.proLabel}>Especialista Responsável</p>
                {/* ⬇ Trocar pelo nome real da profissional */}
                <h2 className={styles.proName}>Dra. Nome da Profissional</h2>

                <p className={styles.proText}>
                  Fisioterapeuta com especialização em Reabilitação
                  Neuro-Pediátrica, dedicando sua carreira ao estudo do
                  desenvolvimento infantil. Sua conduta terapêutica alia ciência
                  e uma paixão genuína por transformar a vida de pequenos
                  pacientes e suas famílias.
                </p>

                <p className={styles.proText}>
                  Em constante atualização, busca trazer as técnicas mais
                  avançadas e menos invasivas para o consultório, sempre
                  priorizando o conforto e o ritmo natural de cada criança.
                </p>

                <div className={styles.proStats}>
                  <div className={`${styles.statBox} ${styles.statSage}`}>
                    <span className={styles.statNumber}>
                      <Award size={20} style={{ display: "inline", marginRight: 4 }} />
                      CREFITO
                    </span>
                    <span className={styles.statLabel}>Registro Ativo</span>
                  </div>
                  <div className={`${styles.statBox} ${styles.statBlush}`}>
                    <span className={styles.statNumber}>
                      <Heart size={20} style={{ display: "inline", marginRight: 4 }} />
                      Neuro
                    </span>
                    <span className={styles.statLabel}>Especialização</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            LOCALIZAÇÃO
            ════════════════════════════════════════════ */}
        <section id="localizacao" className={styles.location}>
          <div className={styles.locationInner}>
            <div className={styles.mapWrapper}>
              {/* Trocar pela imagem real do mapa ou iframe do Google Maps */}
              <Image
                src="/images/map.png"
                alt="Mapa de localização"
                width={600}
                height={500}
                className={styles.mapImg}
              />
            </div>

            <div className={styles.contactCard}>
              <h2 className={styles.contactTitle}>Onde nos Encontrar</h2>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Endereço</span>
                    {/* ⬇ Trocar pelo endereço real */}
                    <p className={styles.contactValue}>
                      Endereço pendente — a ser atualizado
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>E-mail</span>
                    {/* ⬇ Trocar pelo email real */}
                    <p className={styles.contactValue}>
                      contato@exemplo.com.br
                    </p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Telefone</span>
                    {/* ⬇ Trocar pelo telefone real */}
                    <p className={styles.contactValue}>(00) 00000-0000</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Horário</span>
                    <p className={styles.contactValue}>
                      Seg a Sex · 8h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.contactCta}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btnWhatsapp"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <WhatsAppIcon size={18} />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.logoText}>
                NeuroFisio<span>Infantil</span>
              </span>
              <p>
                Fisioterapia neurológica pediátrica com carinho e ciência.
                Cuidado gentil para o potencial de cada criança.
              </p>
            </div>

            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <h4>Fale Conosco</h4>
                <ul>
                  <li>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon size={16} /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram size={16} /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contato@exemplo.com.br">
                      <Mail size={16} /> E-mail
                    </a>
                  </li>
                  <li>
                    <a href="tel:+5500000000000">
                      <Phone size={16} /> Telefone
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <h4>Navegação</h4>
                <ul>
                  <li><a href="#especialidades">Especialidades</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#profissional">Profissional</a></li>
                  <li><a href="#localizacao">Localização</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()} NeuroFisio Infantil. Todos os
              direitos reservados.
            </p>
            <div className={styles.footerSocials}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Botão Flutuante do WhatsApp ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
