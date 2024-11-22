"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import face from "../../public/assets/redes/facebook.png";
import ins from "../../public/assets/redes/instagram.png";
import tik from "../../public/assets/redes/tiktok.png";
import wha from "../../public/assets/redes/whatsapp.png";
import arrow from "../../public/next.png";
import call from "../../public/call.png";
import logo from "../../public/logo.jpg";
import styles from "../styles/Footer.module.scss";

const Contacto = () => {
  const [menuOption, setMenuOptions] = useState(false);
  const menuRef = useRef(null);
  // const [isClient, setIsClient] = useState(false);
  // const [animate, setAnimate] = useState(false);
  const flechaRef = useRef(null);

  const switchOptions = () => {
    setMenuOptions(!menuOption);
  };

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
        className={styles.flecha}
        onClick={switchOptions}
      >
        <Image alt="Links to navigation" src={arrow} priority />
      </article>

      <article className={styles.llamar}>
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
        <p>Servicio de cirugía general</p>
      </article>

      <article className={styles.doctor}>
        <p>Dr. Alirio Solarte España</p>
        <p>Médico cirujano</p>
        <p>Sibundoy - Putumayo</p>
      </article>

      <article
        ref={menuRef} // Referencia para el menú de redes sociales
        className={`${styles.redes} ${menuOption ? styles.open : styles.closed}`}
      >
        <ul>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=100085485673809"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image alt="Facebook" src={face} priority />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/alexriob/"
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
              href="https://www.tiktok.com/@julii1295?_t=8n2OQ52Q4aD&_r=1"
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
