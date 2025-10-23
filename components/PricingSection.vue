<template>
  <section class="bg-[#EDECF6] py-[120px] px-[40px]">
    <div class="max-w-[1400px] mx-auto flex flex-col items-center">
      <!-- Heading -->
      <h2 class="font-dmsans font-bold text-[48px] leading-[100%] text-center text-[#42389E] mb-[60px]">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Price Card -->
      <div class="flex flex-col items-center gap-[20px] mb-[60px]">
        <!-- Purple Price Box -->
        <div
          class="bg-[#42389E] text-white rounded-[12px] px-[80px] py-[40px] text-center"
        >
          <p class="font-dmsans text-[18px] mb-[12px]">Prices starts at</p>
          <div class="flex items-baseline justify-center gap-[8px]">
            <span class="font-dmsans font-bold text-[72px] leading-[100%]">$15</span>
            <span class="font-dmsans text-[24px]">/month</span>
          </div>
        </div>

        <!-- View Subscription Details Button -->
        <button
          class="bg-[#F9A71E] text-[#42389E] font-dmsans font-semibold text-[18px] px-[60px] py-[16px] rounded-[8px] hover:bg-[#e5961c] transition"
        >
          View Subscription Details
        </button>
      </div>

      <!-- White Box - Start Your 7-Day Free Sandbox Plan -->
      <div
        class="w-full max-w-[1394px] bg-white rounded-[12px] border-[0.2px] border-[#42389E] shadow-[0_10px_10px_rgba(0,0,0,0.05)] px-[32px] py-[64px] flex items-center justify-between"
      >
        <!-- Left side - Text -->
        <div>
          <h3 class="font-dmsans font-bold text-[32px] leading-[100%] text-[#42389E] mb-[16px]">
            Start Your 7-Day Free Sandbox Plan
          </h3>
          <p class="font-dmsans text-[16px] leading-[150%] text-[#5F6065]">
            Join over 1,000+ startups already growing with Untitled.
          </p>
        </div>

        <!-- Right side - Buttons -->
        <div class="flex gap-[16px]">
          <button
            class="bg-[#F9A71E] text-[#42389E] font-dmsans font-semibold text-[16px] px-[32px] py-[12px] rounded-[8px] hover:bg-[#e5961c] transition"
          >
            Get Started
          </button>
          <button
            class="border-2 border-[#F9A71E] text-[#F9A71E] font-dmsans font-semibold text-[16px] px-[32px] py-[12px] rounded-[8px] hover:bg-[#F9A71E] hover:text-white transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pricing section component
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>