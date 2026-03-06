<script setup lang="ts">
const props = defineProps<{
  page: any
}>()
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="p-8 max-w-6xl mx-auto">
      <div class="mb-8">
        <UBadge color="emerald" variant="subtle" size="lg">CHEATSHEET</UBadge>
        <h1 class="text-4xl font-bold neon-green mt-4">{{ page.title }}</h1>
      </div>

      <article class="prose prose-invert max-w-none">
        <ContentRenderer :value="page" class="cheatsheet-content" />
      </article>
    </main>
  </div>
</template>

<style scoped>
.cheatsheet-content :deep(pre) {
  @apply bg-gray-900 border border-gray-800 text-sm;
}

.cheatsheet-content :deep(h2) {
  @apply text-nuxt-green border-b border-gray-800 pb-2 mb-4;
}
</style>
