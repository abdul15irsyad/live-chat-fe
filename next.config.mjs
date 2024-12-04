import { config } from 'dotenv';
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_BASE_URL,
      },
    ];
  },
};

export default nextConfig;
