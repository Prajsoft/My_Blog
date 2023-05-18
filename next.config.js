/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "http://localhost:1337",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
