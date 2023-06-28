/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "img.freepik.com/"],
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
