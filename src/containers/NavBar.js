"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.jpg";
import styles from "../styles/NavBar.module.css";
// import { UserContext } from '@/UserContext.js';
import { UserContext } from "../UserContext";
import RootLayout from "../app/layout";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const menuRef = useRef(null);

  // fetch
  // const [username, setUsername] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const menuBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleLinkClick = () => {
    setBurgerOpen(false); // Close the menu when a link is clicked
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setBurgerOpen(false); // Close the menu when clicking outside
    }
  };

  // to hidden menu nav
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //
  // useEffect(() => {
  //     const response = UseFetch('http://localhost:4000/profile', {
  //         credentials: 'include',
  //     }).then(response => {
  //         response.json().then(userInfo => {
  //             setUserInfo(userInfo);
  //         })
  //     })
  // },)

  // function logout() {
  //   fetch("http://localhost:4000/logout", {
  //     credentials: "include",
  //     method: "POST",
  //   });
  //   // setUsername(null);
  //   setUserInfo(null);
  // }

  // const username = userInfo?.username;

  return (
    <main className={styles.container} ref={menuRef}>
      <Link href="/">
        <div className={styles["container__principal"]}>
          <Image
            className={`${styles["enlaces__logo"]} ${"cursor-pointer"}`}
            alt="Logo de empresa"
            src={logo}
            width={50}
            height={50}
            as="image"
            title="Ir a inicio"
          />
        </div>
      </Link>

      <div className={styles.circle} onClick={menuBurger}>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <menu
        className={`${styles["enlaces__menu"]} ${
          burgerOpen ? styles.open : styles.closed
        }`}
      >
        <Link href="/" onClick={handleLinkClick}>
          Inicio
        </Link>

        {/* <Link href="/blog" onClick={handleLinkClick}>
          Blog
        </Link> */}

        <Link href="/perfil" onClick={handleLinkClick}>
          Sobre mí
        </Link>
      </menu>
    </main>
  );
};

export default NavBar;
