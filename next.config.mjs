import fs from 'fs'
import path from 'path'
import createIntlPlugin from 'next-intl/plugin'

// 📁 Ruta al folder donde están los Hero.json
const withNextIntl = createIntlPlugin('./src/messages')

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
    domains: ['cdn.sanity.io']
  }
}

export default withNextIntl(nextConfig)
