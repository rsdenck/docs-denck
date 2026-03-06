<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'DevOps', to: '/docs/devops' },
  { label: 'Linux', to: '/docs/linux' },
  { label: 'Cloud', to: '/docs/cloud' },
  { label: 'Networking', to: '/docs/networking' },
  { label: 'Labs', to: '/docs/labs' }
]

const isAuthenticated = computed(() => {
  const token = useCookie('auth_token')
  return !!token.value
})
</script>

<template>
  <nav class="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-bold neon-green">
          Ranlens Denck
        </NuxtLink>

        <div class="hidden md:flex items-center gap-6">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="text-gray-300 hover:text-nuxt-green transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-4">
          <UButton 
            v-if="isAuthenticated"
            to="/admin/dashboard"
            variant="outline"
            color="emerald"
            size="sm"
          >
            Admin
          </UButton>
          <UButton 
            v-else
            to="/login"
            variant="outline"
            color="emerald"
            size="sm"
          >
            Login
          </UButton>
        </div>
      </div>
    </div>
  </nav>
</template>
