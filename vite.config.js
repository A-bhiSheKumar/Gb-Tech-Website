import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ],
  },
  build: {
    target: "esnext",
    sourcemap: false,
    cssCodeSplit: true, // Important for Tailwind + Material UI
    minify: "esbuild", // Fastest minifier
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor code to separate chunks
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
