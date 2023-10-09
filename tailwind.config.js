/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: { min: '640px', max: '767px' },

      md: { min: '768px', max: '1067px' },

      lg: { min: '1068px', max: '1279px' },

    },

    extend: {
      spacing: {
        '20/20': '28%',
      },
    },
  },
  plugins: [],
};
