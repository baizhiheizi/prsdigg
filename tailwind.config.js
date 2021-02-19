module.exports = {
  purge: ['./app/packs/src/apps/**/*.tsx'],
  darkMode: 'media', // or false or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
};