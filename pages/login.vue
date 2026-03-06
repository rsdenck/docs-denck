<script setup lang="ts">
const router = useRouter()
const toast = useToast()

const credentials = ref({
  user: '',
  password: ''
})

const loading = ref(false)
const googleLoading = ref(false)

async function handleLogin() {
  loading.value = true
  
  try {
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: credentials.value
    })
    
    if (response.status === 'ok') {
      toast.add({
        title: 'Login realizado com sucesso',
        color: 'green'
      })
      router.push('/admin/dashboard')
    }
  } catch (error) {
    toast.add({
      title: 'Credenciais inválidas',
      color: 'red'
    })
  } finally {
    loading.value = false
  }
}

async function loginWithGoogle() {
  googleLoading.value = true
  
  try {
    // Redirect para autenticação Google
    await navigateTo('/api/auth/google', { external: true })
  } catch (error) {
    toast.add({
      title: 'Erro na autenticação Google',
      color: 'red'
    })
  } finally {
    googleLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <UCard class="w-full max-w-md bg-gray-900 border border-gray-800">
      <template #header>
        <h2 class="text-2xl font-bold text-center neon-green">Login</h2>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormGroup label="Usuário">
          <UInput 
            v-model="credentials.user" 
            placeholder="admin"
            size="lg"
            required
          />
        </UFormGroup>

        <UFormGroup label="Senha">
          <UInput 
            v-model="credentials.password" 
            type="password"
            placeholder="••••••••"
            size="lg"
            required
          />
        </UFormGroup>

        <UButton 
          type="submit" 
          block 
          size="lg"
          :loading="loading"
          class="neon-button"
        >
          Entrar
        </UButton>
        
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-900 text-gray-400">ou</span>
          </div>
        </div>
        
        <UButton 
          @click="loginWithGoogle"
          block 
          size="lg"
          variant="outline"
          color="white"
          :loading="googleLoading"
        >
          <template #leading>
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </template>
          Continuar com Google
        </UButton>
      </form>

      <template #footer>
        <div class="text-center">
          <UButton to="/" variant="link" color="gray">
            Voltar para home
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
