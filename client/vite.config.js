import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'client/dist'  // Make sure this is correctly set
  },
  plugins: [react()],
});


