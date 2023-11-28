/** @type {import('next').NextConfig} */
/**
 * Configuration object for Next.js.
 * @typedef {Object} NextConfig
 * @property {Object} experimental - Experimental features configuration.
 * @property {boolean} experimental.optimizeFonts - Whether to optimize fonts.
 * @property {boolean} experimental.optimizeImages - Whether to optimize images.
 * @property {boolean} experimental.serverActions - Whether to enable server actions.
 * @property {boolean} experimental.scriptLoader - Whether to enable script loader.
 * @property {Object} images - Image configuration.
 * @property {string[]} images.formats - Supported image formats.
 * @property {string[]} images.domains - Allowed image domains.
 * @property {Function} rewrites - Async function that returns an array of rewrite rules.
 */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.cmsbetconstruct.com"],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:9080/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
