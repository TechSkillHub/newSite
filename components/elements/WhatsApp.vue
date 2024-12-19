<template>
  <div class="container relative flex justify-end z-10">
    <div class="fixed bottom-6 right-8 flex flex-col justify-end items-end">
      <div v-if="chat" class="w-80 h-80 rounded-lg overflow-hidden bg-whats flex flex-col justify-between">
        <div>
          <div class="bg-[#005c4b] text-white w-full p-4 flex gap-4 items-center text-xl font-semibold">
            <img src="~/assets/images/logo.svg" alt="" class="w-10 h-10 bg-white rounded-full">
            <p>Tech Skill Hub</p>
          </div>
          <div class="p-4 relative">
            <div
              class="rounded-e-lg rounded-b-lg relative py-2 px-4 text-sm w-fit bg-[#353535] text-white message"
            >
              Olá, tudo bem?
            </div>
            <div
              class="rounded-lg relative p-2 px-4 mt-2 text-sm w-fit bg-[#353535] text-white"
            >
              Como podemos ajudar você hoje?
            </div>
          </div>
        </div>
        <div class="p-4 flex justify-between gap-2">
          <input 
            type="text" 
            placeholder="Mensagem" 
            class="rounded-full bg-[#353535] text-white py-2 px-6 outline-none text-sm w-full"
            v-model="msg"
          >
          <div class="bg-[#1daa61] rounded-full w-9 h-9 flex justify-center items-center p-2 cursor-pointer" @click="sendMsg">
            <Icon name="material-symbols:send" size="30" class="text-[#000000] "/>
          </div>
        </div>
      </div>
      <Icon name="logos:whatsapp-icon" size="50" @click="openChat" class="cursor-pointer mt-2"/>
    </div>    
  </div>
</template>

<script setup lang="ts">
import { whatsApp } from '~/utils/datas/whatsapp.data'
const msg = ref('')
const chat = ref(false)

const openChat = () => {
  chat.value = !chat.value
}
const sendMsg = () => {
  window.open(`${whatsApp}?text=${encodeURIComponent(msg.value)}`, '_blank')
  chat.value = !chat.value
  msg.value = ''
}


</script>

<style scoped>
.message:after{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 10px 10px 0;
  border-color: transparent #353535 transparent transparent;
  top: 0;
  left: -10px;
}
</style>