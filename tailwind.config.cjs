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
  theme: {
    extend: {
      screens: {
        xs: 'var(--screen-xs)',
        sm: 'var(--screen-sm)',
        md: 'var(--screen-md)',
        lg: 'var(--screen-lg)',
        xl: 'var(--screen-xl)',
        '2xl': 'var(--screen-2xl)',
        '3xl': 'var(--screen-3xl)',
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
