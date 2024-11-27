<template>
  <div class="bg-gray-700 flex flex-col gap-4 relative py-12" id="expertises">
    <div class="container flex justify-between items-center flex-col md:flex-row gap-12 md:gap-0">
      <div class="flex justify-end items-center gap-4 md:w-1/3 w-full">
        <EffectsNumberRotate :endAmount='26' :duration='1' prefix="+" class="md:w-28 w-[40%] text-right"/>
        <span class="w-[60%]">Anos de<br/>experiência</span>
      </div>
      <div class="flex justify-end items-center gap-4 md:w-1/3 w-full">
        <EffectsNumberRotate :endAmount='73' :duration='3' suffix="K" class="md:w-40 w-[40%] text-right"/>
        <span class="w-[60%]">Horas<br/>trabalhadas</span>
      </div>
      <div class="flex justify-end items-center gap-4 md:w-1/3 w-full">       
        <EffectsNumberRotate :endAmount='42' :duration='2' class="md:w-20 w-[40%] text-right"/>
        <span class="w-[60%]">Projetos<br/>entregues</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
span {
  @apply text-primary text-2xl uppercase leading-none font-semibold
}
</style>