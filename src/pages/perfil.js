// import React, { useState } from 'react'
// import Layout from '../app/layout'
// import Image from 'next/image'
// import Head from 'next/head'

// import doctor from '../../public/images/doctor.jpg'
// import styles from '../styles/Perfil.module.css'

// const Profile = () => {

//     const [showImage, setShowImage] = useState(false)
//     const [showImage1, setShowImage1] = useState(false)

//     const toggleImage1 = () => {
//         setShowImage1(!showImage1)
//     }
//     const toggleImage = () => {
//         setShowImage(!showImage)
//     }

//     const closeImage = () => {
//         setShowImage(false)
//     }
//     const closeImage2 = () => {
//         setShowImage1(false)
//     }

//     return (

//         <Layout>
//             <Head>
//                 <title>Sobre mí</title>
//             </Head>

//             <section className={styles.dev}>

//                 <section className={styles.description}>
//                     <p>
//                         <span>Dr ALIRIO,</span>
//                         <span>CIRUJANO LAPAROSCOPISTA</span>
//                         <span>CIRUGIA PLASTICA</span>
//                     </p>

//                     <Image
//                         className={styles.me}
//                         alt='Médico cirujano'
//                         src={doctor}
//                     />
//                 </section>

//                 <section className={styles.study}>

//                     <h2>Descripción profesional</h2>

//                     <section className={styles.study__container}>

//                         <article className={styles['study--areas']}>

//                             <p id='titulo'>Estudio 1</p>

//                             <button
//                                 className={styles['image-button']}
//                                 onClick={toggleImage}>Ver</button>

//                             {showImage && (
//                                 <div className="image-modal">
//                                     <Image src={tecni} alt="Imagen" />
//                                     <button className={styles['image-button--cerrar']} onClick={closeImage}>X</button>
//                                 </div>
//                             )}


//                         </article>

//                         <article className={styles['study--areas']}>

//                             <p id='titulo'>Estudio 2</p>

//                             <button
//                                 className={styles['image-button']}
//                                 onClick={toggleImage1}>Ver</button>

//                             {showImage1 && (
//                                 <div className="image-modal">
//                                     <Image src={tecno} alt="Imagen" />
//                                     <button className={styles['image-button--cerrar']} onClick={closeImage2}>X</button>
//                                 </div>
//                             )}

//                         </article>

//                     </section>

//                 </section>

//             </section>
//         </Layout>

//     )
// }

// export default Profile

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head';

import doctor from '../../public/images/doctor.jpg';
import tecni from '../../public/diploma.png';
import tecno from '../../public/diploma.png';
import styles from '../styles/Perfil.module.css';

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

    return (
        <Layout>
            <Head>
                <title>Sobre mí</title>
            </Head>
            <section className={styles.dev}>
                <section className={styles.description}>
                    <p>
                        <span>Dr ALIRIO,</span>
                        <span>CIRUJANO LAPAROSCOPISTA</span>
                        <span>CIRUGIA PLASTICA</span>
                    </p>
                    <Image className={styles.me} alt='Médico cirujano' src={doctor} />
                </section>
                <section className={styles.study}>
                    <h2>Descripción profesional</h2>
                    <section className={styles.study__container}>
                        <article className={styles['study--areas']}>
                            <p id='titulo'>Estudio 1</p>
                            <button className={styles['image-button']} onClick={toggleImage}>
                                Ver
                            </button>
                            {showImage && (
                                <div className="image-modal">
                                    <Image src={tecni} alt="Imagen" />
                                    <button className={styles['image-button--cerrar']} onClick={closeImage}>X</button>
                                </div>
                            )}
                        </article>
                        <article className={styles['study--areas']}>
                            <p id='titulo'>Estudio 2</p>
                            <button className={styles['image-button']} onClick={toggleImage1}>
                                Ver
                            </button>
                            {showImage1 && (
                                <div className="image-modal">
                                    <Image src={tecno} alt="Imagen" />
                                    <button className={styles['image-button--cerrar']} onClick={closeImage2}>X</button>
                                </div>
                            )}
                        </article>
                    </section>
                </section>
            </section>
        </Layout>
    );
};

export default Profile;
