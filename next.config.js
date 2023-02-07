// import {i18n} from "./next-i18next.config";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: "/jameshome/**",
      },
    ],
  },
};

export default nextConfig;
