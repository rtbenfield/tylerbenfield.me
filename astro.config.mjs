import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tylerbenfield.dev",
  output: "server",

  integrations: [sitemap()],

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
