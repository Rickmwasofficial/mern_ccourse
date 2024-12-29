import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigpaths from 'vite-jsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigpaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true, // This can help with CORS issues
        secure: false, // Set to true if your backend uses HTTPS
      }
    }
  }
})
