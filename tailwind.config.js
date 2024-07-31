/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      colors: {
        'white-alpha': 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
      },
      fontFamily: {
        roboto: ['Roboto', 'serif'],
      }
    },
  },
  plugins: [],
}

