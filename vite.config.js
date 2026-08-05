import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works both at the GitHub Pages sub-path and
  // when opened from disk.
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
});
