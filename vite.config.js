import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: resolve(__dirname, "src"),
    envDir: resolve(__dirname),

    preview: {
        host: "0.0.0.0",
        port: 10000,
        allowedHosts: ["savorwise.onrender.com"],
    },

    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,

        rollupOptions: {
            input: resolve(__dirname, "src/index.html"),
        },
    },
});
