/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customSoftBlue: 'hsl(215, 51%, 70%)',
        customCyan: 'hsl(178, 100%, 50%)',
        customVeryDarkBlueMain: 'hsl(217, 54%, 11%)',
        customVeryDarkBlueCard: 'hsl(216, 50%, 16%)',
        customVeryDarkBlueLine: 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        sans: [
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  plugins: [],
}
