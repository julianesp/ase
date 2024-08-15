export default function manifest() {
  return {
    name: "Alirio Solarte España",
    short_name: "ASE",
    description: "Servicio de cirugía general",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        // src: "/favicon.ico",
        src: "/public/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
