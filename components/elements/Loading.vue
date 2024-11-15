<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="loading.show">

      <div class="loader_mask"></div>

      <div class="loader_wrapper">
        
        <span class="loader"></span>
        
      </div>
    </div>
    
  </transition>
</template>

<script setup lang="ts">
import "~/assets/css/loading.css"
const loading = useLoadingStore();

</script>

<style scoped>

</style>