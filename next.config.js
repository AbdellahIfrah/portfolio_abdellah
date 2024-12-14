/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio_abdellah',
  assetPrefix: '/portfolio_abdellah/',
  trailingSlash: true,
}

module.exports = nextConfig
