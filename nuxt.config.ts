// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from 'vite-plugin-compression'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
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
    port: 3010,
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        // threshold: 1024,
      }),
    ],
  },
  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true
  },
  nitro: {
    preset: 'static',
    port: 3010,  // Para produção (modo start)
    serveStatic: false,
    serverAssets: [
      {
        baseName: 'public',
        dir: './public'
      }
    ]
  },
  devServer: {
    port: 4000,  // Para desenvolvimento (modo dev)
    host: 'localhost'
  },
})