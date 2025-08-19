"use client";

import React, { useState } from "react";
import Image from "next/image";
// images doc
import styles from "../styles/Home.module.scss";
import Aside from "../components/Aside.jsx";
import EspecialidadesMedicas from "../components/EspecialidadesMedicas.jsx";
import PerfilMedico from "../components/PerfilMedico.jsx";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.jsx";

import d1 from "/public/images/doctor/1.png";
import d2 from "/public/images/doctor/2.png";
import d3 from "/public/images/doctor/3.png";

export const metadata = {
  title:
    "Dr. Alirio Solarte España - Cirujano General | Laparoscopia y Endoscopia",
  description:
    "Especialista en Cirugía General, Laparoscópica y Endoscopia Digestiva en Sibundoy, Putumayo. Más de 15 años de experiencia en procedimientos mínimamente invasivos. Consultas presenciales y virtuales.",
  keywords:
    "cirugía general, laparoscopia, endoscopia, colecistectomía, hernioplastia, apendicectomía, cirujano Putumayo, Sibundoy, procedimientos mínimamente invasivos",
  image:
    "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Flogo_circular.jpeg?alt=media&token=67019e7b-b635-4507-b1fb-70c8b9aecbef",
  url: "https://julianesp.github.io/ase/",
};

const Home = () => {
  const imagePath = [d1, d2, d3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePath.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagePath.length - 1 ? 0 : prevIndex + 1,
    );
  };

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
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dr. Alirio Solarte España</h1>
            <p className={styles.heroSubtitle}>
              Cirujano General Especializado
            </p>
            <p className={styles.heroDescription}>
              Más de 15 años de experiencia en cirugía laparoscópica y
              endoscopia digestiva
            </p>
            <div className={styles.heroButtons}>
              <a href="#perfil-medico" className={styles.btnPrimary}>
                Conocer al Doctor
              </a>
              <a href="tel:+573174503604" className={styles.btnSecondary}>
                Agendar Cita
              </a>
            </div>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.imageSlider}>
              <Image
                src={imagePath[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1} del Dr. Alirio Solarte`}
                className={styles.heroImage}
                width={400}
                height={400}
              />
              <div className={styles.sliderControls}>
                <button
                  onClick={goToPreviousSlide}
                  className={styles.sliderBtn}
                >
                  &#8249;
                </button>
                <div className={styles.sliderDots}>
                  {imagePath.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`${styles.dot} ${
                        index === currentImageIndex ? styles.activeDot : ""
                      }`}
                    />
                  ))}
                </div>
                <button onClick={goToNextSlide} className={styles.sliderBtn}>
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Perfil Médico Profesional */}
      <PerfilMedico />

      {/* Especialidades Médicas Detalladas */}
      <EspecialidadesMedicas />

      {/* Preguntas Frecuentes */}
      <PreguntasFrecuentes />

      <article className={styles.aside}>
        <h1>Videos Educativos - Facebook</h1>
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
        <h1>Casos Clínicos - Instagram</h1>
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
    </div>
  );
};

export default Home;
