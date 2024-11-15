<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="modal.show">

      <div class="modal_mask" @click="closeModal()" ></div>

      <div class="modal_wrapper">
        <div :class="['modal_content ', { '!scale-100' : isModalOpen }]">
          <IconsClose size="30" class="modal_close" @click="closeModal()" />
          <div class="modal_header" :class="modal.message.type ? 'flex flex-col justify-center items-center' : ''">
            <IconsModal v-if="modal.message.type" :icon="modal.message.type" size="60" />
            <h1>
              {{ modal.message.title || 'Modal Title' }}
            </h1>
          </div>
  
          <div class="modal_body">
            <p>
              {{ modal.message.message || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }}
            </p>
          </div>
  
          <div class="modal_footer">
            <FieldButton v-if="modal.message.redirect" class="btn" fullWidth @click="router.push(modal.message.redirect?.link!), closeModal()">
              {{ modal.message.redirect.btnText }}
            </FieldButton>
            <FieldButton class="btn btn-outlined" :fullWidth="modal.message.redirect ? true : false" @click="closeModal()">
              {{ modal.message.btnText || 'Close' }}
            </FieldButton>
          </div>
        </div>
      </div>
    </div>
    
  </transition>
</template>

<script setup lang="ts">
import "~/assets/css/modal.css"
const modal = useModalStore();
const router = useRouter();

const isModalOpen = ref(false);

function closeModal() {
  isModalOpen.value = false;
  setTimeout(() => {
    modal.closeModal()
  }, 300);
}

watchEffect(() => {
  if (modal.show) {
    setTimeout(() => {
      isModalOpen.value = true;
    }, 300);
  } else {
    isModalOpen.value = false;
  }
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && modal.show) {
    closeModal()
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>

</style>