<template>
  <div class="flex justify-between items-center p-3 bg-[#2c2c2c]">
    <div class="flex items-center">
      <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
        <Icon :name="contact.avatar" :alt="contact.name" class="w-full h-full object-cover" />
      </div>
      <div>
        <h3 class="font-medium text-white">{{ contact.name }}</h3>
        <span class="text-xs text-gray-500">Online</span>
      </div>
    </div>
    <div class="flex items-center space-x-4 text-[#54656f]">
      <button class="p-1">
        <Icon name="mdi:magnify" class="w-5 h-5" />
      </button>
      <button class="p-1">
        <Icon name="mdi:dots-vertical" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  contact: {
    type: Object,
    required: true
  }
})
</script>
