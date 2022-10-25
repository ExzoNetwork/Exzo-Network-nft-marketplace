/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    protocol: 'https',
    hostname: 'exzo-network.infura-ipfs.io',
    port: '',
    pathname: '/ipfs/**',
    domains: ['exzo-network.infura-ipfs.io'],
  },
};

module.exports = nextConfig;
