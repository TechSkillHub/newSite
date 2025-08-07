<template>
  <div class="w-[400px] flex flex-col border-r border-[#222222] bg-[#2c2c2c] text-white">
    <!-- Header -->
    <div class="flex justify-between items-center p-3">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <Icon name="mdi:user" alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="flex items-center space-x-4 text-[#54656f]">
        <button class="p-1">
          <Icon name="mdi:dots-vertical" class="w-6 h-6" />
        </button>
        <button class="p-1">
          <Icon name="mdi:message-text" class="w-6 h-6" />
        </button>
        <button class="p-1">
          <Icon name="mdi:account-circle" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Search -->
    <div class="p-2">
      <div class="bg-[#383838] rounded-lg px-3 py-2 flex items-center gap-3">
        <Icon name="mdi:magnify" class="text-[#54656f] w-5 h-5" />
        <input
          type="text"
          placeholder="Pesquisar ou começar uma nova conversa"
          class="bg-transparent outline-none flex-1 text-sm"
        />
      </div>
    </div>

    <!-- Contatos -->
    <div class="flex-1 overflow-y-auto space-y-1">
      <div v-for="contact in contacts" :key="contact.id" @click="$emit('select-chat', contact)">
        <WhatsAppContactCard 
          :contact="contact" 
          :isActive="activeChat?.id === contact.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Contact {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
}

defineProps({
  contacts: {
    type: Array as PropType<Contact[]>,
    required: true
  },
  activeChat: {
    type: Object as PropType<Contact | null>,
    default: null
  }
})

defineEmits(['select-chat'])
</script>
