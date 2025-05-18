<template>
  <div class="flex h-screen bg-[#f0f2f5]">
    <!-- Sidebar (Contatos e Configurações) -->
    <WhatsAppSidebar :contacts="contacts" :activeChat="activeChat" @select-chat="setActiveChat" />
    
    <!-- Área de Chat -->
    <div class="flex-1 flex flex-col">
      <template v-if="activeChat">
        <WhatsAppChatHeader :contact="activeChat" />
        <WhatsAppChatMessages :messages="messages" :currentUser="currentUser" />
        <WhatsAppMessageInput @send-message="sendMessage" />
      </template>
      <div v-else class="flex-1 flex items-center justify-center bg-[#f0f2f5] border-b border-l border-[#d1d7db]">
        <div class="text-center text-gray-500">
          <div class="mb-6">
            <Icon name="mdi:whatsapp" class="w-16 h-16 mx-auto text-gray-300" />
          </div>
          <h1 class="text-3xl font-light mb-3">WhatsApp Web</h1>
          <p class="max-w-md">
            Envie e receba mensagens sem precisar manter seu celular conectado.
            <br>Use o WhatsApp em até 4 dispositivos conectados e 1 celular ao mesmo tempo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
definePageMeta({
  middleware: 'auth',
  auth: false,
  layout: 'clear'
});

interface Contact {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
}

interface Message {
  id: number
  content: string
  timestamp: string
  senderId: number
  received: boolean
  read: boolean
}

const currentUser = {
  id: 1,
  name: 'Eu',
  avatar: 'mdi:user'
}

const contacts = ref<Contact[]>([
  {
    id: 2,
    name: 'João Silva',
    avatar: 'mdi:user',
    lastMessage: 'Tudo bem?',
    time: '10:30',
    unread: 2
  },
  {
    id: 3,
    name: 'Maria Oliveira',
    avatar: 'mdi:user',
    lastMessage: 'Me liga quando puder',
    time: '09:15',
    unread: 0
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    avatar: 'mdi:user',
    lastMessage: 'Vamos marcar aquele café',
    time: 'Ontem',
    unread: 0
  },
  {
    id: 5,
    name: 'Família',
    avatar: 'mdi:user',
    lastMessage: 'Ana: Vamos nos encontrar domingo?',
    time: 'Ontem',
    unread: 5
  }
])

// Armazenar mensagens para cada contato
const chatMessages = ref<Record<number, Message[]>>({
  2: [ // João Silva
    {
      id: 1,
      content: 'Olá João, tudo bem?',
      timestamp: '10:20',
      senderId: 1, // Eu
      received: true,
      read: true
    },
    {
      id: 2,
      content: 'Tudo ótimo! E com você?',
      timestamp: '10:21',
      senderId: 2, // João
      received: true,
      read: true
    },
    {
      id: 3,
      content: 'Estou bem também. Vamos marcar algo para o final de semana?',
      timestamp: '10:25',
      senderId: 1, // Eu
      received: true,
      read: true
    }
  ],
  3: [ // Maria Oliveira
    {
      id: 1,
      content: 'Oi Maria, preciso falar com você',
      timestamp: '09:10',
      senderId: 1, // Eu
      received: true,
      read: true
    },
    {
      id: 2,
      content: 'Me liga quando puder',
      timestamp: '09:15',
      senderId: 3, // Maria
      received: true,
      read: true
    }
  ],
  4: [ // Carlos Eduardo
    {
      id: 1,
      content: 'Oi Carlos, tudo certo?',
      timestamp: '08:30',
      senderId: 1, // Eu
      received: true,
      read: true
    },
    {
      id: 2,
      content: 'Tudo bem, e você?',
      timestamp: '08:35',
      senderId: 4, // Carlos
      received: true,
      read: true
    },
    {
      id: 3,
      content: 'Vamos marcar aquele café',
      timestamp: '08:40',
      senderId: 4, // Carlos
      received: true,
      read: true
    }
  ],
  5: [ // Família
    {
      id: 1,
      content: 'Olá pessoal!',
      timestamp: '18:00',
      senderId: 1, // Eu
      received: true,
      read: true
    },
    {
      id: 2,
      content: 'Olá! Como estão todos?',
      timestamp: '18:05',
      senderId: 6, // Outro membro da família
      received: true,
      read: true
    },
    {
      id: 3,
      content: 'Ana: Vamos nos encontrar domingo?',
      timestamp: '18:10',
      senderId: 7, // Ana
      received: true,
      read: true
    }
  ]
})

const activeChat = ref<Contact | null>(null)
const messages = ref<Message[]>([])

const setActiveChat = (contact: Contact) => {
  // Limpar qualquer conversa não lida ao selecionar
  if (contact.unread > 0) {
    contact.unread = 0;
  }
  
  activeChat.value = contact
  
  // Atualizar mensagens com base no contato selecionado
  messages.value = chatMessages.value[contact.id] || []
}

const sendMessage = (content: string) => {
  if (!content.trim() || !activeChat.value) return
  
  const newMessage: Message = {
    id: messages.value.length + 1,
    content,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    senderId: currentUser.id,
    received: false,
    read: false
  }
  
  messages.value.push(newMessage)
  
  // Atualizar a última mensagem do contato
  if (activeChat.value) {
    activeChat.value.lastMessage = content
    activeChat.value.time = newMessage.timestamp
  }
  
  // Garantir que as mensagens são salvas no objeto chatMessages
  if (activeChat.value) {
    chatMessages.value[activeChat.value.id] = [...messages.value]
  }
  
  // Simular recebimento de mensagem após um tempo
  setTimeout(() => {
    newMessage.received = true
    setTimeout(() => {
      newMessage.read = true
    }, 1000)
  }, 2000)
}

// Selecionar automaticamente o primeiro contato ao carregar
onMounted(() => {
  if (contacts.value.length > 0) {
    setActiveChat(contacts.value[0])
  }
})
</script>
