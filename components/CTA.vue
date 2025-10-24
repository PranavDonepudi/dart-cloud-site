<template>
  <section class="bg-white py-[60px] md:py-[100px] px-4 w-full flex justify-center">
    <!-- Purple Box Container -->
    <div class="relative bg-[#42389E] rounded-[20px] py-[60px] md:py-[80px] px-[30px] md:px-[60px] overflow-hidden max-w-[1200px] w-full">
      <!-- Background Image inside purple box -->
      <div
        class="absolute inset-0"
        style="
          background-image: url('/images/bkg-1.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.5;
        "
      ></div>

      <!-- Content -->
      <div class="text-center relative z-10">
        <!-- Heading -->
        <h2 class="text-white font-dmsans font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[120%] mb-[16px] md:mb-[24px]">
          Stop Managing Servers. Start Building Functions.
        </h2>

        <!-- Subtext -->
        <p class="text-white font-dmsans text-[14px] md:text-[18px] leading-[150%] mb-[30px] md:mb-[40px]">
          Start building with DartCloudFunctions today and experience the next generation<br class="hidden md:block" />
          of server-less computing.
        </p>

        <!-- Buttons - Interactive on mobile with tap feedback -->
        <div class="flex flex-col sm:flex-row justify-center gap-[16px]">
          <button
            @touchstart="handleTouchStart('deploy')"
            @touchend="handleTouchEnd('deploy')"
            @click="handleClick('deploy')"
            :class="[
              'bg-[#F9B223] text-white font-dmsans font-semibold text-[14px] md:text-[16px]',
              'px-[28px] md:px-[32px] py-[12px] md:py-[14px] rounded-[8px]',
              'transition-all duration-200 w-full sm:w-auto',
              'hover:bg-[#e5a51f]',
              activeButton === 'deploy' ? 'scale-95 bg-[#e5a51f]' : 'scale-100'
            ]"
          >
            Deploy Function
          </button>
          <button
            @touchstart="handleTouchStart('sandbox')"
            @touchend="handleTouchEnd('sandbox')"
            @click="handleClick('sandbox')"
            :class="[
              'border-2 border-[#F9B223] text-[#F9B223] font-dmsans font-semibold',
              'text-[14px] md:text-[16px] px-[28px] md:px-[32px] py-[12px] md:py-[14px]',
              'rounded-[8px] transition-all duration-200 w-full sm:w-auto',
              'hover:bg-[#F9B223] hover:text-white',
              activeButton === 'sandbox' ? 'scale-95 bg-[#F9B223] text-white' : 'scale-100'
            ]"
          >
            Start Sandbox
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeButton = ref(null)
let touchTimeout = null

const handleTouchStart = (button) => {
  activeButton.value = button
}

const handleTouchEnd = (button) => {
  if (touchTimeout) {
    clearTimeout(touchTimeout)
  }
  
  touchTimeout = setTimeout(() => {
    activeButton.value = null
  }, 150)
}

const handleClick = (button) => {
  console.log(`${button} button clicked`)
  // Add your navigation or action logic here
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}

button {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>