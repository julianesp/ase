import Head from 'next/head'
import { Metadata } from 'next'
import favicon from './favicon.ico'
// import '../app/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link rel="icon" href={favicon} /> */}
        <link rel='icon' href='./favicon.ico'/>
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
