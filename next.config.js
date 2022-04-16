/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const STUDIO_REWRITE = {
  source: '/admin/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/admin/:path*'
      : '/admin/index.html',
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
};

module.exports = nextConfig;
