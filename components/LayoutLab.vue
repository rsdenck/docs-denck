<script setup lang="ts">
const props = defineProps<{
  page: any
}>()
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <div class="flex">
      <Sidebar category="labs" />
      
      <main class="flex-1 p-8 max-w-5xl mx-auto">
        <div class="mb-8">
          <UBadge color="emerald" variant="subtle" size="lg">LAB</UBadge>
          <h1 class="text-4xl font-bold neon-green mt-4 mb-4">{{ page.title }}</h1>
        </div>

        <article class="prose prose-invert max-w-none">
          <ContentRenderer :value="page" />
        </article>
      </main>
    </div>
  </div>
</template>
