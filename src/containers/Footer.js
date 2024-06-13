"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import face from "../../public/assets/redes/facebook.png";
import ins from "../../public/assets/redes/instagram.png";
import tik from "../../public/assets/redes/tiktok.png";
import wha from "../../public/assets/redes/whatsapp.png";
import map from "../../public/images/map.png";
import arrow from "../../public/next.png";
import phone from "../../public/phone.png";
import call from "../../public/call.png";
import styles from "../styles/Footer.module.css";

const Contacto = () => {
  const [menuOption, setMenuOptions] = useState(false);

  const switchOptions = () => {
    setMenuOptions(!menuOption);
  };

  return (
    <main className={styles.footer}>
      <section className={styles.flecha} onClick={switchOptions}>
        <Image alt="Links to navigation" src={arrow} priority />
      </section>
      <section className={styles.llamar}>
        <a href="tel:+573152523498">
          <Image alt="Contáctame" src={call} priority></Image>
        </a>
      </section>

      <section className={styles.description}>
        <p>Servicio de cirugía general</p>
        <p>Sibundoy - Putumayo</p>
      </section>

      <section>
        <h3>Procedimientos</h3>
      </section>

      <section className={styles.ubicacion}>
        <div className={styles.call}>
          Llámame:
          <a href="tel:+3174503604">
            <Image src={phone} alt="Imagen de teléfono" />
          </a>
        </div>
      </section>

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

      <div className={styles.externo}>
        <a
          href="https://www.flaticon.es/iconos-gratis/facebook"
          title="facebook iconos"
          target="_blank"
          rel="noreferrer"
        >
          Iconos creados por Freepik - Flaticon
        </a>
      </div>
    </main>
  );
};

export default Contacto;
