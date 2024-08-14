/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "standalone",
  images: {
    // unoptimized: true,
    // domains: ["firebasestorage.googleapis.com"],
    // remotePatterns: ["firebasestorage.googleapis.com"],
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

  // experimental: {
  //   isrMemoryCacheSize: 0,
  // },
};

module.exports = nextConfig;
