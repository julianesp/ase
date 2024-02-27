import Head from 'next/head'
import '../app/globals.css'
import favicon from '../app/favicon.ico'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
