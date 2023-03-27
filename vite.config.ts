import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr:false,
    watch: {
      usePolling: true
    }
  },
  plugins: [vue({
    include:"**/*.vue"
  })],
})
