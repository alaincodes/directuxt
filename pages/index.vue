<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: pages } = await useAsyncData('pages', () => {
  return $directus.request($readItems('pages', {
    fields: ['title', 'blocks.id', 'blocks.collection', 'blocks.item.*']
  }))
})

</script>

<template>
  <div>
    <Hero />
    <pre v-for="page in pages" :key="page">{{ page }}</pre>

    <button class="btn btn-primary">daisy</button>
  </div>
</template>
