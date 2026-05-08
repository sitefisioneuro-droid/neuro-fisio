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
                Experiência clínica em Torcicolo Muscular, Assimetria Craniana e
                Atraso no Desenvolvimento Motor. Transformo o brincar em
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
                Aqui, ofereço mais que fisioterapia...
              </h2>

              <p className={styles.aboutText}>
                Acredito que cada pequeno passo é uma grande conquista. Minha
                abordagem é centrada na criança e na família, proporcionando um
                cuidado acolhedor, respeitoso e individualizado em um ambiente
                pensado para que todos se sintam seguros e acolhidos.
              </p>

              <hr className={styles.aboutDivider} />

              <p className={styles.aboutText}>
                Combino ciência, experiência clínica e delicadeza no cuidado
                infantil para estimular o desenvolvimento motor do bebê,
                prevenir complicações e apoiar cada família em sua jornada com
                confiança e tranquilidade.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            ESPECIALIDADES
            ════════════════════════════════════════════ */}
        <section id="especialidades" className={styles.specialties}>
          <div className={styles.specialtiesInner}>
            <h2 className={styles.sectionTitle}>Área de Atuação</h2>
            <p className={styles.sectionSubtitle}>
              Atendimento especializado para bebês e crianças com atraso no
              desenvolvimento motor, torcicolo muscular e assimetrias
              cranianas, unindo acolhimento, intervenção precoce e prática
              baseada em evidências.
            </p>

            <div className={styles.specialtiesGrid}>
              {/* Card 1 — Torcicolo */}
              <div className={`${styles.specialtyCard} ${styles.cardSage}`}>
                <div className={`${styles.iconCircle} ${styles.iconSage}`}>
                  <Baby size={28} />
                </div>
                <h3 className={styles.cardTitle}>Torcicolo Muscular</h3>
                <p className={styles.cardText}>
                  Tratamento precoce do torcicolo muscular, promovendo melhora
                  do alinhamento postural, da mobilidade cervical e do
                  desenvolvimento motor do bebê de forma individualizada e
                  acolhedora.
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
                  Atendimento voltado para prevenção e tratamento da assimetria
                  craniana, com orientações de posicionamento e estímulos
                  específicos que favorecem a simetria craniana e o
                  desenvolvimento do bebê.
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
                  Atendimento individualizado para crianças com atraso do
                  desenvolvimento motor, promovendo aquisição de habilidades
                  motoras, funcionalidade e maior participação nas atividades
                  do dia a dia.
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
                    src="/images/profissional.jpeg"
                    alt="Foto de Ana Cássia Siqueira da Cunha"
                    width={320}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div>
                <p className={styles.proLabel}>Sobre mim</p>
                <h2 className={styles.proName}>Ana Cássia Siqueira da Cunha</h2>

                <p className={styles.proText}>
                  Sou Ana Cássia Siqueira da Cunha, fisioterapeuta neurofuncional
                  com atuação em pediatria desde 1998. Minha prática clínica é
                  voltada principalmente para bebês e crianças com atraso do
                  desenvolvimento, torcicolo muscular e assimetrias cranianas,
                  sempre com um olhar centrado na criança e na família.
                </p>

                <p className={styles.proText}>
                  Ao longo da minha trajetória, busco unir experiência clínica,
                  atualização científica e atendimento acolhedor, respeitando o
                  desenvolvimento e o ritmo de cada criança. Sou formada pela
                  Faculdade de Ciências Médicas de Minas Gerais (1997), com
                  pós-graduação em Neurologia pela UFMG (2001) e mestrado em
                  Bioengenharia pela UNIVAP (2008).
                </p>

                <p className={styles.proText}>
                  Além da atuação clínica, também atuo na docência desde 2001,
                  contribuindo para a formação de novos profissionais na área da
                  fisioterapia. Estou em constante atualização, realizando
                  cursos e aperfeiçoamentos voltados às abordagens mais atuais e
                  baseadas em evidências científicas, buscando oferecer um
                  tratamento individualizado, humanizado e alinhado às
                  necessidades de cada criança e sua família.
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
                    <span className={styles.statLabel}>Experiência Clínica</span>
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
              <h2 className={styles.contactTitle}>Onde me Encontrar</h2>
              <p className={styles.contactSubtitle}>
                Meu foco principal é o <strong>atendimento domiciliar</strong>, levando o cuidado até o conforto do seu lar. Caso resida em locais mais distantes, também ofereço a opção de atendimento em consultório.
              </p>

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
