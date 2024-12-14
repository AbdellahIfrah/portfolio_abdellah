/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio_abdellah',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio_abdellah',
}

module.exports = nextConfig
