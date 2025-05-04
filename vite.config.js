// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fanpodo-app/', // ✅ 이렇게 변경!
  plugins: [react()],
});