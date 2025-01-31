import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Update the base URL to reflect the project structure on GitHub Pages
   base: '_My_Portfolio_',  // Set the correct base URL
});
