export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // GitHub OAuth URL
  const githubAuthUrl = `https://github.com/login/oauth/authorize?` +
    `client_id=${config.githubClientId}&` +
    `redirect_uri=${config.githubRedirectUri}&` +
    `scope=user:email read:org&` +
    `state=${generateRandomState()}`
  
  return sendRedirect(event, githubAuthUrl)
})

function generateRandomState() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}