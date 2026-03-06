export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  const USER = config.adminUser
  const PASS = config.adminPass
  
  if (body.user === USER && body.password === PASS) {
    const token = 'jwt-token-' + Date.now()
    
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      sameSite: 'lax'
    })
    
    return { status: 'ok' }
  }
  
  throw createError({
    statusCode: 401,
    message: 'Credenciais inválidas'
  })
})
