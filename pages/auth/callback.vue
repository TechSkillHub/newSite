<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth.store';
import { useRouter, useRoute } from 'vue-router';

const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const token = route.query.token as string;
const user = route.query.user ? JSON.parse(route.query.user as string) : null;

if (token && user) {
  try {
    authStore.setToken(token);
    userStore.setUser(user)
    router.push('/logged');
  } catch (error) {
    console.error('Erro de autenticação:', error);
  }
} else {
  console.error('Token ou usuário não encontrados no callback');
}
</script>
