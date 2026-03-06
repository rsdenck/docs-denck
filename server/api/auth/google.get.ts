export default defineEventHandler(async (event) => {
  // TODO: Implementar OAuth2 Google
  // Esta rota será implementada quando o backend Go estiver pronto
  
  const config = useRuntimeConfig()
  
  // Redirect para Google OAuth
  const googleAuthUrl = `https://accounts.google.com/oauth/authorize?` +
    `client_id=${config.googleClientId}&` +
    `redirect_uri=${config.googleRedirectUri}&` +
    `response_type=code&` +
    `scope=openid email profile`
  
  return sendRedirect(event, googleAuthUrl)
})