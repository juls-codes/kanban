/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],  theme: {
    extend: {
      colors: {
        'dark': '#21212d',
        'light': '#2C2C38',
        'accent': '#625AFF',
      },
    },
  },
  plugins: [],
}

