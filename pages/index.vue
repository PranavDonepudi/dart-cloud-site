<template>
  <section
    class="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
  >
    <!-- Background Layer -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(-180deg, #342D76 0%, #0000001A 100%),
                    url('/public/images/hero-bkg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <!-- Hero Content -->
    <div class="relative z-10 px-6 sm:px-12 max-w-4xl">
      <h1 class="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
        Build and Deploy <span class="text-[#F9B223]">Server-less</span><br />
        Functions Using <span class="text-[#F9B223]">Dart</span>
      </h1>

      <p class="text-lg text-gray-200 mb-8">
        Transform raw data into clean, actionable insights instantly. no 
        <br />
        infrastructure headaches.
      </p>

      <div class="flex justify-center gap-4">
        <button
          class="bg-[#F9B223] hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Deploy Functions
        </button>
        <button
          class="border border-[#F9B223] text-[#F9B223] font-semibold px-6 py-3 rounded-md hover:bg-[#F9B223] hover:text-white transition"
        >
          Start Sandbox
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'DartCloud Functions',
})
</script>
