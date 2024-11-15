<template>
  <div class="bg-footer text-footer w-full py-8 z-10 relative border-t border-grayTheme">
    <div class="container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
      <div class="md:w-1/3 md:justify-start">
        <LogosBrand/>
      </div>
      <div class="md:w-2/3">
        <!-- <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere arcu ut turpis elementum pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p> -->
      </div>
      <div class="md:w-1/3 flex justify-end gap-3">
        <IconsSocialIcon v-for="(item, index) in socialLinks" :key="index" :icon="item.icon" :url="item.url" />
      </div>
    </div>
    <div class="container pt-4">
      <small class="block text-center">© 2024 TechSkillHub LTDA. Todos os direitos reservados.</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/utils/datas/socialMedia.data';

</script>

<style scoped>

</style>