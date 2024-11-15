<template>
  <div class="bg-gray-700 flex flex-col p-8">
    <div class="border-b border-darkTheme pb-8">
      <h1 class="text-4xl font-bold text-offWhite">Formulários</h1>
    </div>
    <div class="flex flex-col pt-8">
      <div class="flex w-fit gap-1">
        <button
          class="py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"
          :class="{'border-b-2 border-primary bg-white ': activeTab === 'dados'}"
          @click="setActiveTab('dados')"
        >
          Dados do contratatante
        </button>
        <button
          class="py-2 px-4 text-gray-700 rounded-t-md bg-grayTheme"
          :class="{'border-b-2 border-primary bg-white': activeTab === 'briefing'}"
          @click="setActiveTab('briefing')"
        >
          Briefing de Identidade Visual
        </button>
      </div>

      <div class="p-4 bg-white rounded-md rounded-tl-none">
        <SectionFormsDados v-if="activeTab === 'dados'" />
        <SectionFormsBriefing v-if="activeTab === 'briefing'" />
        
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

const activeTab = ref('dados')

function setActiveTab(tab: string) {
  activeTab.value = tab
}

</script>

<style scoped>

</style>