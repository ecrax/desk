import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [threeMinifier()],
  },
});