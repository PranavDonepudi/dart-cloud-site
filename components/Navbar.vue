<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-[#342D76] flex justify-center"
    style="height: 133px;"
  >
    <div
      class="w-full max-w-[1920px] h-[133px] flex items-center justify-between px-4 md:px-[120px] py-[40px]"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="/assets/images/logo.png" alt="DartCloud Logo" class="h-8 md:h-10" />
      </div>

      <!-- Desktop Nav Links (hidden on mobile) -->
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

      <!-- Desktop CTA Button (hidden on mobile) -->
      <button
        class="hidden md:block w-[199px] h-[46px] bg-[#F9B223] text-[#42389E] font-semibold font-dmsans
               text-[18px] leading-none rounded-[8px] px-[24px] py-[12px] hover:bg-[#e5961c] transition duration-200"
      >
        Deploy Functions
      </button>

      <!-- Mobile Hamburger Menu Button (hidden on desktop) -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu (conditional, slides down when open) -->
    <transition name="slide">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-[133px] left-0 w-full bg-[#342D76] border-t border-[#4a4390] shadow-lg"
      >
        <nav class="flex flex-col items-center py-6 space-y-6">
          <NuxtLink
            to="/"
            @click="closeMobileMenu"
            class="text-[#FEFEFF] text-[18px] font-dmsans font-bold hover:opacity-90 transition"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            @click="closeMobileMenu"
            class="text-[#FEFEFF] text-[18px] font-dmsans font-bold hover:opacity-90 transition"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            @click="closeMobileMenu"
            class="text-[#FEFEFF] text-[18px] font-dmsans font-bold hover:opacity-90 transition"
          >
            Pricing
          </NuxtLink>
          <button
            class="w-[180px] h-[46px] bg-[#F9B223] text-[#42389E] font-semibold font-dmsans
                   text-[16px] rounded-[8px] hover:bg-[#e5961c] transition"
          >
            Deploy Functions
          </button>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
 
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}

/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>