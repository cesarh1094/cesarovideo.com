import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import qwikdev from "@qwikdev/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    qwikdev({
      include: "**/qwik/*",
    }),
    solidJs({
      include: ["**/solid/*", "**/node_modules/@suid/material/**"],
    }),
  ],
});

