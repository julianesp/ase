import { useState } from 'react';
import styles from '@/styles/ImageSlider.module.css'
import Image from 'next/image';
import left from '../../public/left.png'
import right from '../../public/right.png'

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
                <button onClick={goToPreviousSlide} className={styles.left}>
                    <Image
                        alt='Arrow left'
                        src={left}
                    />
                </button>

                <button onClick={goToNextSlide} className={styles.right}>
                    <Image
                        alt='Arrow left'
                        src={right}
                    />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
