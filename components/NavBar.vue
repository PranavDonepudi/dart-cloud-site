<template>
<header
  class="fixed top-0 left-0 w-full z-50 bg-gradient-to-b #342D76"
>
  <div
    class="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between text-white"
  >
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <img src="/assets/images/logo.png" alt="DartCloud Logo" class="h-8" />
      <span class="font-semibold text-white leading-tight">
        DARTCLOUD<br />FUNCTIONS
      </span>
    </div>


    <!-- Centered Nav Links -->
  <nav class="hidden md:flex items-center gap-10 text-sm font-medium">
    <NuxtLink 
      to="/" 
      class="hover:text-white hover:font-bold transition duration-200"
    >
      Home
    </NuxtLink>
    <NuxtLink 
      to="/about" 
      class="hover:text-white hover:font-bold transition duration-200"
    >
      About
    </NuxtLink>
    <NuxtLink 
      to="/pricing" 
      class="hover:text-white hover:font-bold transition duration-200"
    >
      Pricing
    </NuxtLink>
  </nav>

    <!-- CTA -->
    <button
      class="bg-[#F9B223] hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-md transition"
    >
      Deploy Functions
    </button>
  </div>
</header>
</template>


<script setup>
// static navbar, no logic yet
</script>
