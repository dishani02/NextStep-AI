
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#A8D5BA',        // Pastel green
        'primary-dark': '#8FC4A8', // Darker pastel green
        secondary: '#B8E6C1',      // Light pastel green (accent)
        'secondary-dark': '#9FD5B7',
        background: '#F5FDF8',     // Very light pastel green background
        card: '#FFFFFF',
        border: '#C4E4D1',         // Pastel green-gray border
        text: '#2D4A3A',           // Dark green-gray for text
        'text-light': '#5A7A6B',   // Medium green-gray
        error: '#EF4444',
        success: '#7FB3A3',        // Pastel green success
      },
      boxShadow: {
        'custom-light': '0 1px 3px 0 rgba(168, 213, 186, 0.15), 0 1px 2px 0 rgba(168, 213, 186, 0.1)',
        'custom-md': '0 4px 6px -1px rgba(168, 213, 186, 0.2), 0 2px 4px -1px rgba(168, 213, 186, 0.15)',
      }
    },
  },
  plugins: [],
}
