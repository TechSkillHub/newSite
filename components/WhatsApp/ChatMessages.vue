<template>
  <div class="flex-1 overflow-y-auto p-5 bg-[#efeae2] bg-opacity-50 bg-whatsLg">
    <div class="flex flex-col space-y-2">
      <div v-for="message in messages" :key="message.id" class="flex">
        <div 
          class="max-w-[65%] px-2 py-1.5 rounded-lg relative text-white" 
          :class="[
            message.senderId === currentUser.id 
              ? 'ml-auto bg-[#005c4b] rounded-tr-none' 
              : 'bg-[#363636] rounded-tl-none'
          ]"
        >
          <p>{{ message.content }}</p>
          <div class="flex items-center justify-end space-x-1 mt-1">
            <span class="text-xs text-gray-500">{{ message.timestamp }}</span>
            <div v-if="message.senderId === currentUser.id">
              <Icon 
                :name="message.read ? 'mdi:check-all' : 'mdi:check'" 
                :class="[
                  'w-3 h-3', 
                  message.read ? 'bg-[#47afd5]' : 'bg-[#82afa7]'
                ]" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Message {
  id: number
  content: string
  timestamp: string
  senderId: number
  received: boolean
  read: boolean
}

interface User {
  id: number
  name: string
  avatar: string
}

defineProps({
  messages: {
    type: Array as PropType<Message[]>,
    required: true
  },
  currentUser: {
    type: Object as PropType<User>,
    required: true
  }
})
</script>
