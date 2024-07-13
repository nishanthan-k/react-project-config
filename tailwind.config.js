/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '480px',
      laptop: '768px',
      mediumMonitor: '976px',
      largeMonitor: '1025px',
    },
    colors: {
      'bgDark': '#121212',
      'slateDark': '#020617',
      'bgLight': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        form: ['Roboto', 'sans-serif'],
        button: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

module.exports = config;
