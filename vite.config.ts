import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'
// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'public/img')
    }
  },
  plugins: [react(), svgr()],
})
