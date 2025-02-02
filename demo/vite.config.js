import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@praesenceai/core-ui': resolve(__dirname, '../dist/core-ui.es.js'),
      '@praesenceai/core-ui/styles': resolve(__dirname, '../dist/core-ui.css.css')
    }
  },
  server: {
    watch: {
      ignored: ['!../dist/**']
    }
  }
})