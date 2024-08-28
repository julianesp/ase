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

  // env: {
  //   NEXT_PUBLIC_API_URL:
  //     process.env.NEXT_PUBLIC_API_URL || "https://localhost:27017/ase",
  // },

  
};

module.exports = nextConfig;
