<script setup lang="ts">
const props = defineProps<{
  page: any
}>()

const toc = computed(() => props.page?.body?.toc?.links || [])
</script>

<template>
  <aside v-if="toc.length" class="w-64 border-l border-gray-800 bg-gray-900/30 p-6 overflow-y-auto">
    <h3 class="text-sm font-semibold text-nuxt-green uppercase mb-4">
      Nesta página
    </h3>
    <ul class="space-y-2">
      <li v-for="link in toc" :key="link.id">
        <a 
          :href="`#${link.id}`"
          class="block text-sm text-gray-400 hover:text-nuxt-green transition-colors"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>
