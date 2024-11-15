<template>
  <div class="cardGlow">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style scoped>
.cardGlow {
  @apply relative bg-gray-700 z-10 rounded-xl transition-all duration-300 w-full p-8;
}
.cardGlow:hover {
  z-index: 0;
  scale: 1.03;
  -webkit-box-shadow: 0px 0px 20px 10px rgba(0, 139, 139, 0.2);
  box-shadow: 0px 0px 20px 10px rgba(0, 139, 139, 0.2);
}
</style>