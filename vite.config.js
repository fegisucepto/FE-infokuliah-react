import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js
// export default {
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://api.npoint.io/99c279bb173a6e28359c/data',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// };
