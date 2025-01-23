import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import qwikdev from "@qwikdev/astro";
import tailwindcss from '@tailwindcss/vite'

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://cesarovideo.com",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap(),
    qwikdev({
      include: "**/qwik/*",
    }),
    solidJs({
      devtools: true,
      include: ["**/solid/*", "**/node_modules/@suid/material/**"],
    }),
  ],
});
