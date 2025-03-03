// @ts-check
import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  base: '/',
  site: 'https://reksaperson.my.id',
  integrations: [react()],
});