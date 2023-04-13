/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
rewrites: async () => [
  {
    source: "/public/_lot_stats.html",
    destination: "/pages/api/lot_stats.js",
  },
],

module.exports = nextConfig
