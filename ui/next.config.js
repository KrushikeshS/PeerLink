    /* @type {import('next').NextConfig} */ // Changed comment style
    const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
      async rewrites() {
        return [
          {
            source: '/api/upload',
            destination: 'http://localhost:8080/upload', // Keep localhost for Next.js dev server proxy
          },
          {
            source: '/api/download/:port',
            destination: 'http://localhost:8080/download/:port', // Keep localhost for Next.js dev server proxy
          },
        ];
      },
    }

    module.exports = nextConfig
    