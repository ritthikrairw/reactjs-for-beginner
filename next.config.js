/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow host image
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  serverRuntimeConfig: {
    // set time zone to Asia/Bangkok
    TZ: "Asia/Bangkok",
  },
};

module.exports = nextConfig;
