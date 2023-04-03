/**
 * @type {import('next').NextConfig}
 */
import i18n from "./next-i18next.config.сjs";
console.log('i18n', i18n);
export default {
  reactStrictMode: true,
  i18n: i18n,
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