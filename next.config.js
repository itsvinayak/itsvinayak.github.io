const { withContentCollections } = require('@content-collections/next');

const config = {
  dest: 'public',
  register: true,
  scope: '/',
}

if (process.env.DEPLOYMENT_TYPE === 'development') {
  config.disable = true;
}

const withPWA = require('next-pwa')(config);

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['react-icons/fa', 'react-icons/fa6', 'react-icons/bs', 'react-icons/cg', 'react-icons/md'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  }
});

module.exports = withContentCollections(nextConfig);
