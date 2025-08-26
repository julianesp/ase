"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import face from "../../public/assets/redes/facebook.png";
import ins from "../../public/assets/redes/instagram.png";
import tik from "../../public/assets/redes/tiktok.png";
import wha from "../../public/assets/redes/whatsapp.png";
import call from "../../public/call.png";
import logo from "../../public/logo.jpg";
import styles from "../styles/Footer.module.scss";

const Contacto = () => {
  const [menuOption, setMenuOptions] = useState(false);
  const menuRef = useRef(null);
  const flechaRef = useRef(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const pulseIntervalRef = useRef(null);

  const switchOptions = () => {
    setMenuOptions(!menuOption);
  };

  // Detectar interacción del usuario
  useEffect(() => {
    let scrollTimeout;

    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        // Iniciar pulso después de 3 segundos de la primera interacción
        setTimeout(() => {
          setShowPulse(true);
          // Configurar pulso cada 30 segundos
          pulseIntervalRef.current = setInterval(() => {
            setShowPulse(true);
            // Quitar el pulso después de 2 segundos
            setTimeout(() => setShowPulse(false), 2000);
          }, 30000);
        }, 3000);
      }
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleUserInteraction();
      }, 150);
    };

    const handleClick = () => {
      handleUserInteraction();
    };

    const handleKeyDown = () => {
      handleUserInteraction();
    };

    // Agregar listeners para detectar interacción
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleClick);
      if (pulseIntervalRef.current) {
        clearInterval(pulseIntervalRef.current);
      }
      clearTimeout(scrollTimeout);
    };
  }, [hasUserInteracted]);

  // Función para cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        flechaRef.current &&
        !flechaRef.current.contains(event.target)
      ) {
        setMenuOptions(false); // Oculta las redes sociales si haces clic fuera
      }
    };

    // Detectar clics en toda la ventana
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Limpiar eventos al desmontar el componente
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <main className={styles.footer}>
      <article
        ref={flechaRef}
        className={`${styles.flecha} ${showPulse ? styles.heartPulse : ""}`}
        onClick={switchOptions}
      >
        <div className={styles.socialIcon}>
          <Image
            src="https://0dwas2ied3dcs14f.public.blob.vercel-storage.com/icons/arrow.png"
            alt="Redes Sociales"
            width={30}
            height={30}
            className={styles.socialIconImage}
          />
          {/* <span className={styles.socialText}>Redes</span> */}
        </div>
      </article>

      <article
        className={`${styles.llamar} ${showPulse ? styles.heartPulse : ""}`}
      >
        <Link href="tel:+573138627818">
          <Image alt="Contáctame" src={call} priority />
        </Link>
      </article>

      <article className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </article>

      <article className={styles.description}>
        <h3>Cirugía General y Especializada</h3>
        <p>Procedimientos Laparoscópicos • Endoscopia Digestiva</p>
        <p>Cirugía Mínimamente Invasiva</p>
      </article>

      <article className={styles.doctor}>
        <h2>Dr. Alirio Solarte España</h2>
        <p>Médico Cirujano General</p>
        <p>Especialista en Laparoscopia y Endoscopia</p>
        <div className={styles.location}>
          <p>📍 Sibundoy - Putumayo, Colombia</p>
        </div>
      </article>

      <article className={styles.credentials}>
        <h4>Registro Profesional</h4>
        <p>• Registro Médico Nacional</p>
        <p>• Especialización en Cirugía General</p>
        <p>• Certificación en Procedimientos Laparoscópicos</p>
        <p>• Entrenamiento en Endoscopia Digestiva</p>
      </article>

      <article className={styles.services}>
        <h4>Servicios Especializados</h4>
        <div className={styles.servicesList}>
          <p>✓ Colecistectomía Laparoscópica</p>
          <p>✓ Hernioplastia</p>
          <p>✓ Apendicectomía</p>
          <p>✓ Endoscopia Digestiva Alta</p>
          <p>✓ Colonoscopia</p>
          <p>✓ Biopsia Hepática</p>
          <p>✓ Cirugía de Vesícula</p>
          <p>✓ Tratamiento de Patologías Abdominales</p>
        </div>
      </article>

      <article className={styles.contact}>
        <h4>Información de Contacto</h4>
        <p>📞 Consultas: +57 313 862 7818</p>
        <p>📱 WhatsApp: +57 317 450 3604</p>
        <p>🏥 Consulta Privada y Hospitalaria</p>
        <p>⏰ Atención por Cita Previa</p>
      </article>

      <article className={styles.legal}>
        <h4>Información Legal</h4>
        <p>Este sitio web contiene información médica general y educativa.</p>
        <p>No reemplaza la consulta médica profesional personalizada.</p>
        <p>Consulte siempre con un profesional de la salud.</p>
        <p>© 2025 Dr. Alirio Solarte España. Todos los derechos reservados.</p>
      </article>

      <article
        ref={menuRef} // Referencia para el menú de redes sociales
        className={`${styles.redes} ${menuOption ? styles.open : styles.closed}`}
      >
        <ul>
          <li>
            <Link
              href="https://www.facebook.com/ALIRIO.SOLARTE"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image alt="Facebook" src={face} priority />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/dr_aliriosolarte/"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image alt="Instagram" src={ins} priority />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/573174503604"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image alt="Whatsapp" src={wha} priority />
            </Link>
          </li>
          <li className={styles.tiktok}>
            <Link
              href="https://www.tiktok.com/@cirugia_general?_t=ZS-8z1R7phsrYY&_r=1"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image alt="TikTok" src={tik} priority />
            </Link>
          </li>
        </ul>
      </article>

      {/* {isClient && (
        <div
          className={`${styles.redes} ${
            menuOption ? styles.open : styles.closed
          }`}
        >
          <ul>
            <li>
              <Link
                href="https://www.facebook.com/ALIRIO.SOLARTE"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <Image alt="Facebook" src={face} priority />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/alirio8308/"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <Image alt="Instagram" src={ins} priority />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/alirio8308/"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <Image alt="Whatsapp" src={wha} priority />
              </Link>
            </li>

            <li className={styles.tiktok}>
              <Link
                href="https://www.tiktok.com/@cirugia_general?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <Image alt="TikTok" src={tik} priority />
              </Link>
            </li>
          </ul>
        </div>
      )} */}

      <div className={styles.externo}>
        <Link
          href="https://www.flaticon.es/iconos-gratis/facebook"
          title="facebook iconos"
          target="_blank"
          rel="noreferrer"
        >
          Iconos creados por Freepik - Flaticon
        </Link>
      </div>
    </main>
  );
};

export default Contacto;
