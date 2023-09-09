/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      orange: {
        100: '#F86600',
        15: '#F8660026',
      },
      gray: '#E3E5E5',
      dark: '#232526',
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      passion: ['Passion One', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
};
