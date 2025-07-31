import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from "@tailwindcss/vite"

// https://cn.vitejs.dev/guide/
// https://vite.dev/config/
export default defineConfig({
  base: '/nextab/',
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        newtab: resolve(__dirname, 'pages/newtab.html'),
        popup: resolve(__dirname, 'pages/popup.html'),
        sidepanel: resolve(__dirname, 'pages/sidepanel.html'),
        content: resolve(__dirname, 'src/content.ts'),
        service: resolve(__dirname, 'src/service.ts'),
      },
      output: {
        entryFileNames: 'scripts/[name].js',
        manualChunks: undefined,
      }
    }
  },
})
