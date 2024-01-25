import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import left from '../../public/aback.svg';
import leftRight from '../../public/aback.svg';
import styles from '@/styles/sass/VisorImages.module.scss';

const VisorImages = ({ images, automaticTransition }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const timerRef = useRef(null); // Utilizar useRef para almacenar el timer

    useEffect(() => {
        const changeImageAutomatically = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        if (automaticTransition) {
            timerRef.current = setInterval(changeImageAutomatically, 4000);
        }

        return () => clearInterval(timerRef.current);
    }, [currentIndex, images, automaticTransition]);

    const showImage = (index) => {
        clearInterval(timerRef.current);
        setCurrentIndex(index);
    };

    const changeImage = (nextIndex) => {
        clearInterval(timerRef.current);
        setCurrentIndex(nextIndex);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        changeImage(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        changeImage(prevIndex);
    };

    return (
        <div className={`${styles.slider} ${automaticTransition ? styles.withTransition : ''}`}>
            <div id="carousel" ref={carouselRef}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`image ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => showImage(index)}
                    >
                        <Image
                            className={styles.sizeImg}
                            src={image.src}
                            priority={index === currentIndex}
                            alt={image.alt}
                            width={400}
                            height={300}
                        />
                    </div>
                ))}
            </div>

            <div id="arrows">
                <button id="prevBtn" onClick={prevImage}>
                    <Image
                        src={left}
                        priority={false}
                        alt="Flecha izquierda"
                    />
                </button>

                <button id="nextBtn" onClick={nextImage}>
                    <Image
                        src={leftRight}
                        priority={false}
                        alt="Flecha derecha"
                    />
                </button>
            </div>
        </div>
    );
};

VisorImages.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
    automaticTransition: PropTypes.bool,
};

export default VisorImages;

// import React, { useEffect, useState, useRef } from 'react'
// import Image from 'next/image'
// import PropTypes from 'prop-types'
// import left from '../../public/aback.svg'
// import leftRight from '../../public/aback.svg'
// import styles from '@/styles/sass/VisorImages.module.scss'

// const VisorImages = ({ images, automaticTransition }) => {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef(null);
    

//     let timer;
//     useEffect(() => {

//         const changeImageAutomatically = () => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         };

//         if (automaticTransition) {
//             timer = setInterval(changeImageAutomatically, 4000);
//         }

//         return () => clearInterval(timer);
//     }, [currentIndex, images, automaticTransition]);

//     const showImage = (index) => {
//         clearInterval(timer);
//         setCurrentIndex(index);
//     };

//     const changeImage = (nextIndex) => {
//         clearInterval(timer);
//         setCurrentIndex(nextIndex);
//     };

//     const nextImage = () => {
//         const nextIndex = (currentIndex + 1) % images.length;
//         changeImage(nextIndex);
//     };

//     const prevImage = () => {
//         const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//         changeImage(prevIndex);
//     };


//     return (
//         <div className={`${styles.slider} ${automaticTransition ? styles.withTransition : ''}`}>
//             <div
//                 id="carousel"
//                 ref={carouselRef}
//             >
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`image ${index === currentIndex ? 'active' : ''}`}
//                         onClick={() => showImage(index)}
//                     >

//                         <Image
//                             className={styles.sizeImg}
//                             src={image.src}
//                             priority={index === currentIndex}
//                             alt={image.alt}
//                             width={400}
//                             height={300}
//                         />
//                     </div>
//                 ))}


//             </div>

//             <div id="arrows">
//                 <button id="prevBtn" onClick={prevImage}>
//                     <Image
//                         src={left}
//                         priority={false}
//                         alt="Flecha izquierda"
//                         as="image"
//                     />
//                 </button>

//                 <button id="nextBtn" onClick={nextImage}>
//                     <Image
//                         src={leftRight}
//                         priority={false}
//                         alt="Flecha derecha"
//                         as="image"
//                     />                    </button>
//             </div>

//         </div>
//     )
// }


// VisorImages.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             alt: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     automaticTransition: PropTypes.bool,
// };

// export default VisorImages