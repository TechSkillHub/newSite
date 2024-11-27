<template>
  <div class="bg-darkTheme flex items-center min-h-[calc(100vh-var(--height-header))] py-8">
    <div class="container flex justify-between items-center md:h-[480px] flex-col md:flex-row gap-8">
      <div class="md:w-1/2 h-full">
        <h1 class="md:text-8xl text-5xl text-center md:text-left font-bold uppercase text-white">
          Sua<br/>
          <EffectsWriter :array="['Revolução', 'Presença', 'Solução']" caret="cursor" class=""/>
          Digital<br/>
          Começa<br/>
          Aqui<span class="text-primary">.</span>
        </h1>
      </div>

      <div class="md:w-[46%] flex flex-col justify-between h-full">
        <p class="text-justify text-grayTheme">
          {{ hero.text }}
        </p>
        <div class="flex flex-col gap-2 md:items-end mt-8">
          <div 
            v-for="(item, index) in hero.items" :key="index"
            class="text-white uppercase rounded-full px-2 py-2 bg-gray-700 md:w-2/3 flex items-center gap-2 leading-none">
            <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
            <span class="mt-[2px]">{{ item }}</span>
          </div>
          
          <FieldButton class="uppercase md:w-2/3 mt-4 rounded-full py-4" @click="sendMsg">
            <span class="w-11/12">{{ hero.cta }}</span>
            <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
          </FieldButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { whatsApp } from '~/utils/datas/whatsapp.data'
import { useContent } from '@/composables/useContent'

const content = await useContent()
const hero = content.hero

const sendMsg = () => {
  window.open(`${whatsApp}?text=${encodeURIComponent('Quero explorar a mudança digital!')}`, '_blank')
}

</script>

<style scoped>

</style>