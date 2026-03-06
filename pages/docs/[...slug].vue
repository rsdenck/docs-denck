<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`docs-${route.path}`, () => 
  queryContent(route.path).findOne()
)

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Página não encontrada' })
}

// Verificar se é conteúdo privado
if (page.value.visibility === 'private') {
  const token = useCookie('auth_token')
  if (!token.value) {
    navigateTo('/login')
  }
}

const template = computed(() => page.value?.template || 'docs')
</script>

<template>
  <div>
    <LayoutDocs v-if="template === 'docs'" :page="page" />
    <LayoutLab v-else-if="template === 'lab'" :page="page" />
    <LayoutKnowledge v-else-if="template === 'knowledge'" :page="page" />
    <LayoutCheatsheet v-else-if="template === 'cheatsheet'" :page="page" />
    <LayoutDocs v-else :page="page" />
  </div>
</template>
