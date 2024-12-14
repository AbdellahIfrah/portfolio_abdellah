/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio_abdellah',
  assetPrefix: '/portfolio_abdellah/',
  images: {
    loader: 'custom',
    loaderFile: './src/image-loader.js',
    unoptimized: true,
  },
  // This is important for GitHub Pages to work properly
  trailingSlash: true,
}

module.exports = nextConfig
