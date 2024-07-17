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
      <section className={`${styles.presentation}`}>
        <ImageSlider imagePaths={imagePath} enableTransition={true} />
      </section>

      <section className={styles.aside}>
        {/* <h1>Noticias</h1> */}
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
      </section>

      <section className={styles.tratamientos}>
        <div className={styles.area}>
          <h3>PROCEDIMIENTOS</h3>

          <ul>
            <li>Laparoscopia</li>
            <li>Endoscopia</li>
            <li>Hígado graso</li>
            <li>Bichectomía</li>
            <li>Hernioplastia umbilical</li>
          </ul>

          {/* <button>Ver más</button> */}
        </div>
      </section>

      <section className={styles.horario}>
        {/* <h2>Novedades</h2>
             <p>Publicación de noticias publicadas de parte del cirujano</p> */}

        <ImageSlider imagePaths={imagePath} enableTransition={false} />
      </section>

      <section className={styles.links}>
        {/* <div className={styles.links_facebook}>
          {links.map((link, index) => (
            <Facebook
              key={index}
              imageUrl={link.imageUrl}
              facebookUrl={link.facebookUrl}
            />
          ))}
        </div> */}

        {/* <ImageSlider imagePaths={cirugias} enableTransition={false}/> */}

        <Procedimientos imageData={imagePath} enableTransition={false} />
      </section>
    </div>
  );
};

export default Home;
