import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Removed Replit-only plugins (they break on Vercel)
  ],
  resolve: {
    alias: {
      // Point /src to client/src
      "/src": path.resolve(__dirname, "client/src"),
      // Keep your existing aliases
      "@": path.resolve(__dirname, "client/src"),           // Update if needed
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: ".", // Serve from root (where index.html is)
  build: {
    outDir: "dist", // Vercel expects this
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
