"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logo.jpg";
import styles from "../styles/NavBar.module.scss";
import { UserContext } from "../UserContext";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef(null);
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    setIsClient(true); // Marcar que estamos en el cliente
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const menuBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleLinkClick = () => {
    setBurgerOpen(false); // Cerrar el menú cuando se hace clic en un enlace
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setBurgerOpen(false); // Cerrar el menú al hacer clic fuera
    }
  };

  return (
    <main className={styles.container} ref={menuRef}>
      <div className={styles["container__principal"]}>
        <Link href="/">
          <Image
            className={`${styles["enlaces__logo"]} cursor-pointer`}
            alt="Logo de empresa"
            src={logo}
            width={50}
            height={50}
            as="image"
            title="Ir a inicio"
          />
        </Link>
      </div>

      <div className={styles.circle} onClick={menuBurger}>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isClient && (
        <menu
          className={`${styles["enlaces__menu"]} ${
            burgerOpen ? styles.open : styles.closed
          }`}
        >
          <Link href="/" onClick={handleLinkClick}>
            Inicio
          </Link>

          <Link href={`/users/create`} onClick={handleLinkClick}>
            Accesorios
          </Link>

          <Link href="/Perfil" onClick={handleLinkClick}>
            Sobre mí
          </Link>
        </menu>
      )}
    </main>
  );
};

export default NavBar;
