import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p5.todos/',
  server: {
    open: '/p5.todos/',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/p5.todos/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
