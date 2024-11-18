import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
export default defineConfig({
  plugins: [sveltekit(), enhancedImages()]
});
