<template>
  <div
    class="min-h-screen flex flex-col relative text-white bg-[#342D76] overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[#342D76] bg-[url('/public/images/hero-bkg.jpg')] bg-cover bg-center"
      style="background-image: linear-gradient(-180deg, #342D76 0%, #0000001A 100%), url('/public/images/hero-bkg.jpg');"
    ></div>

    <!-- Keep Navbar same -->
    <Navbar />

    <main class="flex-grow pt-24 relative z-10">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>