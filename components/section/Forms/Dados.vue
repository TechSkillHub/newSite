<template>
  <div class="scroll h-[70vh] overflow-y-scroll">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeeyyIY7aLPZn0BcRVYkrcb_FADjBrnmBCcQ254rhzxhkw5eQ/viewform?embedded=true" width="640" height="1900" frameborder="0" marginheight="0" marginwidth="0" class="mx-auto">Carregando…</iframe>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.scroll {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    @apply bg-grayTheme;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    @apply bg-primary;
  }
}
</style>