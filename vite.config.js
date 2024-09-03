import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults"],
    }),
    react(),
    eslint(),
  ],
});
