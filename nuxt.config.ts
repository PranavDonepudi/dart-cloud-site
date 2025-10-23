// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'

export default defineNuxtConfig({
  css: [path.resolve('assets/css/global.css'),path.resolve('assets/css/tailwind.css')],
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/images/hero-bkg.jpg',
          as: 'image'
        }
      ]
    }
  },
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
