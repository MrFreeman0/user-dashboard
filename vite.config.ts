import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"), // alias for the styles directory
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@import "@styles/_mixins.scss"; \n@import "@styles/_common_vars.scss"; \n`,
      },
    },
  },
});
