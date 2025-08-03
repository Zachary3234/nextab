import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from "@tailwindcss/vite"

// https://cn.vitejs.dev/guide/
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    allowedHosts: ['.nexcab.top']
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'index.html'),
        newtab: resolve(__dirname, 'pages/newtab.html'),
        popup: resolve(__dirname, 'pages/popup.html'),
        sidepanel: resolve(__dirname, 'pages/sidepanel.html'),
        options: resolve(__dirname, 'pages/options.html'),
        content: resolve(__dirname, 'src/content.ts'),
        background: resolve(__dirname, 'src/background.ts'),
      },
      output: {
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: undefined,
      }
    }
  },
})