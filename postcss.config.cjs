const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

const dev = process.env.NODE_ENV === 'development';

const plugins = [
  tailwindcss(),
  autoprefixer(),
];

if (!dev) {
  plugins.push(cssnano({
    preset: 'default',
  }));
}

module.exports = {
  plugins,
};
