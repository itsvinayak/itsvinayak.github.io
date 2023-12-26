const { withContentlayer } = require('next-contentlayer');

const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = withContentlayer(nextConfig);
