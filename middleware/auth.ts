
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware(async (to, from) => {

  const userStore = useUserStore(); 
  const authStore = useAuthStore(); 
  const modalStore = useModalStore(); 

  const requiresAuth = to.meta.auth === true;
  const requiresAdmin = to.meta.admin === true;

  if (process.client) {
    if (requiresAuth && !authStore.isLoggedIn) {
      modalStore.showModal({
        type: 'warning',
        title: 'Warning',
        message: 'You need to be logged in to access this page.',
        btnText: 'Login'
      })
      return navigateTo('/auth');
    }

    if (requiresAdmin && userStore.role !== 'admin') {
      modalStore.showModal({
        type: 'warning',
        title: 'Warning',
        message: 'You need to be an ADMIN to access this page.'
      })
      return navigateTo(from); 
    }
  }
});
