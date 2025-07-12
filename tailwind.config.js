/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dewiBold: ['Dewi Expanded Bold', 'sans-serif'],
        dewiSemibold: ['Dewi Expanded Semibold', 'sans-serif'],
        dewiUltraBold: ['Dewi Expanded UltraBold', 'sans-serif'],
        dewiRegular: ['Dewi Expanded Regular', 'sans-serif'],
      },
      colors: {
        blue: '#49D0FF',
        lightGray: '#8C8F96',
        ultraLightGray: '#F0F2F6',
        priceGray: '#3C3C3C',
        footerGray: '#DCDCE0',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transition-collapse': {
          'transition-property': 'max-height, opacity, padding',
          'transition-duration': '0.1s',
          'transition-timing-function': 'ease',
          'overflow': 'hidden',
        }
      })
    }
  ],
}
