<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

function logout() {
  const token = useCookie('auth_token')
  token.value = null
  router.push('/login')
}

const { data: privateDocs } = await useAsyncData('private-docs', () =>
  queryContent('private').find()
)
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold neon-green">Dashboard Admin</h1>
        <UButton @click="logout" color="red" variant="outline">
          Logout
        </UButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <UCard class="bg-gray-900 border border-gray-800">
          <div class="flex items-center gap-4">
            <UIcon name="i-heroicons-document-text" class="w-12 h-12 text-nuxt-green" />
            <div>
              <p class="text-3xl font-bold">{{ privateDocs?.length || 0 }}</p>
              <p class="text-gray-400">Docs Privadas</p>
            </div>
          </div>
        </UCard>

        <UCard class="bg-gray-900 border border-gray-800">
          <div class="flex items-center gap-4">
            <UIcon name="i-heroicons-beaker" class="w-12 h-12 text-nuxt-green" />
            <div>
              <p class="text-3xl font-bold">5</p>
              <p class="text-gray-400">Labs Ativos</p>
            </div>
          </div>
        </UCard>

        <UCard class="bg-gray-900 border border-gray-800">
          <div class="flex items-center gap-4">
            <UIcon name="i-heroicons-folder" class="w-12 h-12 text-nuxt-green" />
            <div>
              <p class="text-3xl font-bold">12</p>
              <p class="text-gray-400">Categorias</p>
            </div>
          </div>
        </UCard>
      </div>

      <UCard class="bg-gray-900 border border-gray-800">
        <template #header>
          <h2 class="text-xl font-semibold">Documentação Privada</h2>
        </template>

        <div class="space-y-2">
          <NuxtLink 
            v-for="doc in privateDocs" 
            :key="doc._path"
            :to="doc._path"
            class="block p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
          >
            <h3 class="font-semibold text-nuxt-green">{{ doc.title }}</h3>
            <p class="text-sm text-gray-400">{{ doc.description }}</p>
          </NuxtLink>
        </div>
      </UCard>
    </div>
  </div>
</template>
