import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return undefined;

          if (
            id.includes("/@mui/") ||
            id.includes("/@emotion/")
          ) {
            return "mui-vendor";
          }
          if (id.includes("/@radix-ui/")) {
            return "radix-vendor";
          }
          if (id.includes("/framer-motion/")) {
            return "motion-vendor";
          }
          if (
            id.includes("/lucide-react/") ||
            id.includes("/react-icons/")
          ) {
            return "icons-vendor";
          }
          if (
            id.includes("/marked/") ||
            id.includes("/dompurify/")
          ) {
            return "markdown-vendor";
          }
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router") ||
            id.includes("/@tanstack/react-query/") ||
            id.includes("/scheduler/")
          ) {
            return "react-vendor";
          }
          return "vendor";
        },
      },
    },
  },
}));
