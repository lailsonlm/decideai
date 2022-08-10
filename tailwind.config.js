module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
      heading: '"Suez One", sans-serif'
    },
    extend: {
      colors: {
        blue: {
          800: '#161925',
          500: '#23395B',
          300: '#406E8E',
        },
        gray: {
          500: '#525252',
          400: '#8F8F8F',
          300: '#D2CACA',
          200: '#ECEBE4',
          100: '#EBEBEB',
          50: '#FAFAFA',
        },
        yellow: {
          400: '#F7B801'
        }
      }
    },
  },
  plugins: [],
}