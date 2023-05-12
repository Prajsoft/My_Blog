/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GREETING: "Hello World",
    API_URL: "http://localhost:1337",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
