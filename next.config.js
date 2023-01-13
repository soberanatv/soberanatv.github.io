/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "github.io", "github.com"],
  },
};

module.exports = nextConfig;
