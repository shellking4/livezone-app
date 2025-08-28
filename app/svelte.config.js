import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
		  postcss: true,
		}),
	],
	compilerOptions: {
        customElement: true,
    },
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
	}
};


export default config;