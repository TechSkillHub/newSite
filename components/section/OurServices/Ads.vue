<template>
  <EffectsCardHoverGlow class="flex flex-col justify-between items-center gap-8">
    <div>
      <Icon name="mdi:target-account" size="50" class="text-primary block mx-auto mb-4" />
      <h1 class="text-4xl font-semibold text-center">TRÁFEGO PAGO</h1>
    </div>
    <div class="flex-1"></div>
    <ul class="text-left w-full">
      <li class="px-2 py-2 flex items-center gap-2 leading-none w-full">
        <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
        Benefício 1
      </li>
      <li class="px-2 py-2 flex items-center gap-2 leading-none w-full">
        <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
        Benefício 2
      </li>
      <li class="px-2 py-2 flex items-center gap-2 leading-none w-full">
        <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
        Benefício 3
      </li>
      <li class="px-2 py-2 flex items-center gap-2 leading-none w-full">
        <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
        Benefício 4
      </li>
    </ul>
    <ClientOnly>
      <FieldButton fullWidth>Quero esse plano</FieldButton>
    </ClientOnly>
  </EffectsCardHoverGlow>
</template>

<script setup lang="ts">

</script>

<style scoped></style>