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
    preset: 'node-server',
    serveStatic: false,
    serverAssets: [
      {
        baseName: 'public',
        dir: './public'
      }
    ]
  },
  devServer: {
    port: 3010,
    host: 'localhost'
  }
})