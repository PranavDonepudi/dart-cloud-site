<template>
  <div class="min-h-screen flex flex-col bg-transparent">
    <Navbar />
    
    <main class="flex-grow bg-transparent">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: transparent;
}

html {
  background: transparent;
}
</style>