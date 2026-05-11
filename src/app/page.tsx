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

/* ── Informações de Contato (Reais) ── */
const WHATSAPP_NUMBER = "5531999935571";
const EMAIL_ADDRESS = "anacassia.fisio@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/anacassiafisio?igsh=MWE3bmQ1NnVodHlpaA%3D%3D&utm_source=qr";
const PHONE_DISPLAY = "(31) 99993-5571";

const WHATSAPP_MSG = encodeURIComponent(
  "Olá Ana Cássia! Vi seu site e gostaria de agendar uma consulta de fisioterapia neurofuncional infantil."
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
              alt="NeuroFisio Infantil - Fisioterapia Pediátrica em Belo Horizonte"
              width={200}
              height={80}
              className={styles.logoImg}
              priority
              quality={75}
              sizes="(max-width: 768px) 150px, 200px"
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

          <div className={styles.headerActions}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.headerInstagram}
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>

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
                Fisioterapia Neurofuncional Infantil em{" "}
                <span className={styles.heroTitleHighlight}>
                  Belo Horizonte
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                Cuidado gentil e especializado para o desenvolvimento motor do
                seu filho. Experiência clínica em Torcicolo Muscular, Assimetria
                Craniana e Atraso no Desenvolvimento Motor.
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
                  alt="Consultório de fisioterapia pediátrica da Ana Cássia em Belo Horizonte"
                  width={500}
                  height={420}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
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
            <h2 className={styles.sectionTitle}>Áreas de Atuação</h2>
            <p className={styles.sectionSubtitle}>
              Atendimento especializado para bebês e crianças com atraso no
              desenvolvimento motor, torcicolo muscular e assimetrias
              cranianas, unindo acolhimento, intervenção precoce e prática
              baseada em evidências.
            </p>

            <div className={styles.specialtiesGrid}>
              {/* Card 1 — Torcicolo */}
              <div className={`${styles.specialtyCard} ${styles.cardSage}`}>
                <div className={styles.iconCircle}>
                  <Image 
                    src="/images/1.png" 
                    alt="Tratamento de Torcicolo Muscular Congênito em bebês" 
                    width={64} 
                    height={64} 
                    quality={75}
                    sizes="64px"
                  />
                </div>
                <h3 className={styles.cardTitle}>Torcicolo Muscular</h3>
                <p className={styles.cardText}>
                  Tratamento precoce do torcicolo muscular, promovendo melhora
                  do alinhamento postural, da mobilidade cervical e do
                  desenvolvimento motor do bebê de forma individualizada e
                  acolhedora.
                </p>
                <div className={styles.cardFooter}>
                  Reabilitação
                </div>
              </div>

              {/* Card 2 — Assimetria Craniana */}
              <div className={`${styles.specialtyCard} ${styles.cardBlush}`}>
                <div className={styles.iconCircle}>
                  <Image 
                    src="/images/assimetria.png" 
                    alt="Prevenção e tratamento de Assimetria Craniana em bebês" 
                    width={64} 
                    height={64} 
                    quality={75}
                    sizes="64px"
                  />
                </div>
                <h3 className={styles.cardTitle}>Assimetria Craniana</h3>
                <p className={styles.cardText}>
                  Atendimento voltado para prevenção e tratamento da assimetria
                  craniana, com orientações de posicionamento e estímulos
                  específicos que favorecem a simetria craniana e o
                  desenvolvimento do bebê.
                </p>
                <div className={styles.cardFooter}>
                  Reposicionamento
                </div>
              </div>

              {/* Card 3 — Atraso Motor */}
              <div className={`${styles.specialtyCard} ${styles.cardLavender}`}>
                <div className={styles.iconCircle}>
                  <Image 
                    src="/images/2.png" 
                    alt="Estímulo ao desenvolvimento motor infantil e reabilitação" 
                    width={64} 
                    height={64} 
                    quality={75}
                    sizes="64px"
                  />
                </div>
                <h3 className={styles.cardTitle}>Atraso no Desenvolvimento Motor</h3>
                <p className={styles.cardText}>
                  Atendimento individualizado para crianças com atraso do
                  desenvolvimento motor, promovendo aquisição de habilidades
                  motoras, funcionalidade e maior participação nas atividades
                  do dia a dia.
                </p>
                <div className={styles.cardFooter}>
                  Estimulação
                </div>
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
                    alt="Ana Cássia Siqueira da Cunha - Fisioterapeuta Neurofuncional Infantil em BH"
                    width={320}
                    height={400}
                    style={{ objectFit: "cover" }}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              </div>

              <div>
                <p className={styles.proLabel}>Sobre mim</p>
                <h2 className={styles.proName}>Ana Cássia Siqueira da Cunha</h2>

                <p className={styles.proText}>
                  Sou Ana Cássia Siqueira da Cunha, fisioterapeuta neurofuncional
                  com atuação em pediatria desde 1998. Atuo principalmente no
                  tratamento de bebês e crianças com atraso do desenvolvimento,
                  torcicolo muscular e assimetrias cranianas, com um cuidado
                  centrado na criança e na família.
                </p>

                <p className={styles.proText}>
                  Sou formada pela Faculdade de Ciências Médicas de Minas Gerais,
                  com pós-graduação em Neurologia pela UFMG e mestrado em
                  Bioengenharia pela UNIVAP. Também atuo na docência desde 2001,
                  contribuindo para a formação de novos profissionais.
                </p>

                <p className={styles.proText}>
                  Busco unir experiência clínica, atualização científica e
                  atendimento acolhedor, oferecendo um tratamento
                  individualizado, humanizado e baseado em evidências
                  científicas.
                </p>

                <p className={styles.proText}>
                  Se você busca um acompanhamento especializado e acolhedor para
                  sua criança, será um prazer fazer parte dessa trajetória.
                </p>


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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.071991077431!2d-43.95873230000001!3d-19.9213709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69741bd3cc4f9%3A0x8ea06e3faffc31e8!2sR.%20Jaceguai%2C%20208%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-073!5e0!3m2!1spt-BR!2sbr!4v1778333637167!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização"
                className={styles.mapImg}
              ></iframe>
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
                      Rua Jaceguai 208 - salas 1213/1214. Bairro Prado.
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
                      {EMAIL_ADDRESS}
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
                    <p className={styles.contactValue}>{PHONE_DISPLAY}</p>
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
              <Image
                src="/images/logo.jpg"
                alt="NeuroFisio Infantil - Logo Rodapé"
                width={180}
                height={72}
                className={styles.footerLogo}
                quality={75}
                sizes="180px"
              />
              <p>
                Fisioterapia neurofuncional pediátrica com carinho e ciência.
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
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram size={16} /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${EMAIL_ADDRESS}`}>
                      <Mail size={16} /> E-mail
                    </a>
                  </li>
                  <li>
                    <a href={`tel:+5531999935571`}>
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
              © {new Date().getFullYear()} Ana Cássia - fisioterapeuta neurofuncional. Todos os direitos reservados.
            </p>
            <div className={styles.footerSocials}>
              <a
                href={INSTAGRAM_URL}
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
