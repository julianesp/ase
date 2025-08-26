const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: {},
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

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "0dwas2ied3dcs14f.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "ihlfsrfme90d2jjk.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
    ],
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/sw.js",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, no-cache, must-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
