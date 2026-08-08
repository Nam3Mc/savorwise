import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "src/",
    envDir: "../",

    preview: {
        host: "0.0.0.0",
        allowedHosts: ["savorwise.onrender.com"],
    },

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
            },
        },
    },
});
