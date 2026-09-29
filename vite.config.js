import { defineConfig } from "vite";

export default defineConfig({
  root: "html",

  publicDir: "../img/otimizado",

  build: {
    outDir: "../dist"
  }
});