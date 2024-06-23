import { PublicacionesProvider } from "../context/PublicacionesContext";
import "../styles/globals.css";

// import {
//   Lato,
//   Roboto_Condensed,
//   Open_Sans,
//   Montserrat,
//   Oswald,
// } from "@next/font/google";

// estableciendo pesos para la fuente
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
// });
// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
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

      <PublicacionesProvider>
        <Component {...pageProps} />;
      </PublicacionesProvider>
    </>
  );
}
