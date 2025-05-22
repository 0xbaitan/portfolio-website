import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src"),
      "@public/*": path.resolve(__dirname, "./public/"),
    },
  },
  plugins: [react(), svgr()],
  build: {
    outDir: "build", // CRA's default build output
  },
});
