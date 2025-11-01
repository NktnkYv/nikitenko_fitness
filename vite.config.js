import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/nikitenko_fitness/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
}))