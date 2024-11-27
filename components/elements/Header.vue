<template>
  <nav class="fixed w-full p-2 bg-header text-header h-header flex shadow-md z-30 transition-all ease-in-out duration-500" :class="scrollY > 90 ? '!bg-gray-700 !bg-opacity-40 backdrop-blur-sm' : ''">
    <div class="flex items-center justify-between container mx-auto w-full">
      <!-- Header logo -->
      <div class="">
        <LogosBrand/>
      </div>
      
      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <IconsHamburguer />
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans items-center uppercase">
          <li v-for="(item, index) in headerNav" :key="index" class="hover:text-primaryLight">
            <NuxtLink :to="item.link" >
              {{ item.title }}
            </NuxtLink>
          </li>
          <!-- <ClientOnly>
            <li class="h-12 w-px bg-grayTheme"></li>
            <li v-if="authStore.isLoggedIn">
              <NuxtLink to="/dashboard">
                Dashboard
              </NuxtLink>
            </li>
            <li>
              <FieldButton :outlined="authStore.isLoggedIn" @click="onSubmit">
                {{ !authStore.isLoggedIn ? 'Área do cliente' : 'Logout' }}
              </FieldButton>
            </li>          
          </ClientOnly> -->
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-in-out transition-all duration-500"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-all duration-500"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition duration-500 ease-in-out">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="p-5 pt-20 transform top-0 -left-[1px] w-9/12 bg-white text-darkTheme fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false" aria-label="Close">
            <Icon name="material-symbols:close" size="25" />
          </button>
        </div>

        <!-- <span @click="isOpen = false" class="flex w-full items-center py-4 border-b">
          <LogosBrand />
        </span> -->

        <ul class="divide-y font-sans">
          <li v-for="(item, index) in headerNav" :key="index">
            <NuxtLink :to="item.link" @click="isOpen = false" class="my-4 inline-block">
              {{ item.title }}
            </NuxtLink>
          </li>

          <!-- <ClientOnly>
            <li>
              <FieldButton :outlined="authStore.isLoggedIn" @click="onSubmit" fullWidth class="my-8">
                {{ !authStore.isLoggedIn ? 'Área do cliente' : 'Logout' }}
              </FieldButton>
            </li>
          </ClientOnly> -->
        </ul>

        <div class="follow">
          <p class="italic font-sans text-sm">Siga-nos:</p>
          <div class="social flex space-x-5 mt-4 ">
            <IconsSocialIcon v-for="(item, index) in socialLinks" :key="index" :icon="item.icon" :url="item.url" />
          </div>
        </div>

      </aside>

    </div>
  </nav>
</template>


<script setup lang="ts">
import { socialLinks } from '~/utils/datas/socialMedia.data';
import { headerNav } from '~/utils/datas/headerNav.data';

const router = useRouter();

const modalStore = useModalStore();
const loadingStore = useLoadingStore();
const authStore = useAuthStore()
const userStore = useUserStore()

const scrollY = ref(0);

const updateScrollY = () => {
  scrollY.value = window.scrollY;
};

const onSubmit = () => {  
  if(authStore.isLoggedIn) { 
    handleLogout()
  } else {
    router.push('/auth')
  }
}

const modal = () => {
  modalStore.showModal({
    type: 'success',
    title: 'Modal Header',
    message: 'Loren Ipsum Dolor'
  })
}

const loading = () => {
  loadingStore.showLoading()
  setTimeout(() => {
    loadingStore.closeLoading()
    }, 3000);
}

const handleLogout = () => {  
  authStore.logout();  
  router.push('/');   
};

const isOpen = ref(false);

const drawer = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  }
}, { immediate: true });

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
  window.addEventListener('scroll', updateScrollY);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollY);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>
