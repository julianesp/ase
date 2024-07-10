"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import face from "../../public/assets/redes/facebook.png";
import ins from "../../public/assets/redes/instagram.png";
import tik from "../../public/assets/redes/tiktok.png";
import wha from "../../public/assets/redes/whatsapp.png";
import arrow from "../../public/next.png";
import call from "../../public/call.png";
import styles from "../styles/Footer.module.css";

const Contacto = () => {
  const [menuOption, setMenuOptions] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Asegurarse de que el código se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const switchOptions = () => {
    setMenuOptions(!menuOption);
  };

  return (
    <main className={styles.footer}>
      <section className={styles.flecha} onClick={switchOptions}>
        <Image alt="Links to navigation" src={arrow} priority />
      </section>
      <section className={styles.llamar}>
        <Link href="tel:+573152523498">
          <Image alt="Contáctame" src={call} priority />
        </Link>
      </section>

      <section className={styles.description}>
        <p>Servicio de cirugía general</p>
        <p>Sibundoy - Putumayo</p>
      </section>

      <section>
        <h3>Procedimientos</h3>
      </section>

      {isClient && (
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
      )}

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
