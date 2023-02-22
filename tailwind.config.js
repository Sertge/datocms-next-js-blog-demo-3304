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
        'main-green': '#517664',
        'light-green': '#9FD8CB',
        'hover-green': '#4D7A62',
        'brown': '#2D3319',
        'lbrown': '#C7AD7D',
        'azure': '#D6E5E3',
        'french-gray': '#CACFD6',
        'indigo': '#EFAD02'
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
        extended: '40vw'
      },
      keyframes: {slide: {
        '0%': {
          transform: 'translateX(-100%)'
          // animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        },
        '100%': {
          transform: 'translateX(0)'
          // animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }},
      animation: {
        'slide-in': 'slide 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}