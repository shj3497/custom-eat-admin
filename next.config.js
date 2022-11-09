const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,

  async header() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.API_BASE_URL + '/api/:path*',
      },
    ];
  },

  publicRuntimeConfig: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  serverRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
