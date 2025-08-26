"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// images doc
import styles from "../styles/Home.module.scss";
import Aside from "../components/Aside.jsx";
import EspecialidadesMedicas from "../components/EspecialidadesMedicas.jsx";
import PerfilMedico from "../components/PerfilMedico.jsx";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.jsx";

// URLs de imágenes en Vercel Blob Storage
const doctorImages = [
  "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/doctor/1.png",
  "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/doctor/2.png",
  "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/doctor/3.png",
];

export const metadata = {
  title:
    "Dr. Alirio Solarte España - Cirujano General | Laparoscopia y Endoscopia",
  description:
    "Especialista en Cirugía General, Laparoscópica y Endoscopia Digestiva en Sibundoy, Putumayo. Más de 15 años de experiencia en procedimientos mínimamente invasivos. Consultas presenciales y virtuales.",
  keywords:
    "cirugía general, laparoscopia, endoscopia, colecistectomía, hernioplastia, apendicectomía, cirujano Putumayo, Sibundoy, procedimientos mínimamente invasivos",
  image:
    "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/logo.jpg",
  url: "https://julianesp.github.io/ase/",
};

const Home = () => {
  const imagePath = doctorImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-avance del slider
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePath.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [isPlaying, imagePath.length]);

  const asideItems = [
    {
      title: "Hernias",
      content: "Explicando diferencias entre sus tipos",
      imageUrl:
        "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/services/hernioplastia.jpg",
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
        "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/laparoscopia_1.jpg",
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
        "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/services/escleroterapia.jpg",

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
        "https://ihlfsrfme90d2jjk.public.blob.vercel-storage.com/images/services/colecistectomia.jpg",

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
          {/* <div className={styles.heroContent}>
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
          </div> */}

          <div className={styles.heroImages}>
            <div className={styles.imageSlider}>
              <div className={styles.playPauseControls}>
                <button
                  onClick={togglePlayPause}
                  className={styles.playPauseBtn}
                  title={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </button>
              </div>
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

      <PerfilMedico />

      <EspecialidadesMedicas />

      <PreguntasFrecuentes />
    </div>
  );
};

export default Home;
