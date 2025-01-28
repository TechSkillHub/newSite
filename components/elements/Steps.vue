<template>
  <div class="steps bg-white flex py-4">
    <div class="flex items-center" v-for="(item, index) in items" :key="index">
      <div class="h-[2px] w-8" :class="active >= index+1 ? 'bg-primary' : 'bg-grayTheme'"></div>
      <div class="rounded-full w-12 h-12 flex justify-center items-center" :class="active >= index+1 ? 'bg-primary' : 'bg-grayTheme'">
        <span class="text-xl text-white">{{ index+1 }}</span>
      </div>
    </div>
    <!-- <div class="flex items-center">
      <div class="h-[2px] w-8" :class="active ? 'bg-primary' : 'bg-offWhite'"></div>
      <div class="rounded-full w-8 h-8 flex justify-center items-center" :class="active ? 'bg-primary' : 'bg-offWhite'">
        <span class="text-xl text-offWhite">2</span>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const active = ref(2)

const items = [
  'Passo 1',
  'Passo 2',
  'Passo 3',
  'Passo 4',
]

</script>

<style lang="scss" scoped>
.steps {
  >:first-child {
    >:first-child {
      display: none;
    }
  }
}
</style>