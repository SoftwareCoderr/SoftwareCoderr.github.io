/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          200: '#99C8FF',
          300: '#66ADFF',
          400: '#3391FF',
          500: '#0070F3',
          600: '#005CC4',
          700: '#004493',
          800: '#002D62',
          900: '#0A192F',
        },
        accent: {
          50: '#E6FFFA',
          100: '#B3FFF1',
          200: '#80FFE8',
          300: '#4DFFDF',
          400: '#1AFFD6',
          500: '#00E5BD',
          600: '#00B8A2',
          700: '#008A7E',
          800: '#005C5C',
          900: '#002E2E',
        },
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
        floating: 'floating 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};