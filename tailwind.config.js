/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#CAF0F8',
          100: '#ADE8F4',
          200: '#90E0EF',
          300: '#48CAE4',
          400: '#00B4D8',
          500: '#0096C7',
          600: '#0077B6',
          700: '#023E8A',
          800: '#03035E',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-soft': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};