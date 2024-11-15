<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <div class="tooltip">
      <Field
        v-model="value"
        :name="name"
        :id="id"
        :rules="rules"
        v-slot="{ field, meta, errors }"
      >
        <v-select
          v-bind="field"
          :options="options"
          :reduce="(option:any) => option.value"
          :clearable="true"
          :searchable="false"
          @blur="field.onChange"
          :class="
            clsx(
              'block bg-white w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none',
              disabled && 'opacity-70 cursor-default',
              hasError && 'ring-red-500 focus:ring-red-500'
            )
          "
        >
          <template v-slot:no-options>Nenhum resultado encontrado.</template>
        </v-select>
      </Field>
      <transition name="fade" mode="out-in">
        <ErrorMessage :name="id" class="tooltiptext" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import "~/assets/css/tooltip.css";
import { Field, ErrorMessage } from 'vee-validate';
import clsx from 'clsx';

interface SelectProps  {
  label: string;
  id: string;
  modelValue: string | number;
  name: string;
  required?: boolean;
  disabled?: boolean; 
  hasError: boolean;
  rules: string;
  options?: Array<{ label: string, value: string }>;
}

const props = defineProps<SelectProps >();
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {   
    emit('update:modelValue', value);
  },
});

</script>

<style>
.vs__dropdown-toggle {
  border: none;
  padding: 0;
}
.vs__search,
.vs__search:focus,
.vs__selected,
.vs__actions,
.vs__selected-options {
  margin: 0;
  padding: 0;
}
.vs__search,
.vs__search:focus {
  border: none;
}
.vs__actions {
  padding-left: 8px;
}
</style>