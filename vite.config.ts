import { defineConfig } from "vitest/config";
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
  publicDir: "/public",
  test: {
    browser: {
      provider: "playwright",
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
  plugins: [react(), svgr()],
  build: {
    outDir: "build", // CRA's default build output
  },
});
