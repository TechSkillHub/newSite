<template>
  <Icon 
    size="20"
    :class="icon == 'success' ? 'bg-success' : icon == 'warning' ? 'bg-warning' : 'bg-error'"
    :name="icon == 'success' ? success : icon == 'warning' ? warning : error" 
  />
</template>

<script setup lang="ts">
const success = ref('ph:check-circle-duotone')
const warning = ref('ph:warning-duotone')
const error = ref('ph:x-circle-duotone')

interface ModalProps {
  icon: string;
}
const props = defineProps<ModalProps>();

</script>

<style scoped>

</style>