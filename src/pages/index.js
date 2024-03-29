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
import styles from '@/styles/Home.module.css'
import ImageSlider from '@/containers/ImageSlider.js'


const Home = () => {

  // const imgs = {
  //   doctor: [
  //     {
  //       image: doctor1,
  //       altText: "Cirugía laparoscopia",
  //       description: "Cirugía laparoscopia",
  //     },
  //     {
  //       image: doctor2,
  //       altText: "Colecistectomia",
  //       description: "Colecistectomia",
  //     },
  //     {
  //       image: doctor3,
  //       altText: "Patologias",
  //       description: "Patologia",
  //     },
  //     {
  //       image: doctor4,
  //       altText: "Cirugía laparoscopia",
  //       description: "Cirugía laparoscopia",
  //     },

  //   ],
  // };

  const imagePath = [doctor1, doctor2, doctor3, doctor4]

  return (
    <Layout>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Servicio de cirugía general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <main className={styles.container}>

        <section className={styles.presentation}>
          {/* <Slider images={[
            { src: doctor1, alt: 'Procedimiento 1' },
            { src: doctor2, alt: 'Procedimiento 2' },
            { src: doctor3, alt: 'Procedimiento 3' },
            { src: doctor4, alt: 'Procedimiento 4' },
          ]}
            automaticTransition={true}
          /> */}
          {/* <Slider /> */}

          <ImageSlider imagePaths={imagePath} />

        </section>

        <section className={styles.contenido}>


          {/* <Slider /> */}
          {/* <section className={styles.procedimientos}>

            <VisorImages
              className={``}
              images={
                [
                  { src: doctor1, alt: 'Procedimiento 1' },
                  { src: doctor2, alt: 'Procedimiento 2' },
                  { src: doctor3, alt: 'Procedimiento 3' },
                  { src: doctor4, alt: 'Procedimiento 4' },
                ]
              }
              automaticTransition={false}
            />

          </section> */}

          {/* <section className={styles.cuerpo}>

            <section className={styles.contenido}>


              <div className={styles.tratamientos}>

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

              </div>

            </section>


          </section> */}

        </section >
      </main >
    </Layout >
  )
}

export default Home
