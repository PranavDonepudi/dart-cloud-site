// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'

export default defineNuxtConfig({
  css: [path.resolve('assets/css/tailwind.css')],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
})
