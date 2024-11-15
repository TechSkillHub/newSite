<template>
  <div class="mask grid gap-4 overflow-hidden">

    <div class="carousel">
      <div class="group">
        <div class="card h-40" v-for="(item, index) in line1" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div aria-hidden class="group">
        <div class="card h-40" v-for="(item, index) in line1" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div v-if="line2" class="carousel">
      <div class="group inverse">
        <div class="card h-40" v-for="(item, index) in line2" :key="index">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div aria-hidden class="group inverse">
        <div class="card h-40" v-for="(item, index) in line2" :key="index">
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
  @apply bg-gray-700;
  width: 100%;
  color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  h1 {
    color: var(--color-primary);
    font-weight: bold;
    font-size: xx-large;
    text-transform: uppercase;
  }
  p {
    font-size: medium
  }
}

.group {
  display: flex;
  gap: 1rem;
  /* Add padding to the right to create a gap between the last and first card. */
  will-change: transform;
  /* We should be nice to the browser - let it know what we're going to animate. */
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
