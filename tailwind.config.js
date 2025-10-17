/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5016',
          light: '#4A7C2C',
          dark: '#1A3309',
        },
        accent: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
        },
        earth: {
          50: '#FAF8F5',
          100: '#F5F1EA',
          200: '#E8E0D0',
          300: '#D4C5A8',
          400: '#B9A47A',
          500: '#9E8451',
          600: '#7C6740',
          700: '#5C4D30',
          800: '#3D3320',
          900: '#1F1A10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}