<template>
  <div class="bg-gray-700 flex flex-col gap-4 relative py-12" id="expertises">
    <div class="container flex justify-between items-center flex-col md:flex-row gap-12 md:gap-0">
      <div class="flex justify-center items-center gap-4 w-1/3">
        <EffectsNumberRotate :endAmount='26' :duration='1' prefix="+" class="w-28"/>
        <span>Anos de<br/>experiência</span>
      </div>
      <div class="flex justify-center items-center gap-4 w-1/3">
        <EffectsNumberRotate :endAmount='73' :duration='3' suffix="K" class="w-40 text-right"/>
        <span>Horas<br/>trabalhadas</span>
      </div>
      <div class="flex justify-center items-center gap-4 w-1/3">       
        <EffectsNumberRotate :endAmount='42' :duration='2' class="w-20"/>
        <span>Projetos<br/>entregues</span>
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