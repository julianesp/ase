/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // output: "export",
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
};

module.exports = nextConfig;
