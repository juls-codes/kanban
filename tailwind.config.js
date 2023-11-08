/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono' : ['Space Mono', 'mono']
      },
      colors: {
        'dark': '#21212d',
        'light': '#2C2C38',
        'accent': '#625AFF',
      },
      gridTemplateColumns: {
        'frAuto': '1fr, auto'
      },
      gridTemplateRows: {
        'frAuto': '1fr, auto',
        'frAutoAuto': '1fr, auto, auto'
      },
      maxWidth: {
        'xl': '1920px',
      }
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
  },
  plugins: [],
}

