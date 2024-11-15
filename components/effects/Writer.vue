<template>
  <div class="is-typed">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const {
  array,
  eraseSpeed = 100,
  typeSpeed = 200,
  delay = 2000,
  intervals = 500,
  start = 0,
  caret = "cursor",
  iterations = 0,
} = defineProps<{
  array: string[];
  eraseSpeed?: number;
  typeSpeed?: number;
  delay?: number;
  intervals?: number;
  start?: number;
  caret?: string;
  iterations?: number;
}>();

const emit = defineEmits(["typed"]);

const typeValue = ref("");
const count = ref(0);
const typeStatus = ref(false);
const arrayIndex = ref(0);
const charIndex = ref(0);

function typewriter() {
  let loop = 0;
  if (charIndex.value < array[arrayIndex.value].length) {
    if (!typeStatus.value) {
      typeStatus.value = true;
    }

    typeValue.value += array[arrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typewriter, typeSpeed);
  } else {
    count.value += 1;

    onTyped(array[arrayIndex.value]);

    if (count.value === array.length) {
      loop += 1;
      if (loop === iterations) {
        return (typeStatus.value = false);
      }
    }

    typeStatus.value = false;

    setTimeout(eraser, delay);
  }
}
function eraser() {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = array[arrayIndex.value].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraser, eraseSpeed);
  } else {
    typeStatus.value = false;
    arrayIndex.value += 1;
    if (arrayIndex.value >= array.length) arrayIndex.value = 0;
    setTimeout(typewriter, typeSpeed + intervals);
  }
}
function onTyped(typedString: string) {
  emit("typed", typedString);
}
setTimeout(typewriter, start);
</script>

<style>
.is-typed {
  display: flex;
}
.is-typed span.typed {
  color: var(--color-primary);
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: white;
  animation: blink 1s infinite;
}
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: white;
  animation: blink 1s infinite;
}
.is-typed span.cursor.typing {
  animation: none;
}
@keyframes blink {
  49% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>

