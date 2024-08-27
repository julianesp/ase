// // next.config.js
// const path = require("path");

// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.module.rules.push({
//         test: /\.module\.s(a|c)ss$/,
//         loader: "sass-loader",
//         options: {},
//       });
//     }
//     return config;
//   },

//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };

// module.exports = nextConfig;

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.module\.s(a|c)ss$/,
        loader: "sass-loader",
        options: {},
      });
    }
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // Asegúrate de que las páginas se generen dinámicamente
  experimental: {
    appDir: true,
  },
  // Si necesitas alguna configuración específica para imágenes
  images: {
    // Ajusta esto según tus necesidades
    domains: ['https://console.firebase.google.com/u/0/project/aliriose-3a721/storage/aliriose-3a721.appspot.com/files/~2Fimages?hl=es'], 
  },
};

module.exports = nextConfig;