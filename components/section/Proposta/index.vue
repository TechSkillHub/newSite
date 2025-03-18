<template>
  <div id="capa" class="bg-offWhite h-screen overflow-x-hidden flex justify-center items-center">
    <div class="max-w-screen-lg grid gap-8 h-fit text-center">
      <h1 class="text-5xl title uppercase">Proposta Comercial</h1>
      <h1 class="text-3xl title">(Serviço Oferecido)</h1>
      <h1 class="text-7xl title uppercase text-primary font-bold mt-8">(Cliente)</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
    
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    
    gsap.registerPlugin(ScrollTrigger);
    
    onMounted(() => {
      gsap.from('#capa .title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          toggleActions: 'play reverse play reverse',
          trigger: '#capa',
          start: 'top center',
          end: 'bottom center',
        },
      });
    });
</script>

<style scoped>

</style>