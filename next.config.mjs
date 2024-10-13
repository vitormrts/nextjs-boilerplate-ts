/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    IS_PROD: process.env.NODE_ENV === "production",
    BASE_URL: process.env.BASE_URL,
    LOCALE: process.env.LOCALE,
    BRAND: process.env.BRAND,
  },
  pageExtensions: ["page.tsx", "page.ts"],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
