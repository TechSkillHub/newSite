<template>
  <div class="bg-darkTheme flex flex-col gap-4 relative py-12">
    
      <div class="container gap-4 flex flex-wrap">
        <EffectsCardHoverBorder v-for="(item, index) in services" :key="index">
          <div>
            <h1 class="text-4xl text-offWhite font-semibold mb-4">{{ item.title }}</h1>
            <p class="text-grayTheme uppercase">{{ item.description }}</p>
          </div>
          <img v-if="item.img" :src="item.img" :alt="`Imagem ${item.title}`">
          <FieldButton 
            v-if="item.cta"
            fullWidth
            class="uppercase rounded-full py-4 mx-auto md:text-xl text-lg"
          >
            <span class="w-11/12">{{ item.cta }}</span>
            <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
          </FieldButton>
        </EffectsCardHoverBorder>
      </div>
    

    <div class="container my-8">
      <FieldButton class="uppercase md:w-2/3 rounded-full py-4 mx-auto md:text-xl text-lg">
        <span class="w-11/12">Quero comerçar minha revolução</span>
        <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
      </FieldButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContent } from '@/composables/useContent'

const content = await useContent()
const services = content.services

</script>

<style>
.wrapper>div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>