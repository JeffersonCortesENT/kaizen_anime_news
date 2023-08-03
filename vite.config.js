import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: {
        app: 'resources/js/index.jsx', // JS entry point
        styles: 'resources/css/app.css', // CSS entry point
      },
      refresh: true,
      manifest: true,
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Customize the file names for JavaScript and CSS
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});