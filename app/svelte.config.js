import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess({})],
	kit: {
		adapter: adapter({
			prerender: { entries: [] },
      		fallback: "index.html", // enable SPA mode
		}),
	},
};

export default config;
