/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'main-green': '#92C7AB',
        'light-green': '#D4FFE8',
        'hover-green': '#4D7A62',
        'brown': '#7A6D53',
        'lbrown': '#C7AD7D'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.02em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      height: {
        fullscreen: '100%'
      },
      width: {
        extended: '80%'
      },
    },
  },
  plugins: [],
}