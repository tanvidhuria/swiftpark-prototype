import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps every asset path relative, so this works on GitHub Pages
// whatever you name the repo. No need to change anything here.
export default defineConfig({
  plugins: [react()],
  base: './',
})
