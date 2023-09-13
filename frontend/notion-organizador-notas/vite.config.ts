import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const initPath = 'notion-organizador-notas'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          return `${initPath}/assets/[name]-[hash][extname]`;
        },
        chunkFileNames: (chunkInfo) => {
          return `${initPath}/assets/[name]-[hash].js`;
        },
        entryFileNames: (chunkInfo) => {
          return `${initPath}/assets/[name]-[hash].js`;
        }
      }
    }
  }
})
