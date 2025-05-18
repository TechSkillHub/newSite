<template>
  <div class="max-h-screen relative">
    <SectionProposta ref="section1" />
    <SectionPropostaQuemSomos ref="section2" />
    <SectionPropostaFunil ref="section3" />
    <SectionPropostaFunil01 ref="section4" />
    <div class="h-screen" ref="section2"></div>
    <img :src="logo" alt="Logo" class="fixed bottom-8 right-8 w-28 h-28 opacity-70">
  </div>
</template>

<script setup lang="ts">
import logo from "~/assets/images/logo.svg"

definePageMeta({
  middleware: 'auth',
  auth: false,
  layout: 'clear'
});

let isScrolling: boolean = false;

const handleScroll = (event: WheelEvent) => {
  if (isScrolling) return;

  isScrolling = true;

  const deltaY = event.deltaY;
  const currentScroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const nextSection = deltaY > 0 ? currentScroll + windowHeight : currentScroll - windowHeight;

  window.scrollTo({
    top: nextSection,
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800); // Tempo de espera para evitar múltiplos scrolls
};

onMounted(() => {
  window.addEventListener('wheel', handleScroll, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll);
});
</script>

<style>

</style>