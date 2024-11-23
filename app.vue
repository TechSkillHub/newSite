<template>
  <ElementsModal />
  <ElementsLoading />
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
import { generateMeta } from '@/utils/constants/generateMeta';

useHead({
  title: 'Tech Skill Hub - A sua revolução digital!',
  meta: generateMeta(),
  htmlAttrs: {
    lang: 'pt-BR',
  },
  script: [
    {
      src: "https://unpkg.com/vue-typer/dist/vue-typer.min.js",
      crossorigin: "anonymous",
      tagPosition: 'head'
    }
  ],
  link: []
})

import { useAuthStore } from './stores/auth.store';

const authStore = useAuthStore();
authStore.initializeStore();

</script>

<style>

</style>
