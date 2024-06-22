import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: "2048", // 2kb, set as your minimum file size
  },
  plugins: [react()],
});
