const { withContentlayer } = require('next-contentlayer');

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.DEPLOYMENT_TYPE === 'development',
  register: true,
  scope: '/',
});

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  swcMinify: true,
  pwa: {
    dest: 'public',
  },
  distDir: 'github-pages'
});

module.exports = withContentlayer(nextConfig);
