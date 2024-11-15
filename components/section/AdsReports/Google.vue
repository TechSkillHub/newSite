<template>
  <div>
    <div v-if="!isConnected" class="flex justify-center items-center h-96">
      <!-- Exibe botão de conexão se o usuário não estiver conectado -->
      <button
        class="bg-primary text-white px-4 py-2 rounded"
        @click="connectToGoogleAds"
      >
        Conectar Google Ads
      </button>
    </div>

    <div v-else>
      <!-- Exibe dados das campanhas se o usuário estiver conectado -->
      <h2 class="text-lg font-bold">Campanhas do Google Ads</h2>
      <ul>
        <!-- <li v-for="campaign in campaigns" :key="campaign.id">
          {{ campaign.name }} - {{ campaign.status }}
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statusTokenAds, getCampaigns } from '~/services/ads.service';

const userStore = useUserStore()
const isConnected = ref(false)
const campaigns = ref([])

function connectToGoogleAds() {
  const userId = userStore.user?.id;
  document.cookie = `userId=${userId}; path=/; max-age=3600`;
  window.location.href = '/api/ads/google/connect';
}

onMounted(() => {
  console.log(userStore.user?.id);
  
  statusTokenAds().then((res) => {
    isConnected.value = res.isConnected
    if (isConnected.value) {
      getCampaigns().then((res:any) => {
        campaigns.value = res
      });
    }    
  });
});


</script>

<style scoped>

</style>