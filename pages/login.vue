<script setup lang="ts">
const router = useRouter()
const toast = useToast()

const credentials = ref({
  user: '',
  password: ''
})

const loading = ref(false)

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
