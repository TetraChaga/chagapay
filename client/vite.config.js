import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Ensure Vite handles routes correctly
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
});

