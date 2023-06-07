module.exports = {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: ['src/styles/custom-media.css'],
    },
    'postcss-custom-media': {},
  },
};
