<template>
  <NuxtLink :href="url" target="_blank" aria-label="Social Link">
    <Icon :name="icon" size="20" />
  </NuxtLink>
</template>

<script setup lang="ts">
interface AuthSocialButtonProps {
  icon: string;
  url: string
}
const props = defineProps<AuthSocialButtonProps>();
</script>

<style scoped>

</style>