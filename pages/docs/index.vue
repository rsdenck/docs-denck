<script setup lang="ts">
const { data: categories } = await useAsyncData('doc-categories', () =>
  queryContent('public').find()
)

const groupedDocs = computed(() => {
  const groups: Record<string, any[]> = {}
  
  categories.value?.forEach(doc => {
    const cat = doc.category || 'outros'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(doc)
  })
  
  return groups
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="p-8 max-w-7xl mx-auto">
      <div class="mb-12">
        <h1 class="text-4xl font-bold neon-green mb-12">Documentação</h1>
        <p class="text-xl text-gray-400">
          Explore minha base de conhecimento técnico
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(docs, category) in groupedDocs" 
          :key="category"
          class="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-nuxt-green transition-colors"
        >
          <h2 class="text-2xl font-bold text-nuxt-green mb-4 capitalize">
            {{ category }}
          </h2>
          <ul class="space-y-2">
            <li v-for="doc in docs" :key="doc._path">
              <NuxtLink 
                :to="doc._path"
                class="text-gray-400 hover:text-nuxt-green transition-colors flex items-center gap-2"
              >
                <UIcon name="i-heroicons-document-text" class="w-4 h-4" />
                {{ doc.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
