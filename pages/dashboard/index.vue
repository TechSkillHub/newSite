<template>
  <div class="bg-secondaryLight flex items-center justify-center h-[2000px]">
    <h1 class="text-4xl font-bold">HOME ADMIN</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: true,  
  admin: false,
  layout: 'admin'
});
</script>
