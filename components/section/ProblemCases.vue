<template>
  <div class="bg-darkTheme flex flex-col gap-4 relative">
    <EffectsScrollX :line1="itens1" :line2="itens2"/>
  </div>
</template>

<script setup>
const itens1 = ref([
  {title: 'title', description: 'Description'},
  {title: 'title', description: 'Description'},
  {title: 'title', description: 'Description'},
  {title: 'title', description: 'Description'},
  {title: 'title', description: 'Description'},
  {title: 'title', description: 'Description'},
])
const itens2 = ref([
  {title: 'title 2', description: 'Description 2'},
  {title: 'title 2', description: 'Description 2'},
  {title: 'title 2', description: 'Description 2'},
  {title: 'title 2', description: 'Description 2'},
])
</script>

<style scoped>

</style>