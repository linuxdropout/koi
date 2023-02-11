/* eslint-disable import/no-extraneous-dependencies */
import {
  defineConfig,
} from 'vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import pluginReact from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginReact(), pluginRewriteAll()],
  build: { sourcemap: true },
  server: {
    port: 3000,
    host: true,
  },
})
