/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cs", "en"],
    defaultLocale: "cs",
  },
  env: {
    HOST_URL: "https://jiri-fiala.vercel.app/",
  },
};

module.exports = nextConfig;
