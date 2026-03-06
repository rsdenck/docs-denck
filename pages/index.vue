<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-4xl">
      <h1 class="text-6xl font-bold neon-green">
        Ranlens Denck
      </h1>
      <p class="text-2xl text-gray-400">
        Seja Bem Vindo!
      </p>
      
      <div class="flex gap-4 justify-center mt-12">
        <UButton 
          to="/docs" 
          size="xl" 
          class="neon-button"
          label="Documentação"
        />
        <UButton 
          to="/login" 
          size="xl" 
          variant="outline"
          color="emerald"
          label="Login"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div class="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-nuxt-green transition-colors">
          <UIcon name="i-heroicons-book-open" class="w-8 h-8 text-nuxt-green mb-4" />
          <h3 class="text-lg font-semibold mb-2">DevOps</h3>
          <p class="text-sm text-gray-400">Terraform, Ansible, Docker</p>
        </div>
        
        <div class="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-nuxt-green transition-colors">
          <UIcon name="i-heroicons-server" class="w-8 h-8 text-nuxt-green mb-4" />
          <h3 class="text-lg font-semibold mb-2">Linux</h3>
          <p class="text-sm text-gray-400">Systemd, Networking, Shell</p>
        </div>
        
        <div class="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-nuxt-green transition-colors">
          <UIcon name="i-heroicons-cloud" class="w-8 h-8 text-nuxt-green mb-4" />
          <h3 class="text-lg font-semibold mb-2">Cloud</h3>
          <p class="text-sm text-gray-400">Kubernetes, AWS, Azure</p>
        </div>
        
        <div class="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-nuxt-green transition-colors">
          <UIcon name="i-heroicons-beaker" class="w-8 h-8 text-nuxt-green mb-4" />
          <h3 class="text-lg font-semibold mb-2">Labs</h3>
          <p class="text-sm text-gray-400">Proxmox, Wazuh, K8s HA</p>
        </div>
      </div>
    </div>
  </div>
</template>
