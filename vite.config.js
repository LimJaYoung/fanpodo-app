// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fanpodo-app/', // <-- 반드시 이렇게
  plugins: [react()],
})