export default defineEventHandler(async (event) => {
  // TODO: Implementar callback do Google OAuth
  // Esta rota processará o retorno do Google e criará a sessão
  
  const query = getQuery(event)
  const code = query.code as string
  
  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Authorization code missing'
    })
  }
  
  // TODO: Trocar code por access_token com Google
  // TODO: Buscar dados do usuário
  // TODO: Salvar no backend Go
  // TODO: Criar sessão JWT
  
  return sendRedirect(event, '/admin/dashboard')
})