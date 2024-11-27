<template>
  <div class="bg-darkTheme flex flex-col gap-4 relative py-12">
    
      <div class="container gap-4 flex flex-wrap">
        <EffectsCardHoverBorder v-for="(item, index) in services.items" :key="index">
          <div>
            <h1 class="md:text-3xl text-2xl text-offWhite font-semibold mb-4 uppercase">{{ item.title }}</h1>
            <p class="text-grayTheme uppercase">{{ item.description }}</p>
          </div>
          <img v-if="item.img" :src="item.img" :alt="`Imagem ${item.title}`">
          <FieldButton 
            v-if="item.cta"
            fullWidth
            class="uppercase rounded-full py-4 mx-auto"
            @click="sendMsg"
          >
            <span class="w-11/12">{{ item.cta }}</span>
            <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
          </FieldButton>
        </EffectsCardHoverBorder>
      </div>
    

    <div class="container mt-8">
      <FieldButton class="uppercase md:w-2/3 rounded-full py-4 mx-auto" @click="sendMsg">
        <span class="w-11/12">{{ services.cta }}</span>
        <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
      </FieldButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { whatsApp } from '~/utils/datas/whatsapp.data';
import { useContent } from '@/composables/useContent'

const content = await useContent()
const services = content.services

const sendMsg = () => {
  window.open(`${whatsApp}?text=${encodeURIComponent('Quero começar minha revolução!')}`, '_blank')
}
</script>

<style>
.wrapper>div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem
}
</style>