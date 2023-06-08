/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 86400, //60 * 60 * 24
  },
};

module.exports = nextConfig;
