<template>
  <div class="mask grid gap-4 overflow-hidden">

    <div class="carousel">
      <div class="group">
        <div class="card" v-for="(item, index) in line1" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div aria-hidden class="group">
        <div class="card" v-for="(item, index) in line1" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div v-if="line2" class="carousel">
      <div class="group inverse">
        <div class="card" v-for="(item, index) in line2" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div aria-hidden class="group inverse">
        <div class="card" v-for="(item, index) in line2" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface ScrollX {
  line1: Array<any>;
  line2: Array<any>;
}

const props = defineProps<ScrollX>();

</script>

<style scoped>
.mask {
  -webkit-mask: linear-gradient(90deg, #0000, #000 5% 95%, #0000);
}
.carousel {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  >* {
    flex: 0 0 100%;
  }
  &:hover .group {
    animation-play-state: paused;
  }
}

.card {
  @apply md:min-h-40 w-full rounded-xl p-4;
  @apply bg-gray-700 text-offWhite;
  @apply flex justify-center items-center;
  h1 {
    @apply md:text-2xl text-primary font-bold uppercase;
  }
  p {
    @apply md:text-xl min-w-40 text-center
  }
}

.group {
  display: flex;
  gap: 1rem;
  will-change: transform;
  animation: scrolling 30s linear infinite;
  &.inverse {
    animation-direction: reverse;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
