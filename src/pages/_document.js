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
        <meta
          name="apple-mobile-web-app-title"
          content="Nombre de la Aplicación"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
