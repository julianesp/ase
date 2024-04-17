import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.js'
import Image from 'next/image.js'
import Slider from '../containers/Slider.js'
// Importando imágenes
import doctor1 from '/public/images/services/cirugia_laparoscopia_1.jpg'
import doctor2 from '/public/images/services/colecistectomia.jpg'
import doctor3 from '/public/images/services/patologias.jpg'
import doctor4 from '/public/images/services/colonoscopia.jpg'
import VisorImages from '../components/VisorImages.js'
import imagesInfo from '../../data/images.json'
import styles from '../styles/Home.module.scss'
import ImageSlider from '..//containers/ImageSlider.js'


const Home = () => {

  const imagePath = [doctor1, doctor2, doctor3, doctor4]

  return (
    <Layout>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="../app/favicon.ico" />
        <meta name="description" content="Servicio de cirugía general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>

        <section className={styles.presentation}>
          <ImageSlider imagePaths={imagePath} />
        </section>


        <section className={styles.tratamientos}>

          <div className={styles.area}>
            <h3>PROCEDIMIENTOS</h3>

            <ul>
              <li>Laparoscopia</li>
              <li>Endoscopia</li>
              <li>Hígado graso</li>
              <li>Bichectomía</li>
              <li>Hernioplastia umbilical</li>
            </ul>

            <button>Ver más</button>

          </div>

        </section>

        <section className={styles.info}>
          <h2>Información</h2>
        </section>

        <section className={styles.horario}>
          <h2>Novedades</h2>
          <p>Publicación de noticias publicadas de parte del cirujano</p>
        </section>

        <section className={styles.horario}>
          <h2>Enlaces importantes</h2>
          <p>Noticias o temas importantes que el médico cirujano considera para que sus pacientes lean</p>
          <p>Pueden ser links externos o publicación del mismo doctor</p>
        </section>

      </main >
    </Layout >
  )
}

export default Home
