<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: pages } = await useAsyncData('pages', () => {
  return $directus.request($readItems('pages', {
    fields: ['title', 'blocks.id', 'blocks.collection', 'blocks.item.*']
  }))
})

// const { data: posts } = await useAsyncData('posts', () => {
//   return $directus.request($readItems('posts'))
// })

console.log(pages.value)
</script>

<template>
  <div>
    <pre v-for="page in pages" :key="page">{{ page }}</pre>

    <button class="btn btn-primary">daisy</button>
  </div>
</template>
