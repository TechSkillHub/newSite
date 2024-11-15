<template>
  <div class="bg-gray-700 flex flex-col p-8">
    <div class="border-b border-darkTheme pb-8">
      <h1 class="text-4xl font-bold text-offWhite">Relatórios Tráfego Pago</h1>
    </div>
    <div class="flex flex-col pt-8">
      <div class="flex w-fit gap-1">
        <button
          class="py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"
          :class="{'border-b-2 border-primary bg-white ': activeTab === 'google'}"
          @click="setActiveTab('google')"
        >
          Google Ads
        </button>
        <button
          class="py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"
          :class="{'border-b-2 border-primary bg-white': activeTab === 'meta'}"
          @click="setActiveTab('meta')"
        >
          Meta Ads
        </button>
      </div>

      <div class="p-4 bg-white rounded-md rounded-tl-none">
        <SectionAdsReportsGoogle v-if="activeTab === 'google'" />
        <SectionAdsReportsMeta v-if="activeTab === 'meta'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: true,
  admin: false,
  layout: 'admin',
});

const activeTab = ref('google')

function setActiveTab(tab: string) {
  activeTab.value = tab
}

</script>

<style scoped>

</style>