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

import VisorImages from "../components/VisorImages.js";
// import imagesInfo from "../../data/images.json";
import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
// import { PublicacionesContext } from "../context/PublicacionesContext.js";
import Procedimientos from "../containers/PresentacionProcedimientos.jsx";
import Aside from "../components/Aside.jsx";
import imagenData from "../../data/imageSlider.js";
import Carousel from "@/containers/CarouselFacebook.jsx";

const Home = () => {
  // const { publicaciones } = useContext(PublicacionesContext) || {
  //   publicaciones: [],
  // };
  const imagePath = [d1, d2, d3];
  // const imagePath = [imagenData];
  const cirugias = [c1, c2, c3, c4, c5, c6, c7];
  // const cirugias = [imagenData];

  // aside content
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

  return (
    <div className={styles.container}>
      <article className={`${styles.presentation}`}>
        <ImageSlider imagePaths={imagePath} enableTransition={true} />
      </article>

      <article className={styles.tratamientos}>
        <h3>Procedimientos</h3>

        <ul>
          <li>Laparoscopia</li>
          <li>Endoscopia</li>
          <li>Hígado graso</li>
          <li>Bichectomía</li>
          <li>Hernioplastia umbilical</li>
        </ul>

        {/* <button>Ver más</button> */}
      </article>

      <article className={styles.aside}>
        <h1></h1>
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

      <article className={styles.facebook}>
        <h3>Publicaciones de redes sociales</h3>
      </article>

      <article className={styles.horario}>
        <ImageSlider imagePaths={imagePath} enableTransition={false} />
      </article>

      <article className={styles.links}>
        <Procedimientos imageData={imagePath} enableTransition={false} />
      </article>

      <article className="notices"></article>
    </div>
  );
};

export default Home;
