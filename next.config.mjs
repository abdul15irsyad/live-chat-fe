import { config } from 'dotenv';
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BASE_API_URL,
      },
    ];
  },
};

export default nextConfig;
