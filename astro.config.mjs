import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    image(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
