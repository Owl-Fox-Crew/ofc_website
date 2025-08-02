import fs from 'fs'
import path from 'path'

const env = process.env.NODE_ENV
const robotsSrc =
  env === 'production'
    ? 'public/robots.production.txt'
    : 'public/robots.staging.txt'
const robotsDest = 'public/robots.txt'

try {
  fs.copyFileSync(path.resolve(robotsSrc), path.resolve(robotsDest))
  console.log(`✅ Robots.txt configurado para entorno: ${env}`)
} catch (err) {
  console.warn('⚠️ No se pudo copiar robots.txt:', err.message)
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  }
}

export default nextConfig
