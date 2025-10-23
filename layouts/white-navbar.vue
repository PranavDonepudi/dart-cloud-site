<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavbarWhite />
    
    <main class="flex-grow bg-white">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import NavbarWhite from '~/components/NavbarWhite.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: white;
}
</style>