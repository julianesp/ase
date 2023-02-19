import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Layout from '@/components/Layout'

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
        <div className={styles.description}>
          <h1>Inicio</h1>
        </div>
      </main>
      
    </Layout>
  )
}
