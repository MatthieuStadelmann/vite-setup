import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'


export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'IE 11'],
    }),
    react()
  ],
})