import Head from 'next/head'
import favicon from '../app/favicon.ico'
import '../app/globals.css'

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
