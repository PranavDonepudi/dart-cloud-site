<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-[#342D76] flex justify-center"
    style="height: 133px;"
  >
    <div
      class="w-full max-w-[1920px] h-[133px] flex items-center justify-between px-[120px] py-[40px]"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/assets/images/logo.png" alt="DartCloud Logo" class="h-10" />
      </div>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center gap-[78px]">
        <NuxtLink
          to="/"
          class="text-[#FEFEFF] text-[20px] font-dmsans font-bold text-center hover:opacity-90 transition"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-[#FEFEFF] text-[20px] font-dmsans font-bold text-center hover:opacity-90 transition"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/pricing"
          class="text-[#FEFEFF] text-[20px] font-dmsans font-bold text-center hover:opacity-90 transition"
        >
          Pricing
        </NuxtLink>
      </nav>

      <!-- CTA Button -->
      <button
        class="w-[199px] h-[46px] bg-[#F9B223] text-[#42389E] font-semibold font-dmsans
               text-[18px] leading-none rounded-[8px] px-[24px] py-[12px] hover:bg-[#e5961c] transition duration-200"
      >
        Deploy Functions
      </button>
    </div>
  </header>
</template>

<script setup>
// Static navbar
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>