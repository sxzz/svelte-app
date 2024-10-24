import { sveltekit } from '@sveltejs/kit/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [sveltekit(), vue(), inspect()],
})
