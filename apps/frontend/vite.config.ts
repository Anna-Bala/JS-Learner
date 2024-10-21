import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    plugins: [react()],
    server: {
      proxy: {
        '/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  };
});
