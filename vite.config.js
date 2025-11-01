import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nikitenko_fitness/',  // <-- имя репозитория на GitHub
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})