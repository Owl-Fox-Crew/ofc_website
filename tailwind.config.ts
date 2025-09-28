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
          orange: '#FF7503',
          blue: '#5798FF',
          purple: '#4D2682',
          darkgray: '#231F20'
        }
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        raleway: ["Raleway", "sans-serif"],
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config;
