<script setup>
const { $directus, $readItems } = useNuxtApp()

const apiUrl = useRuntimeConfig().public.API_URL

const { data: hero } = await useAsyncData('block_hero', () => {
  return $directus.request($readItems('block_hero', {
    fields: ['title', 'description', 'image']
  }))
})

const image = computed(() => {
  const fileId = hero.value?.[0]?.image
  
  return fileId ? `${apiUrl}/assets/${fileId}` : null
})

console.log($directus)
</script>

<template>
  <div>
    <h1>{{ hero[0].title }}</h1>
    <p>{{ hero[0].description }}</p>
    <div>
      <img v-if="image" :src="image" alt="">
    </div>
  </div>
</template>
