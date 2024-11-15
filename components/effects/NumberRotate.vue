<template>
  <div>
    <Vue3autocounter ref='counter' :prefix='prefix' :suffix='suffix' :startAmount='0' :endAmount='endAmount' :duration='duration' :autoinit='true' class="text-white text-6xl font-bold"/>
  </div>
</template>

<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter';
interface NumberRotate {
  endAmount: number;
  duration: any;
  prefix?: string;
  suffix?: string;
}
const props = defineProps<NumberRotate>();

const counter = ref()
const updateScrollY = () => {
  const el = document.getElementById('expertises');
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // O elemento está visível na tela
          counter.value.start();
        } else {
          // O elemento saiu da tela
          counter.value.stop(); // ou qualquer ação de pausa
        }
      });
    },
    { threshold: 0.1 } // Chama o callback quando 10% do elemento estiver visível
  );

  observer.observe(el);
};

onMounted(() => {
  updateScrollY();
});

onBeforeUnmount(() => {
  const el = document.getElementById('expertises');
  if (el) {
    const observer = new IntersectionObserver(() => {});
    observer.unobserve(el);
  }
});

</script>

<style scoped>

</style>