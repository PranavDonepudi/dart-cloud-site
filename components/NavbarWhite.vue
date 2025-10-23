<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white flex justify-center"
    style="--navbar-height: 133px;"
  >
    <div
      class="w-full max-w-[1920px] flex items-center justify-between
       px-[120px] py-[24px] md:py-[32px] lg:py-[36px]"
      style="height: 110px;"
    >
      <!-- Logo (Purple version) -->
      <div class="flex items-center gap-2">
        <img src="/assets/images/logo-white.svg" alt="DartCloud Logo" class="h-10" />
      </div>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center gap-[78px]">
        <NuxtLink
          to="/"
          class="text-[#42389E] text-[20px] font-dmsans font-bold text-center hover:opacity-70 transition"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-[#42389E] text-[20px] font-dmsans font-bold text-center hover:opacity-70 transition"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/pricing"
          class="text-[#42389E] text-[20px] font-dmsans font-bold text-center hover:opacity-70 transition"
        >
          Pricing
        </NuxtLink>
      </nav>

      <!-- CTA Button -->
      <button
        class="w-[199px] h-[46px] bg-[#F9A71E] text-[#42389E] font-dmsans font-semibold
         text-[18px] leading-[100%] rounded-[8px] px-[24px] py-[12px] hover:bg-[#e5961c] transition duration-200"
        style="letter-spacing: 0%; font-weight: 600;"
      >
        Start Sandbox
      </button>
    </div>
  </header>
</template>

<script setup>
// White navbar for About/Pricing pages
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>