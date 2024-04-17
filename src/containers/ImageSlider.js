import { useState, useEffect } from 'react';
import Image from 'next/image';
import left from '../../public/left.png';
import right from '../../public/right.png';
import styles from '../styles/ImageSlider.module.css';

const ImageSlider = ({ imagePaths, enableTransition = true }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [canChangeImage, setCanChangeImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (canChangeImage) {
                goToNextSlide();
            }
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval); // Limpia el temporizador al desmontar el componente
    }, [currentImageIndex, canChangeImage]);

    const goToPreviousSlide = () => {
        if (canChangeImage) {
            setCurrentImageIndex(prevIndex =>
                prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
            );
            setCanChangeImage(false);
            setTimeout(() => setCanChangeImage(true), 3000); // Habilita el cambio después de 3 segundos
        }
    };

    const goToNextSlide = () => {
        if (canChangeImage) {
            setCurrentImageIndex(prevIndex =>
                prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
            );
            setCanChangeImage(false);
            setTimeout(() => setCanChangeImage(true), 3000); // Habilita el cambio después de 3 segundos
        }
    };

    const transitionStyle = enableTransition ? styles.transition : '';

    return (
        <div className={`${styles.image} ${transitionStyle}`}>
            <Image
                src={imagePaths[currentImageIndex]}
                alt="Slide"
                width={300} // Ajusta el ancho según tus necesidades
                height={200} // Ajusta la altura según tus necesidades
            />

            <div className={styles.buttonContainer}>
                <button onClick={goToPreviousSlide} className={styles.left}>
                    <Image
                        alt='Arrow left'
                        src={left}
                        width={20}
                        height={20}
                    />
                </button>

                <button onClick={goToNextSlide} className={styles.right}>
                    <Image
                        alt='Arrow left'
                        src={right}
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
