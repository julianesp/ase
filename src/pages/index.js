import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Servicio de cirugía general</title>
        <meta name="description" content="Servicio de cirugía general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.enDesarrollo}>
          <p>En desarrollo</p>
        </div>

        <div className={styles.description}>
          
          <section className={styles.procedimientos}>
            <h3>Slider de procedimientos</h3>
          </section>

          <section className={styles.videos}>
            <h3>Slider de vídeos explicando</h3>
          </section>

          <section className={styles.explicacion}>
            <h3>Slider explicación enfermedades</h3>
          </section>

        </div>
      </main>
      
    </Layout>
  )
}
