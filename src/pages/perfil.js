import React, { useState } from "react";
import RootLayout from "../app/layout";
import Image from "next/image";

import styles from "../styles/Perfil.module.css";

const Profile = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage1, setShowImage1] = useState(false);

  const toggleImage1 = () => {
    setShowImage1(!showImage1);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const closeImage = () => {
    setShowImage(false);
  };

  const closeImage2 = () => {
    setShowImage1(false);
  };

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Fdoctor.jpg?alt=media&token=17518223-afde-4b6d-9840-f78aef96ded7",
      alt: "Médico cirujano",
    },
  ];

  return (
    <RootLayout>
      <main className={styles.dev}>
        <section className={styles.description}>
          <p>
            <span>Dr ALIRIO,</span>
            <span>CIRUJANO LAPAROSCOPISTA</span>
            <span>CIRUGIA PLASTICA</span>
          </p>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
            />
          ))}
          {/* <Image className={styles.me} alt="Médico cirujano" src={doctor} /> */}
        </section>
        <section className={styles.study}>
          <h2>Descripción profesional</h2>
          <div className={styles.study__container}>
            <article className={styles["study--areas"]}>
              {/* {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                />
              ))} */}
              <p id="titulo">Estudio 1</p>
              <button className={styles["image-button"]} onClick={toggleImage}>
                Ver
              </button>
              {showImage && (
                <div className="image-modal">
                  {/* <Image src={tecni} alt="Imagen" /> */}
                  <button
                    className={styles["image-button--cerrar"]}
                    onClick={closeImage}
                  >
                    X
                  </button>
                </div>
              )}
            </article>
            <article className={styles["study--areas"]}>
              <p id="titulo">Estudio 2</p>
              <button className={styles["image-button"]} onClick={toggleImage1}>
                Ver
              </button>
              {showImage1 && (
                <div className="image-modal">
                  {/* <Image src={tecno} alt="Imagen" /> */}
                  <button
                    className={styles["image-button--cerrar"]}
                    onClick={closeImage2}
                  >
                    X
                  </button>
                </div>
              )}
            </article>
          </div>
        </section>
      </main>
    </RootLayout>
  );
};

export default Profile;
