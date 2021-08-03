/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel'
import image from "svelte-image";
import sveltePreprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    image(),
    sveltePreprocess()
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel()
  }
};

export default config;
