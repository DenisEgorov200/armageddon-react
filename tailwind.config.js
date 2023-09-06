/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: '#F86600',
      'orange-smooth': 'rgba(248, 102, 0, 0.15)',
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
