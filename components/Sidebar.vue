<script setup lang="ts">
const props = defineProps<{
  category?: string
}>()

const { data: navigation } = await useAsyncData('navigation', () => 
  queryContent('public')
    .where({ category: props.category })
    .only(['_path', 'title', 'category'])
    .find()
)

const groupedDocs = computed(() => {
  const groups: Record<string, any[]> = {}
  
  navigation.value?.forEach(doc => {
    const cat = doc.category || 'outros'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(doc)
  })
  
  return groups
})
</script>

<template>
  <aside class="w-64 border-r border-gray-800 bg-gray-900/30 p-6 overflow-y-auto">
    <div v-for="(docs, category) in groupedDocs" :key="category" class="mb-6">
      <h3 class="text-sm font-semibold text-nuxt-green uppercase mb-3">
        {{ category }}
      </h3>
      <ul class="space-y-2">
        <li v-for="doc in docs" :key="doc._path">
          <NuxtLink 
            :to="doc._path"
            class="block text-sm text-gray-400 hover:text-nuxt-green transition-colors py-1"
          >
            {{ doc.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
