<script setup lang="ts">
const props = defineProps<{
  page: any
}>()
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="flex">
      <Sidebar :category="page.category" />
      
      <main class="flex-1 p-8 max-w-4xl">
        <article class="prose prose-invert max-w-none">
          <h1 class="text-4xl font-bold neon-green mb-4">{{ page.title }}</h1>
          <p v-if="page.description" class="text-xl text-gray-400 mb-8">
            {{ page.description }}
          </p>
          <ContentRenderer :value="page" />
        </article>
      </main>
      
      <TableOfContents :page="page" />
    </div>
  </div>
</template>
