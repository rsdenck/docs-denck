export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content'],
  
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Docs Denck - Ranlens Denck',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plataforma de documentação técnica minimalista' },
        { name: 'theme-color', content: '#00DC82' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/logo.svg' }
      ]
    }
  },
  
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
    githubClientId: process.env.GITHUB_CLIENT_ID || '',
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    githubRedirectUri: process.env.GITHUB_REDIRECT_URI || 'http://localhost:8080/api/auth/callback'
  },
  
  compatibilityDate: '2024-11-01'
})
