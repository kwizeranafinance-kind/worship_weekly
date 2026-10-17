/** @type {import('next').NextConfig} */
// GITHUB_PAGES=true builds for https://kwizeranafinance-kind.github.io/worship_weekly/
const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = isPages ? '/worship_weekly' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
