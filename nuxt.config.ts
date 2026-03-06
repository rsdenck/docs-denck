export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content'],
  
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark'
      }
    }
  },
  
  runtimeConfig: {
    adminUser: process.env.ADMIN_USER || 'admin',
    adminPass: process.env.ADMIN_PASS || 'admin123',
    jwtSecret: process.env.JWT_SECRET || 'secret-key-change-in-production',
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    googleRedirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:8080/api/auth/callback',
    goBackendUrl: process.env.GO_BACKEND_URL || 'http://localhost:8000'
  },
  
  compatibilityDate: '2024-11-01'
})
