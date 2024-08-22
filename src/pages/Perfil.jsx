import React, { useState } from "react";
import Image from "next/image";
import RootLayout from "../app/layout";
import doctor from "../../public/images/doctor.jpg";
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
      <div className={styles.dev}>
        <div className={styles.description}>
          <div>
            <span>Dr ALIRIO,</span>
            <span>CIRUJANO LAPAROSCOPISTA</span>
            <span>CIRUGIA PLASTICA</span>
          </div>

          <Image className={styles.me} src={doctor} alt="Médico cirujano" />
        </div>
        <div className={styles.study}>
          <h2>Descripción profesional</h2>
          {/* <article className={styles.study__container}>
          <div className={styles["study--areas"]}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
              />
            ))}
            <p id="titulo">Estudio 1</p>
            <button className={styles["image-button"]} onClick={toggleImage}>
              Ver
            </button>
            {showImage && (
              <div className="image-modal">
                <Image src={tecni} alt="Imagen" />
                <button
                  className={styles["image-button--cerrar"]}
                  onClick={closeImage}
                >
                  X
                </button>
              </div>
            )}
          </div>

          <div className={styles["study--areas"]}>
            <p id="titulo">Estudio 2</p>
            <button className={styles["image-button"]} onClick={toggleImage1}>
              Ver
            </button>
            {showImage1 && (
              <div className="image-modal">
                <Image src={tecno} alt="Imagen" />
                <button
                  className={styles["image-button--cerrar"]}
                  onClick={closeImage2}
                >
                  X
                </button>
              </div>
            )}
          </div>
        </article> */}
        </div>
      </div>
    </RootLayout>
  );
};

export default Profile;
