// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from 'vite-plugin-compression'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/content',
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    }
  },
  vite: {
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress', // Usa Brotli (melhor compressão)
        threshold: 1024,            // Comprime arquivos maiores que 1 KB
      }),
    ],
  },
})