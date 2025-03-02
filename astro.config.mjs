// @ts-check
import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // adapter: nodejs({
  //   mode: "standalone",
  // }),
  // output: "server",
});
