/** @type {import('@sveltejs/kit').Config} */
import image from "svelte-image";
import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'

const config = {
  preprocess: [
    preprocess(),
    image()
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel()
  }
};
export default config;
