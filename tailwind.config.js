/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#AC2123',
          secondary: '#d1d5db',
          accent: '#ffe4e6',
          neutral: '#222a30',
          info: '#36b1d3',
          success: '#16a34a',
          warning: '#ec9109',
          error: '#fb5c3c',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      popins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
