import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  base: "/vincent-landing-page/", // Match this with your repo name
  build: {
    outDir: "docs", // Change output directory to docs
  }
});
