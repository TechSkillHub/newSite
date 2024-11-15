<template>
  <div class="border border-grayTheme rounded-md p-8 bg-gray-100 w-full md:w-1/2 lg:w-1/3">
    <Form 
      v-slot="{ errors, isSubmitting }"
      @submit.prevent="onSubmit" 
      class="w-full flex flex-col gap-4"
    >
      <FieldInput
        label="New Password" 
        name="password" 
        id="password" 
        type="password"
        rules="required|password"
        v-model="newPassword" 
        :disabled="isSubmitting" 
        :has-error="!!errors.name" 
      />

      <FieldButton
        :disabled="isLoading"
        fullWidth
        type="submit"
      >
        Reset password
      </FieldButton>
    </Form>

  </div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';

import { resetPassword } from '~/services/auth.service';

const isLoading = ref(false);

const route = useRoute();
const token = route.query.token;

const newPassword = ref('');

const onSubmit = async() => {
  const body = {
    newPassword: newPassword.value,
    token: token
  }
  await resetPassword(body)
}

</script>

<style scoped>

</style>