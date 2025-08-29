import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://cesarovideo.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap(),
    solidJs({
      include: ["**/solid/*"],
    }),
  ],
  output: 'server',
  adapter: netlify(),
});
