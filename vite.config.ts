import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@processes": path.resolve(__dirname, "./src/processes"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@entities": path.resolve(__dirname, "./src/entities"),
    },
  },
  plugins: [react()],
});
