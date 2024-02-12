// components/ImageSlider.js
import { useState } from 'react';
import styles from '@/styles/ImageSlider.module.css'
import Image from 'next/image';

const ImageSlider = ({ imagePaths }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.image}>
            <Image src={imagePaths[currentImageIndex]} alt="Slide" />

            <div className={styles.buttonContainer}>
                <button onClick={goToPreviousSlide} className={styles.left}>Previous</button>
                <button onClick={goToNextSlide} className={styles.right}>Next</button>
            </div>
        </div>
    );
};

export default ImageSlider;
