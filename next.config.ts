import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photobank.maximum.expert',
        port: '',
        pathname: '/photo/fotobankN/**',
      },
      {
        protocol: 'https',
        hostname: 'test2.maximum-haval.ru',
        port: '',
        pathname: '/public/test-task/v1/**',
      },
    ],
  },
};

export default nextConfig;
