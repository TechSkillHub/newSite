<template>
  <div id="funil01" class="bg-offWhite h-screen overflow-x-hidden flex justify-center items-center text-center">
    <div class="max-w-screen-xl grid grid-flow-col gap-8 items-center h-fit">  
      <div class="grid grid-flow-row h-full gap-8">
        <h1 class="text-5xl title font-semibold uppercase leading-tight">Começando a sua <span class="text-primary font-theme font-normal">revolução digital</span></h1>
        <!-- <h2 class="title text-2xl">Ogânico:</h2> -->
        <div class="funnel">
          <div class="funnel-part">SEO</div>
          <!-- <div class="funnel-part">Site e LandingPage</div>
          <div class="funnel-part">WhatsApp</div>
          <div class="funnel-part">Venda</div> -->
          <!-- <div class="funnel-part"></div> -->
        </div>
        <p>SEO é um conjunto de técnicas e estratégias para sites ficarem melhor posicionados nos buscadores,<br> gerar reconhecimento de marca, aumentar o tráfego e as conversões.</p>
        <div class="flex gap-4">
          <div class="bg-gray-300 w-full h-80"></div>
          <div class="bg-gray-300 w-full h-80"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('#funil01 .title', {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1,
    stagger: 0.5,
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      trigger: '#funil01',
      start: 'top center',
      end: 'bottom center',
    },
  });
  gsap.from('#funil01 .funnel-part', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1.5,
    stagger: 0.5,
    scrollTrigger: {
      toggleActions: 'play reverse play reverse',
      trigger: '#funil01',
      start: 'top center',
      end: 'bottom center',
    },
  });
  
});
</script>

<style scoped>
.funnel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: auto;
}

.funnel-part {
    width: 100%;
    height: 80px;
    background: #4A90E2;
    clip-path: polygon(2% 0%, 98% 0%, 90% 100%, 10% 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

.funnel-part:nth-child(2) {
    width: 83%;
    background: #357ABD;
}

.funnel-part:nth-child(3) {
    width: 69%;
    background: #285A8E;
}

.funnel-part:nth-child(4) {
    width: 57.5%;
    background: #1D3C63;
}

/* .funnel-part:last-child {
    width: 20%;
    height: 40px;
    background: #12273D;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
} */
</style>