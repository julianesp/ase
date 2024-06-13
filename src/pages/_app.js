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
    <PublicacionesProvider>
      <Component {...pageProps} />;
    </PublicacionesProvider>
  );
}
