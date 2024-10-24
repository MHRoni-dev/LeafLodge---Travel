import { fileURLToPath } from 'url';
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { dirname } from 'path';

// Get the __filename and __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
