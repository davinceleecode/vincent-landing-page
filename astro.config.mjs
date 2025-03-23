// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: "static",  // Important for GitHub Pages
    base: "/vincent-landing-page/", // Match this with your repo name
});
