import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { monaco } from './monaco.plugin';

export default defineConfig({
  plugins: [
    sveltekit(),
    enhancedImages(),
    monaco({
      languages: [
        'typescript',
        'javascript',
        'html',
        'css',
        'scss',
        'vue',
        'vue-html',
        'svelte',
        'tsx',
        'ruby',
        'php',
        'go',
        'java',
        'kotlin',
        'dart',
        'csharp',
        'python',
        'rust',
        'swift',
        // 'cpp',
        'c',
        'lua',
        'sql',
        'yaml',
        'json',
        'bash',
        'markdown'
      ],
      features: [
        'theme',
        'minimap'
      ],
      globalAPI: false
    })
  ],
  ssr: {
    // Exclude monaco-editor from SSR
    external: ['monaco-editor-core']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor-core/esm/vs/editor/editor.api']
        }
      }
    }
  }
});
