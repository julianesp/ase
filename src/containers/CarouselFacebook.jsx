"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import left from "../../public/left.png";
import right from "../../public/right.png";
import styles from "../styles/CarouselFacebook.scss";
// import styles from "../styles/ImageSlider.module.scss";
import imageData from "../../data/imageSlider"; // Importa el archivo de datos

const Carousel = ({ enableTransition = true }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  useEffect(() => {
    let interval;
    if (enableTransition) {
      interval = setInterval(goToNextSlide, 5000);
    }

    return () => clearInterval(interval);
  }, [enableTransition, goToNextSlide]);

  const currentImage = imageData[currentImageIndex];

  return (
    <div className={styles.image}>
      <Image src={currentImage.src} alt="Slide" width={300} height={200} />

      <div className={styles.buttonContainer}>
        <button onClick={goToPreviousSlide} className={styles.left}>
          <Image alt="Arrow left" src={left} width={20} height={20} />
        </button>

        <button onClick={goToNextSlide} className={styles.right}>
          <Image alt="Arrow right" src={right} width={20} height={20} />
        </button>
      </div>

      <div className={styles.overlayButton}>
        <a href={currentImage.url} target="_blank" rel="noopener noreferrer">
          Abrir enlace
        </a>
      </div>
    </div>
  );
};

export default Carousel;
