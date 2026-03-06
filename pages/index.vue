<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4">
    <div class="text-center space-y-8 max-w-4xl">
      <div class="flex flex-col items-center gap-6">
        <img src="/logo.svg" alt="Docs Denck Logo" class="w-24 h-24 animate-pulse" />
        <h1 class="text-6xl font-bold neon-green">
          Ranlens Denck
        </h1>
      </div>
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
        <div class="p-6 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:border-nuxt-green/50 transition-all duration-300 backdrop-blur-sm">
          <div class="w-12 h-12 bg-nuxt-green/10 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-nuxt-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-100">Infraestrutura</h3>
          <p class="text-sm text-gray-400">Arquitetura e soluções de infraestrutura moderna</p>
        </div>
        
        <div class="p-6 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:border-nuxt-green/50 transition-all duration-300 backdrop-blur-sm">
          <div class="w-12 h-12 bg-nuxt-green/10 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-nuxt-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-100">Sistemas</h3>
          <p class="text-sm text-gray-400">Administração e configuração de sistemas</p>
        </div>
        
        <div class="p-6 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:border-nuxt-green/50 transition-all duration-300 backdrop-blur-sm">
          <div class="w-12 h-12 bg-nuxt-green/10 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-nuxt-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586l-2 2V6H5v12h4v2H4a1 1 0 0 1-1-1V4z"/>
              <path d="m21.707 10.707-2.414-2.414a1 1 0 0 0-1.414 0l-6.586 6.586a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1h2.414a1 1 0 0 0 .707-.293l6.586-6.586a1 1 0 0 0 0-1.414z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-100">Desenvolvimento</h3>
          <p class="text-sm text-gray-400">Práticas e metodologias de desenvolvimento</p>
        </div>
        
        <div class="p-6 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:border-nuxt-green/50 transition-all duration-300 backdrop-blur-sm">
          <div class="w-12 h-12 bg-nuxt-green/10 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-nuxt-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2 text-gray-100">Laboratórios</h3>
          <p class="text-sm text-gray-400">Experimentos e projetos práticos</p>
        </div>
      </div>
    </div>
  </div>
</template>
