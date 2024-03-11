/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: '2rem',
          lg: '4rem',
          xl: '8rem',
          '2xl': '10rem'
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px'
        },
        animation: {
          openmenu: 'openmenu 1s ease-in',
          closemenu: 'closemenu 1s ease-in'
        },
        keyframes: {
          openmenu: {
            // initial position
            '0%': { left: '-224px' },
            // final position
            '100%': { left: '0px' }
          },
          closemenu: {
            // initial position
            '0%': { left: '0px' },
            // final position
            '100%': { left: '-224px' }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animated')]
}
