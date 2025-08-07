<template>
  <div 
    class="flex items-center px-3 py-3 cursor-pointer hover:bg-[#454545] rounded-lg" 
    :class="{ 'bg-[#454545]': isActive }"
  >
    <div class="relative mr-3">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <Icon :name="contact.avatar" :alt="contact.name" class="w-full h-full object-cover" />
      </div>
      <div v-if="contact.unread" class="absolute -top-1 -right-1 bg-[#25d366] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
        {{ contact.unread }}
      </div>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex justify-between">
        <h3 class="font-medium truncate">{{ contact.name }}</h3>
        <span class="text-xs text-gray-500">{{ contact.time }}</span>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500 truncate pr-2">{{ contact.lastMessage }}</p>
        <div v-if="contact.unread === 0" class="text-[#8696a0]">
          <Icon name="mdi:check-all" class="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  contact: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>
