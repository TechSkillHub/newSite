<template>
  <button
    :type="type"
    :disabled="computedDisabled"
    :class="
      clsx(
        'btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        computedDisabled && 'btn-disabled',
        fullWidth && 'w-full',
        outlined && 'btn-outlined',
      )
    "
  >
    <slot v-if="!disabled" />
    <IconsLoading v-else />
  </button>
</template>

<script setup lang="ts">
import { useIsFormDirty, useIsFormValid } from "vee-validate";
import clsx from "clsx";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    fullWidth?: boolean;
    outlined?: boolean;
    danger?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: "button",
  }
);

// Reatividade para verificar se o formulário está válido e alterado
const isDirty = computed(() => (props.type === "submit" ? useIsFormDirty().value : true));
const isValid = computed(() => (props.type === "submit" ? useIsFormValid().value : true));

// Verifica se o botão está inativo
const isInactive = computed(() => {
  if (props.type === "submit") {
    // Apenas aplica lógica de formulário se o botão for do tipo submit
    return !isDirty.value || !isValid.value;
  }
  return false; // Botões de outros tipos não consideram o estado do formulário
});

// Calcula se o botão deve estar desabilitado
const computedDisabled = computed(() => {
  return props.disabled || isInactive.value;
});
</script>

<style scoped></style>
