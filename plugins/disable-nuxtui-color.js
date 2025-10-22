export default defineNuxtPlugin(() => {
  // temporarily override Nuxt UI's color handler
  const noop = () => {}
  globalThis.useHead = globalThis.useHead || noop
})
