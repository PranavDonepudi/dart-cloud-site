<template>
  <section class="bg-[#EDECF6] py-[60px] md:py-[120px] px-4 md:px-[40px] w-full">
    <div class="w-full max-w-[1400px] mx-auto flex flex-col items-center">
      <!-- Heading -->
      <h2 class="font-dmsans font-bold text-[28px] md:text-[48px] leading-[100%] text-center text-[#42389E] mb-[40px] md:mb-[60px] w-full">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Price Card -->
      <div class="flex flex-col items-center gap-[20px] mb-[40px] md:mb-[60px] w-full max-w-md">
        <!-- Purple Price Box -->
        <div
          class="bg-[#42389E] text-white rounded-[12px] px-[40px] md:px-[80px] py-[30px] md:py-[40px] text-center w-full"
        >
          <p class="font-dmsans text-[16px] md:text-[18px] mb-[12px]">Prices starts at</p>
          <div class="flex items-baseline justify-center gap-[8px]">
            <span class="font-dmsans font-bold text-[56px] md:text-[72px] leading-[100%]">$15</span>
            <span class="font-dmsans text-[20px] md:text-[24px]">/month</span>
          </div>
        </div>

        <!-- View Subscription Details Button -->
        <button
          class="bg-[#F9A71E] text-[#42389E] font-dmsans font-semibold text-[16px] md:text-[18px] px-[40px] md:px-[60px] py-[14px] md:py-[16px] rounded-[8px] hover:bg-[#e5961c] transition w-full md:w-auto"
        >
          View Subscription Details
        </button>
      </div>

      <!-- White Box - Start Your 7-Day Free Sandbox Plan -->
      <div
        class="w-full bg-white rounded-[12px] border-[0.2px] border-[#42389E] shadow-[0_10px_10px_rgba(0,0,0,0.05)] px-[20px] md:px-[32px] py-[40px] md:py-[64px] flex flex-col lg:flex-row items-center justify-between gap-[30px]"
      >
        <!-- Left side - Text -->
        <div class="text-center lg:text-left w-full">
          <h3 class="font-dmsans font-bold text-[24px] md:text-[32px] leading-[100%] text-[#42389E] mb-[12px] md:mb-[16px]">
            Start Your 7-Day Free Sandbox Plan
          </h3>
          <p class="font-dmsans text-[14px] md:text-[16px] leading-[150%] text-[#5F6065]">
            Join over 1,000+ startups already growing with Untitled.
          </p>
        </div>

        <!-- Right side - Buttons -->
        <div class="flex flex-col sm:flex-row gap-[16px] w-full lg:w-auto">
          <button
            class="bg-[#F9A71E] text-[#42389E] font-dmsans font-semibold text-[14px] md:text-[16px] px-[28px] md:px-[32px] py-[10px] md:py-[12px] rounded-[8px] hover:bg-[#e5961c] transition w-full sm:w-auto"
          >
            Get Started
          </button>
          <button
            class="border-2 border-[#F9A71E] text-[#F9A71E] font-dmsans font-semibold text-[14px] md:text-[16px] px-[28px] md:px-[32px] py-[10px] md:py-[12px] rounded-[8px] hover:bg-[#F9A71E] hover:text-white transition w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pricing section
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>