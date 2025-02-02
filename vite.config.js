import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // MUST be included for CSS processing
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CoreUI',
      fileName: (format) => `core-ui.${format}.js`,
      cssFileName: 'core-ui.css' // Force exact CSS filename
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'core-ui.css') return 'core-ui.css'
          return assetInfo.name
        }
      }
    },
    cssCodeSplit: false
  }
})
