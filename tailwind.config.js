/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // If you're using HTML
    './src/**/*.{js,jsx,ts,tsx}', // If you're using React or TypeScript (adjust paths as necessary)
  ],
  theme: {
    extend: {
      fontFamily: {
        'integral': ['Integral CF', 'sans-serif'], // Custom font added here
      },
    },
  },
  plugins: [],
}
