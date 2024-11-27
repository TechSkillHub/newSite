<template>
  <div class="bg-darkTheme flex flex-col gap-4 relative py-12">
    <div class="container flex flex-col md:flex-row justify-between md:items-center mb-8 text-center my-8">
      <h1 class="md:text-4xl text-3xl text-offWhite font-bold uppercase">{{ problems.title }}</h1>
      <h2 class="md:text-xl text-primary font-semibold uppercase">{{ problems.subtitle }}</h2>
    </div>
    
    <EffectsScrollX :line1="problems.line1" :line2="problems.line2"/>

    <div class="container mt-8">
      <FieldButton class="uppercase md:w-2/3 rounded-full py-4 mx-auto" @click="sendMsg">
        <span class="w-11/12">{{ problems.cta }}</span>
        <Icon name="material-symbols:arrow-insert" class="-scale-x-100 text-3xl" />
      </FieldButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { whatsApp } from '~/utils/datas/whatsapp.data'
import { useContent } from '@/composables/useContent'

const content = await useContent()
const problems = content.problems

const sendMsg = () => {
  window.open(`${whatsApp}?text=${encodeURIComponent('Como resolver esses problemas?')}`, '_blank')
}
</script>

<style scoped>

</style>