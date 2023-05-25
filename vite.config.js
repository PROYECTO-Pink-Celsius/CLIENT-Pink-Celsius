import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  
  base: './',
  build: {
    assetsDir: 'static',
    brotliSize: false, // not supported in StackBlitz
  }, 
  server: {
    proxy: {
      '/api': {
          target: 'http://192.168.1.141:8080',
      }
    }
  }
})
