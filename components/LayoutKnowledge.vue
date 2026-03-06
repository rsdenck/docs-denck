<script setup lang="ts">
const props = defineProps<{
  page: any
}>()

const { data: allDocs } = await useAsyncData('knowledge-docs', () =>
  queryContent('public').find()
)

const categories = computed(() => {
  const cats: Record<string, any[]> = {}
  allDocs.value?.forEach(doc => {
    const cat = doc.category || 'outros'
    if (!cats[cat]) cats[cat] = []
    cats[cat].push(doc)
  })
  return cats
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="p-8 max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold neon-green mb-12">Base de Conhecimento</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(docs, category) in categories" 
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
                class="text-gray-400 hover:text-nuxt-green transition-colors"
              >
                {{ doc.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
