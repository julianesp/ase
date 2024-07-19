import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="Descripcción" content="Servicio de cirugía general " />
        <meta property="og:title" content="Alirio Solarte" />
        <meta
          property="og:description"
          content="This is a brief description of my website."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Flogo_circular.jpeg?alt=media&token=67019e7b-b635-4507-b1fb-70c8b9aecbef"
        />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
