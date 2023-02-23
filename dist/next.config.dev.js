"use strict";

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig
var path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack: function webpack(config, options) {
    config.module.rules.push({
      test: /\.scss$, \.test$/,
      use: [{
        loader: 'sass-loader',
        options: {
          includePaths: [path.join(__dirname, 'styles')]
        }
      }, 'raw-loader']
    });
    return config;
  }
};