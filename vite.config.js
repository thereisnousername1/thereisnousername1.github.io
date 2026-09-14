import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Because this deploys to https://thereisnousername1.github.io (a user/organization
// page, not a project page), the site must be served from the root path.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
