const { i18n } = require('./config/i18n/next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
}

module.exports = nextConfig
