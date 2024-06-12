"use client"

import React, { useContext } from "react";
import Head from "next/head";
import Layout from "../components/Layout.js";
import Image from "next/image.js";
import Slider from "../containers/Slider.js";
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
import imagesInfo from "../../data/images.json";
import styles from "../styles/Home.module.scss";
import ImageSlider from "../containers/ImageSlider.js";
import { PublicacionesContext } from "../context/PublicacionesContext.js";

const Home = () => {
  const { publicaciones } = useContext(PublicacionesContext) || { publicaciones: [] };
  const imagePath = [d1, d2, d3];
  const cirugias = [c1, c2, c3, c4, c5, c6, c7];

  return (
    
    // <main>
   <div className={styles.container}>
        <section className={styles.presentation}>
          <ImageSlider imagePaths={imagePath} enableTransition={true} />
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

            <button>Ver más</button>
          </div>
        </section>

        <section className={styles.horario}>
          {/* <h2>Novedades</h2>
          <p>Publicación de noticias publicadas de parte del cirujano</p> */}

          <ImageSlider imagePaths={cirugias} enableTransition={false} />
        </section>

        <section className={styles.horario}>
          <h2>Enlaces importantes</h2>
          <p>
            Noticias o temas importantes que el médico cirujano considera para
            que sus pacientes lean
          </p>
          <p>Pueden ser links externos o publicación del mismo doctor</p>

          <div>
            {publicaciones.map((publicacion, index) => (
              <div key={index}>
                <h2>{publicacion.titulo}</h2>
                <p>{publicacion.contenido}</p>
              </div>
            ))}
          </div>
        </section>
      </div>      
    
  );
};

export default Home;
