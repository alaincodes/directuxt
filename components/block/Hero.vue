<script setup>
const { $directus, $readItems } = useNuxtApp()

const { data: hero } = await useAsyncData('block_hero', () => {
  return $directus.request($readItems('block_hero', {
    fields: ['title', 'description', 'image']
  }))
})

console.log(hero.value)
</script>

<template>
  <div>
    <h1>{{ hero[0].title }}</h1>
    <p>{{ hero[0].description }}</p>

    <DirectusImage
      :uuid="hero[0].image"
      :alt="'Hero Image'"
      :fill="true"
      class="object-contain"
    />
  </div>
</template>
