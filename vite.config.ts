import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: [
          { find: '@src', replacement: resolve(__dirname, 'src') },
          {
            find: '@components',
            replacement: resolve(__dirname, 'src/components'),
          },
          {
            find: '@type',
            replacement: resolve(__dirname, 'src/type'),
          },
        ],
      },
    server: {
        proxy: {
            '/api': {
                target: 'https://storage-fe.fastraffic.io',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [react(), tsconfigPaths()],
})
