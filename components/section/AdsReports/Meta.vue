<template>
  <div>
    <div v-if="!isConnected" class="flex justify-center items-center h-96">
      <!-- Exibe botão de conexão se o usuário não estiver conectado -->
      <button
        class="bg-primary text-white px-4 py-2 rounded"
        @click=""
      >
        Conectar Meta Ads
      </button>
    </div>

    <div v-else>
      <!-- Exibe dados das campanhas se o usuário estiver conectado -->
      <h2 class="text-lg font-bold">Campanhas do Meta Ads</h2>
      <ul>
        <!-- <li v-for="campaign in campaigns" :key="campaign.id">
          {{ campaign.name }} - {{ campaign.status }}
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const isConnected = ref(false)
const campaigns = ref([])


</script>

<style scoped>

</style>