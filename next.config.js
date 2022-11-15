/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cs", "en"],
    defaultLocale: "cs",
  },
  env: {
    HOST_URL: "https://www.jirifialacv.cz/",
  },
};

module.exports = nextConfig;
