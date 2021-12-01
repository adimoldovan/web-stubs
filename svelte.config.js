import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		paths: {
			base: process.env.SUBFOLDER ? process.env.SUBFOLDER : '',
			assets: process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''
		}
	}
};

export default config;
