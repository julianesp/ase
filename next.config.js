/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["firebasestorage.googleapis.com"],
  },

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

  // include images from browser
  // experimental: {
  //   urlImports: [
  //     "https://console.firebase.google.com/u/0/project/aliriose-3a721/storage/aliriose-3a721.appspot.com/files/~2Fimages?hl=es",
  //     "https://console.firebase.google.com/u/0/?hl=es",
  //   ],
  // },
};

module.exports = nextConfig;
