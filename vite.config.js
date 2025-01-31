import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Update the base URL to reflect the project structure on GitHub Pages
  base: '/My_Own_Portfolio/frontend/',  // Set the correct base URL
});
