<template>
  <div
    ref="wrapper"
    class="wrapper grow"
  >
    <div class="bg-gray-700 rounded-xl p-6 h-full">
      <slot/>
    </div>
  </div>
</template>

<script setup>

const hover =() =>{

  const wrapper = document.querySelectorAll('.wrapper');
      
  for (let i = 0; i < wrapper.length; i++) {
    window.addEventListener('mousemove', ({ clientX, clientY }) => {
      
      const { x, y } = wrapper[i]?.getBoundingClientRect();
      const dx = clientX - (x + 0.5);
      const dy = clientY - (y + 0.5);
      
      wrapper[i]?.style.setProperty("--x", `${dx}px`);
      wrapper[i]?.style.setProperty("--y", `${dy}px`);
      
    }, false)
  }
} 

onMounted(() => {
  hover();
});

</script>

<style scoped>
.wrapper {
  @apply relative z-10 rounded-xl overflow-hidden p-[4px] transition-colors duration-300 min-h-80 md:w-1/4;
}
.wrapper:before {
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    var(--color-primary) 0,
    transparent 100%
  );
  will-change: background;
  content: "";
  display: block;
  position: absolute;
  left: -4px;
  top: -4px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  z-index: -1;
}
</style>