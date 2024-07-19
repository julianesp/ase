// import type { Metadata } from "next";
import Footer from "../containers/Footer";
import NavBar from "../containers/NavBar";
import "./globals.css";

export const metadata = {
  title: "Alirio Solarte",
  description: "Servicio de cirugía general",
  image:
    "https://firebasestorage.googleapis.com/v0/b/aliriose-3a721.appspot.com/o/images%2Flogo_circular.jpeg?alt=media&token=67019e7b-b635-4507-b1fb-70c8b9aecbef",
  url: "https://julianesp.github.io/ase/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
