import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//le agregue build y server para produccion

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida de construcción
  },
  server: {
    port: 4173, // Puerto de desarrollo local
  },
  
})
