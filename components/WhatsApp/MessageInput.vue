<template>
  <div class="bg-[#2c2c2c] px-4 py-3 flex items-center">
    <div class="flex items-center space-x-3 mr-2">
      <button class="text-[#54656f]">
        <Icon name="mdi:emoticon-outline" class="w-6 h-6" />
      </button>
      <button class="text-[#54656f]">
        <Icon name="mdi:paperclip" class="w-6 h-6" />
      </button>
    </div>
    <div class="flex-1">
      <input
        v-model="messageText"
        type="text"
        placeholder="Digite uma mensagem"
        class="w-full py-2 px-4 rounded-lg focus:outline-none"
        @keyup.enter="sendMessage"
      />
    </div>
    <button 
      class="ml-2 text-[#54656f]"
      @click="sendMessage"
    >
      <Icon 
        :name="messageText.trim() ? 'mdi:send' : 'mdi:microphone'" 
        class="w-6 h-6" 
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['send-message'])
const messageText = ref('')

const sendMessage = () => {
  if (!messageText.value.trim()) return
  emit('send-message', messageText.value)
  messageText.value = ''
}
</script>
