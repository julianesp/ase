import Head from 'next/head'
import { Metadata } from 'next'
import { Lato, Roboto_Condensed, Open_Sans, Montserrat, Oswald } from '@next/font/google'

// establciendo pesos para la fuente
const lato = Lato ({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
})
const oswald = Oswald ({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico'/>
      </Head>

      <main className={lato.className}>
        <Component {...pageProps} />;
      </main>
    </>
  )
}
