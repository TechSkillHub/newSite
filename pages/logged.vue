<template>
  <div class="bg-secondary flex items-center justify-center">
    <h1 class="text-4xl font-bold">HOME LOGGED</h1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth',
  auth: true,
  layout: 'default'
});
</script>
