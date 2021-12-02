const dev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  important: true,
  purge: {
    enabled: !dev,
    content: [
      './src/**/*.svelte',
      './src/app.html',
    ],
  },
  corePlugins: {
    padding: false,
    margin: false,
    height: false,
    width: false,
    textAlign: false,
  },
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '2560px',
      },
      colors: {
        light: 'var(--clr-light)',
        dark: 'var(--clr-dark)',
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
      },
      fontFamily: {
        head: ['var(--ff-head)'],
        body: ['var(--ff-body)'],
      },
      fontSize: {
        xs: ['var(--fs-xs)', 'var(--lh-xs)'],
        sm: ['var(--fs-sm)', 'var(--lh-sm)'],
        md: ['var(--fs-md)', 'var(--lh-md)'],
        lg: ['var(--fs-lg)', 'var(--lh-lg)'],
        xl: ['var(--fs-xl)', 'var(--lh-xl)'],
        '2xl': ['var(--fs-2xl)', 'var(--lh-2xl)'],
        '3xl': ['var(--fs-3xl)', 'var(--lh-3xl)'],
      },
      fontWeight: {
        extralight: 'var(--fw-extralight)',
        light: 'var(--fw-light)',
        regular: 'var(--fw-regular)',
        medium: 'var(--fw-medium)',
        semibold: 'var(--fw-semibold)',
        bold: 'var(--fw-bold)',
        extrabold: 'var(--fw-extrabold)',
        black: 'var(--fw-black)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('./tailwind-logical.cjs'),
    ({ addComponents, theme }) => {
      addComponents({
        // TODO: Change to css
        main: {
          marginInline: 'auto',
          paddingInline: `clamp(${theme('spacing.4')}, 5vw, ${theme('spacing.12')})`,
          maxWidth: theme('screens.2xl'),
        },
        '.large-wrapper': {
          marginInline: 'auto',
          paddingInline: `clamp(${theme('spacing.4')}, 5vw, ${theme('spacing.12')})`,
          maxWidth: theme('screens.3xl'),
        },
      });
    },
  ],
};
