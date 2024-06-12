import { PublicacionesProvider } from "../context/PublicacionesContext";
import {
  Lato,
  Roboto_Condensed,
  Open_Sans,
  Montserrat,
  Oswald,
} from "@next/font/google";
import "../styles/globals.css";

// establciendo pesos para la fuente
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <PublicacionesProvider>
      <Component {...pageProps} />;
    </PublicacionesProvider>
  );
}
