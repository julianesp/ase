import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import face from '../assets/redes/facebook.png'
import ins from '../assets/redes/instagram.png'

const redes = [
  {
    url: 'https://www.facebook.com/ALIRIO.SOLARTE'
  },
  {
    URL: 'https://www.instagram.com/alirio8308/'
  },
  {
    URL: 'https://www.tiktok.com/@cirugia_general?lang=es'
  }
]

const Contacto = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.redes}>
          <ul>
            <li>
              <Link href='https://www.facebook.com/ALIRIO.SOLARTE' target='_blank'>
                <Image
                  alt='Facebook'
                  src={face}
                />
              </Link>
            </li>

            <li>
              <Link href='https://www.instagram.com/alirio8308/' target='_blank'>
                <Image
                  alt='Instagram'
                  src={ins}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.externo}>
          <a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos">Iconos creados por Freepik - Flaticon</a>
        </div>
      </div>
    </footer>
  )
}

export default Contacto