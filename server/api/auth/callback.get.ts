export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code as string
  const state = query.state as string
  
  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Authorization code missing'
    })
  }
  
  try {
    // Trocar code por access_token
    const tokenResponse = await $fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        client_id: config.githubClientId,
        client_secret: config.githubClientSecret,
        code: code
      }
    })
    
    const accessToken = tokenResponse.access_token
    
    if (!accessToken) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Failed to get access token'
      })
    }
    
    // Buscar dados do usuário
    const userResponse = await $fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'docs-denck'
      }
    })
    
    // Verificar se o usuário é autorizado
    const allowedUsers = ['rsdenck'] // Adicione outros usuários aqui
    const allowedOrgs = ['your-org'] // Adicione organizações aqui
    
    let isAuthorized = allowedUsers.includes(userResponse.login)
    
    if (!isAuthorized) {
      // Verificar organizações do usuário
      const orgsResponse = await $fetch('https://api.github.com/user/orgs', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': 'docs-denck'
        }
      })
      
      isAuthorized = orgsResponse.some(org => allowedOrgs.includes(org.login))
    }
    
    if (!isAuthorized) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Access denied. User not authorized.'
      })
    }
    
    // Criar JWT token
    const jwt = await createJWT({
      userId: userResponse.id,
      username: userResponse.login,
      email: userResponse.email,
      avatar: userResponse.avatar_url
    })
    
    // Definir cookie
    setCookie(event, 'auth_token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      sameSite: 'lax'
    })
    
    return sendRedirect(event, '/admin/dashboard')
    
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Authentication failed'
    })
  }
})

async function createJWT(payload: any) {
  const config = useRuntimeConfig()
  // Implementação simples de JWT (em produção, use uma biblioteca adequada)
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payloadStr = btoa(JSON.stringify({ ...payload, exp: Date.now() + (7 * 24 * 60 * 60 * 1000) }))
  const signature = btoa(config.jwtSecret + header + payloadStr) // Simplificado
  
  return `${header}.${payloadStr}.${signature}`
}