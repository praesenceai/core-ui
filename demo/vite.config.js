import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@praesenceai/core-ui': '../dist/core-ui.es.js',
      '@praesenceai/core-ui/styles': '../dist/core.css'
    }
  },
  server: {
    watch: {
      ignored: ['!../dist/**']
    }
  }
})