// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from 'vite-plugin-compression'

export default defineNuxtConfig({
  // Configuração de Renderização
  ssr: true,

  // Geração de Build
  generate: {
    routes: ['/']
  },

  // Configuração da Aplicação
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/', // Garante caminhos consistentes
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  // Módulos
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/content',
  ],

  // CSS Global
  css: [
    '@/assets/css/global.css',
    '@/assets/css/loading.css',
    '@/assets/css/modal.css',
    '@/assets/css/tooltip.css'
  ],

  // Configuração de Runtime
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'https://techskillhub.com' // Fallback seguro
    }
  },

  // Configuração do Vite
  vite: {
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        threshold: 1024, // Recomendado habilitar
        ext: '.br'
      }),
    ],
    build: {
      chunkSizeWarningLimit: 2000, // Aumenta limite de warnings
      cssCodeSplit: true // Otimiza CSS
    }
  },

  // Configuração do Nitro (Otimizado para Static)
  nitro: {
    preset: 'static',
    serveStatic: true, // Importante para produção
    prerender: {
      crawlLinks: true, // Melhor para SEO
      routes: ['/']
    }
  },

  // Configurações de Desenvolvimento
  devServer: {
    port: 4000,
    host: 'localhost'
  },

  // Features Extras
  features: {
    inlineStyles: false // Melhor para performance
  },

  // Configurações de Build
  build: {
    transpile: [], // Adicione pacotes que precisam ser transpilados
    analyze: false // Habilite se quiser analisar o bundle
  },

  // Debugging
  debug: process.env.NODE_ENV === 'development',

  sourcemap: process.env.NODE_ENV !== 'production',
  compatibilityDate: '2025-08-08'
})