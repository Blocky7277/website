import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { plugin as mdPlugin } from 'vite-plugin-markdown'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
