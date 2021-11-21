import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  kit: {
    ssr: false,
    adapter: adapter(),
  },
  preprocess: preprocess({
    sourceMap: dev,
    postcss: true,
  }),
};

export default config;
