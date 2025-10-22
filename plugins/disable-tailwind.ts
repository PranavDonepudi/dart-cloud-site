// plugins/disable-tailwind.ts
export default defineNuxtPlugin(() => {
  // Disable Nuxt UI’s internal Tailwind 3 bridge
  // Prevents @nuxt/ui from calling @nuxtjs/tailwindcss
  const nuxtApp = useNuxtApp()
  nuxtApp.hooks.hook('tailwindcss:load', (event) => {
    event.preventDefault?.()
  })
})
