"use client";

import React, { useContext } from "react";
import Head from "next/head";
// import Layout from "../components/Layout.js";
import Image from "next/image.js";
// import Slider from "../containers/Slider.js";
// images doc
import d1 from "/public/images/doctor/1.png";
import d2 from "/public/images/doctor/2.png";
import d3 from "/public/images/doctor/3.png";

// images cirugias
import c1 from "/public/images/cirugias/cirugia_vesicula.png";
import c2 from "/public/images/cirugias/colonoscopia.png";
import c3 from "/public/images/cirugias/lapa_vesicula.png";
import c4 from "/public/images/services/cirugia_laparoscopia_1.jpg";
import c5 from "/public/images/services/colecistectomia.jpg";
import c6 from "/public/images/services/patologias.jpg";
import c7 from "/public/images/services/colonoscopia.jpg";

import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
import Procedimientos from "../containers/PresentacionProcedimientos.jsx";
import Aside from "../components/Aside.jsx";

import Border from "@/components/border/Border.jsx";
import VisorImages from "../components/VisorImages.js";

import Link from "next/link";

export const metadata = {
  title: "Alirio Solarte",
  description: "Servicio de cirugía general",
  image:
    "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Flogo_circular.jpeg?alt=media&token=67019e7b-b635-4507-b1fb-70c8b9aecbef",
  url: "https://julianesp.github.io/ase/",
};

const Home = () => {
  const imagePath = [d1, d2, d3];

  const asideItems = [
    {
      title: "Hernias",
      content: "Explicando diferencias entre sus tipos",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fcirugias%2Fhernia.jpg?alt=media&token=ef907b8c-2f95-405c-88ca-bda3dd5de3bf",
      links: [
        {
          text: "Ver video",
          url: "https://www.facebook.com/share/r/jZ9eKTKxL7UqyWZt/",
        },
      ],
    },
    {
      title: "Laparoscopia",
      content: "Procedimiento durante la cirugía",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fcirugias%2Flaparoscopia.jpg?alt=media&token=c61c39d9-7d7c-445c-974d-8203322d7280",
      links: [
        {
          text: "Ver video",
          url: "https://www.facebook.com/ALIRIO.SOLARTE/videos/896402830951345",
        },
      ],
    },
  ];

  const instrumentos = [
    {
      title: "Hernias",
      content: "Explicando diferencias entre sus tipos",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fcirugias%2Fhernia.jpg?alt=media&token=ef907b8c-2f95-405c-88ca-bda3dd5de3bf",
      links: [
        {
          text: "Ver video",
          url: "https://www.facebook.com/share/r/jZ9eKTKxL7UqyWZt/",
        },
      ],
    },
    {
      title: "Laparoscopia",
      content: "Procedimiento durante la cirugía",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fcirugias%2Flaparoscopia.jpg?alt=media&token=c61c39d9-7d7c-445c-974d-8203322d7280",
      links: [
        {
          text: "Ver video",
          url: "https://www.facebook.com/ALIRIO.SOLARTE/videos/896402830951345",
        },
      ],
    },
  ];

  const instagramItems = [
    {
      title: "Escleroterapia",
      content: "Procedimiento médico utilizado para tratar venas varicosas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fescleroterapia.jpg?alt=media&token=4ddaa317-9396-4e55-906c-8b6187cb3652",
      links: [
        {
          text: "Ver video",
          url: "https://www.instagram.com/p/Cxs7JTbuRKW/",
        },
      ],
    },
    {
      title: "Colecistectomía",
      content: "Cirugía para extirpar la vesícula biliar",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fcolecistectomia.jpg?alt=media&token=9e7a4f94-861e-4f3f-b9ad-65b59d97888e",
      links: [
        {
          text: "Ver video",
          url: "https://www.instagram.com/p/CwTSX_OIho-/",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <article className={`${styles.presentation}`}>
        <ImageSlider imagePaths={imagePath} enableTransition={true} />
      </article>

      <article className={styles.tratamientos}>
        <div className={styles.procedimientos}>
          <h3>Procedimientos</h3>
          <ul>
            <li>Laparoscopia</li>
            <li>Endoscopia</li>
            <li>Hígado graso</li>
            <li>Bichectomía</li>
            <li>Hernioplastia umbilical</li>
          </ul>
        </div>

        {/* <button>Ver más</button> */}
      </article>

      {/* <Border /> */}

      <article className={styles.aside}>
        <h1>Facebook</h1>
        <aside>
          {asideItems.map((item, index) => (
            <Aside
              key={index}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              links={item.links}
            />
          ))}
        </aside>
      </article>

      <article className={styles.instagram}>
        <h1>Instagram</h1>
        <aside>
          {instagramItems.map((item, index) => (
            <Aside
              key={index}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              links={item.links}
            />
          ))}
        </aside>
      </article>

      <article className={styles.horario}>
        <ImageSlider imagePaths={imagePath} enableTransition={false} />
      </article>

      <article className={styles.notices}>
        <h1>Instrumentos</h1>
        <Link href={`/addProduct`}>Crear instrumentos</Link>
        {`/products`}
      </article>
    </div>
  );
};

export default Home;
