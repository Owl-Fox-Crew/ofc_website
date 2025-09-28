import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV;
const robotsSrc =
  env === 'production'
    ? 'public/robots.production.txt'
    : 'public/robots.staging.txt';
const robotsDest = 'public/robots.txt';

try {
  fs.copyFileSync(path.resolve(robotsSrc), path.resolve(robotsDest));
  console.log(`✅ Robots.txt configurado para entorno: ${env}`);
} catch (err) {
  console.warn('⚠️ No se pudo copiar robots.txt:', err.message);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      // Si usás archivos (no solo imágenes) desde Sanity:
      // { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/files/**' },
    ],
  },
};

export default nextConfig;
