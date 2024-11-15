<template>
  <div class="bg-darkTheme flex items-center min-h-[calc(100vh-var(--height-header))] py-8">
    <div class="container flex justify-between items-center md:h-[480px] flex-col md:flex-row gap-8">
      <div class="md:w-1/2 h-full">
        <h1 class="md:text-8xl text-5xl text-center md:text-left font-bold uppercase text-white">
          Sua<br/>
          <EffectsWriter :array="['Revolução', 'Presença', 'Solução']" caret="cursor"/>
          Digital<br/>
          Começa<br/>
          Aqui<span class="text-primary">.</span>
        </h1>
      </div>

      <div class="md:w-[46%] flex flex-col justify-between h-full">
        <p class="text-justify text-grayTheme">
          A revolução digital não é apenas sobre estar online é sobre transformar a maneira como você conecta seu público, otimiza operações e gera resultados mensuráveis. No cenário digital de hoje, as oportunidades são infinitas, e cada passo certo gera retornos reais e palpáveis. Imagine contar com processos ágeis, ferramentas poderosas e estratégias personalizadas que tornam o crescimento previsível, escalável e financeiramente sustentável. Estamos aqui para transformar esse potencial em realidade para você, um passo de cada vez, com as soluções que sua empresa precisa para atingir o próximo nível.
        </p>
        <div class="flex flex-col gap-2 md:items-end mt-8">
          <div class="text-white uppercase rounded-full px-2 py-2 bg-gray-700 md:w-2/3 flex items-center gap-2 leading-none">
            <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
            <span class="mt-[2px]">Domínio grátis</span>
          </div>
          <div class="text-white uppercase rounded-full px-2 py-2 bg-gray-700 md:w-2/3 flex items-center gap-2 leading-none">
            <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
            <span class="mt-[2px]">Migração de Site Gratuito</span>
          </div>
          <div class="text-white uppercase rounded-full px-2 py-2 bg-gray-700 md:w-2/3 flex items-center gap-2 leading-none">
            <Icon name="material-symbols:check-circle" size="24" class="text-primary" />
            <span class="mt-[2px]">Atendimento personalizado</span>
          </div>
          <ClientOnly>
            <FieldButton class="uppercase md:w-2/3 mt-4 rounded-full py-4">
              Explore a Mudança
              <Icon name="material-symbols:arrow-insert" size="24" class="-scale-x-100" />
            </FieldButton>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>