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
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 5173,       // Especifica el puerto que deseas usar
    proxy: {
      '/api': {
          target: 'http://192.168.1.127:8000',
      }
    }
  }
})
