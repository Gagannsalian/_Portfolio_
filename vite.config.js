import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Tailwind plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],  // You can keep this if you want

  base: '/_Portfolio_/', // Update base URL for GitHub Pages deployment
});
