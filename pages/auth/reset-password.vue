<template>
  <div class="flex flex-col items-center justify-center gap-8 container">
    <h1 class="text-3xl font-bold">Create new password</h1>
      
    <FormsResetPassword />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

</script>
