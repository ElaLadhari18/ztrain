/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#fff3e0',   // Remplace blue-50 par une teinte claire d'orange
          100: '#ffe0b2',  // Remplace blue-100
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ffa500',  // Remplace blue-500
          600: '#ff9800',
          700: '#fb8c00',
          800: '#f57c00',
          900: '#ef6c00',  // Remplace blue-900 par une teinte foncée d'orange
        },
      },
    },
  },
  plugins: [],
};
