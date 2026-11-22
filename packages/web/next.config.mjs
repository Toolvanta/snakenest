/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@project/core'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
