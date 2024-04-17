import { Html, Head, Main, NextScript } from "next/document";

// import favicon from './favicon.ico'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href={favicon}/> */}
        {/* <link rel="apple-touch-icon" href="/favicon.ico"/> */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Nombre de la Aplicación" />
        <meta name="mobile-web-app-capable" content="yes"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
