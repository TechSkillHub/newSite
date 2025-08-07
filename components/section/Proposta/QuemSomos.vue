<template>
  <div id="quem-somos" class="bg-offWhite h-screen overflow-x-hidden flex justify-center items-center">
    <div class="max-w-screen-lg grid grid-flow-col gap-8 items-center h-fit">
      <img :src="logo" alt="Logo" class="w-80 h-80 logo">
  
      <div class="grid grid-flow-row h-full gap-8">
        <h1 class="text-5xl title font-semibold">Quem é a <span class="text-primary font-theme font-normal">Tech Skill Hub</span>?</h1>
        <p class="text-2xl">
          A <span class="text-primary font-theme">TSH</span> foi criada quando identificamos a dificuldade de diversos setores em se posicionar no digital, assim surgiu nosso nome onde a ideia é juntar diversas habilidades em um único lugar de modo que podemos ajudar nosso clientes em toda a a jornada deles no universo do digital.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logo.svg"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('#quem-somos .title', {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      trigger: '#quem-somos',
      start: 'top center',
      end: 'bottom center',
    },
  });
  gsap.from('#quem-somos p', {
    x: 500,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      trigger: '#quem-somos',
      start: 'top center',
      end: 'bottom center',
    },
  });
  gsap.from('#quem-somos .logo', {
    x: -500,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      trigger: '#quem-somos',
      start: 'top center',
      end: 'bottom center',
    },
  });
});
</script>

<style scoped>

</style>