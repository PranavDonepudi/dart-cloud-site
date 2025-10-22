// nuxt.config.ts
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  // ✅ correct alias setup
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
    '@tailwindcss/postcss': {},
  },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
})
