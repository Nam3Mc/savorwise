import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  envDir: "../",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        meal: resolve(__dirname, 'src/meal/index.html')
      },
    },
  },
});