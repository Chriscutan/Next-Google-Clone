/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.search.brave.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
