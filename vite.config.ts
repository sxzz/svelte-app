import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [sveltekit(), vue(), inspect()],
})
