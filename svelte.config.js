/** @type {import('@sveltejs/kit').Config} */
import image from "svelte-image";
import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import {resolve} from "path";

const config = {
  preprocess: [
    preprocess(),
    image()
  ],
  kit: {
    target: '#svelte',
    adapter: vercel()
  }
};
export default config;
