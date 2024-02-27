/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {

  output: "export",

  images: {
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.module\.s(a|c)ss$/,
        loader: 'sass-loader',
        options: {
        },
      });
    }
    return config;
  },



  // rules:
  // {
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     "style-loader",
  //     "css-loader",
  //     "sass-loader",
  //   ],
  // },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig