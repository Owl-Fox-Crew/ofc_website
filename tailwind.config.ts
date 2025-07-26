import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FCD757',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
