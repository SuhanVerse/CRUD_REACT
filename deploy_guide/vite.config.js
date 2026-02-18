import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  /**
   * Base path configuration for deployment
   * 
   * IMPORTANT: Choose ONE of these options:
   * 
   * Option 1 - Custom Domain (react.suhankhadka.com.np)
   * Use this if you have a custom domain set up in GitHub Pages
   */
  base: '/',
  
  /**
   * Option 2 - GitHub Subdomain (username.github.io/repo-name)
   * Use this if accessing via GitHub's default subdomain
   * Uncomment below and comment out Option 1
   */
  // base: '/CRUD_REACT/',
  
  /**
   * Development server configuration
   */
  server: {
    port: 5173,
    open: true, // Auto-open browser
  },
  
  /**
   * Build configuration
   */
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true for debugging production builds
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          'react-vendor': ['react', 'react-dom'],
          'toast-vendor': ['react-toastify'],
        },
      },
    },
  },
})
