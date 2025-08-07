<template>
  <div class="border border-grayTheme rounded-md p-8 bg-gray-100 w-full md:w-1/2 lg:w-1/3">
    <Form
      ref="authForm"
      class="w-full flex flex-col gap-4"
      @submit="onSubmit"
      v-slot="{ errors, isSubmitting }"
    >
    
    <FieldInput
      v-if="variant === 'REGISTER'"
      label="Name" 
      name="name" 
      id="name" 
      v-model="name" 
      :disabled="isSubmitting" 
      type="text"
      :has-error="!!errors.name" 
      rules="required|noSpecialCharacters|noNumbers"
    />
    
    <FieldInput
      label="Email" 
      name="email" 
      id="email" 
      v-model="email" 
      :disabled="isSubmitting" 
      type="email"
      :has-error="!!errors.email" 
      rules="required|email"
    />
    
    <FieldInput
      v-if="variant !== 'FORGOT'"
      label="Senha" 
      name="senha" 
      id="senha" 
      v-model="senha" 
      :disabled="isSubmitting" 
      type="text"
      :has-error="!!errors.senha" 
      :rules="variant === 'LOGIN' ? 'required' : 'required|password'"
    />

    <small
      v-if="variant === 'LOGIN'"
      class="text-right -mt-4 underline cursor-pointer" 
      @click="toggleForgotPassword"
    >
      Esqueceu a senha?
    </small>

    <FieldButton
      :disabled="isSubmitting"
      fullWidth
      type="submit"
    >
      {{ variant === 'LOGIN' ? 'Acessar' : variant === 'REGISTER' ? 'Cadastrar' : 'Redefinir senha' }}
    </FieldButton>

    <FieldButton
      v-if="variant === 'FORGOT'"
      :disabled="isSubmitting"
      fullWidth
      outlined
      @click="toggleForgotPassword"
    >
      Voltar
    </FieldButton>
  
  </Form>

    <!-- <div class="mt-6" v-if="variant !== 'FORGOT'">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-gray-100 px-2 text-gray-500"> Or Continue with </span>
        </div>
      </div>
      <div class="mt-6 flex gap-2">
        <FieldSocialButton icon="logos:google-icon" name="Google" @click="authGoogle" />
        <FieldSocialButton icon="logos:facebook" name="Facebook" @click="authFacebook" />
        <FieldSocialButton icon="logos:linkedin-icon" name="LinkedIn" @click="authLinkedIn" />
      </div>
    </div> -->

    <div class="flex flex-col lg:flex-row gap-2 justify-center items-center text-sm mt-6 px-2 text-gray-500 text-center">
      <div @click="toggleVariant">
        {{
          variant === 'LOGIN' ? `Don't have an account?` : 'Already have an account?'
        }}
      </div>
      <div @click="toggleVariant" class="underline cursor-pointer">
        {{ variant === 'LOGIN' ? 'Create an account' : 'Login' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registerUser } from '~/services/user.service';
import { loginUser, sendMailNewPassword } from '~/services/auth.service';
import { Form } from 'vee-validate';

const name = ref('');
const email = ref('');
const senha = ref('');

const authGoogle = () => {
  window.location.href = '/api/auth/login/google';
};

const authFacebook = () => {
  window.location.href = '/api/auth/login/facebook';
};
const authLinkedIn = () => {
  window.location.href = '/api/auth/login/linkedin';
};

type VARIANT = 'LOGIN' | 'REGISTER' | 'FORGOT'
const variant = ref<VARIANT>('LOGIN')

const onSubmit = async () => {
  if(variant.value === 'REGISTER') {
    register()
  } else if(variant.value === 'LOGIN') {
    login()
  } else {
    forgotPassword()
  }
}

const login = async() => {
  const body = {
    email: email.value,
    password: senha.value,
  }
  await loginUser(body)
}

const forgotPassword = async() => {
  const body = {
    email: email.value,
  }
  await sendMailNewPassword(body)
}

const register = async() => {
  const body = {
    name: name.value,
    email: email.value,
    password: senha.value,
    companyId: 1
  }
  await registerUser(body)
}

const toggleVariant = () => {
  if (variant.value !== 'LOGIN') {
    variant.value = 'LOGIN';
  } else {
    variant.value = 'REGISTER';
  }
};

const toggleForgotPassword = () => {
  if (variant.value === 'FORGOT') {
    variant.value = 'LOGIN'
  } else {
    variant.value = 'FORGOT'
  }
}
</script>

<style scoped>

</style>