<template>
  <div class="hidden md:block h-screen relative md:w-3/12">
    <aside class="bg-darkTheme left-0 h-full p-8 fixed md:w-1/5 flex flex-col justify-between">
      
      <ul class="divide-y flex flex-col text-offWhite">
        <li v-for="(item, index) in adminNav" :key="index">
          <NuxtLink :to="item.link" class="my-4 inline-block">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <LogosBrand class="justify-center"/>
    </aside>
  </div>
  <aside class="md:hidden p-5 transform top-0 left-0 w-9/12 bg-white fixed h-full ease-in-out transition-all duration-300 z-40" :class="isOpen ? '-translate-x-0' : '-translate-x-full'">
    <div class="bg-white rounded-r-full w-auto h-14 flex items-center justify-center absolute -right-10 top-5">
      <Icon :name="!isOpen ? 'tabler:arrow-badge-right-filled' : 'tabler:arrow-badge-left'" size="40" class="bg-primary mr-1" @click="drawer"/>
    </div>
    <LogosBrand class="pb-6 border-b"/>
    <ul class="divide-y flex flex-col">
      <li v-for="(item, index) in adminNav" :key="index">
        <NuxtLink :to="item.link" @click="isOpen = false" class="my-4 inline-block">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { adminNav } from '~/utils/datas/dashboardNav.data';

const isOpen = ref(false);

const drawer = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  }
}, { immediate: true });

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>

</style>