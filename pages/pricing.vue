<template>
  <div class="bg-white min-h-screen pt-[var(--navbar-height)]">
    <!-- Pricing Hero Section -->
    <section class="bg-white py-[80px] md:py-[120px] px-4 md:px-[60px] lg:px-[100px] w-full">

      <div class="w-full px-4 md:px-[60px]">

        <!-- Page Title -->
        <h1 class="text-[#42389E] text-center font-dmsans font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] mb-[60px] md:mb-[80px]">
          Plans Built For Every Stage Of Growth
        </h1>

        <!-- Pricing Cards Grid - Stack on mobile, 2 cols on tablet, 4 cols on desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[40px] lg:gap-[80px] w-full mb-[60px] md:mb-[80px]">

          <!-- Card 1: Standard -->
          <PricingCard
            plan-name="Standard"
            price="$10"
            billing-period="/month"
            icon-src="/icons/bolt.png"
            badge-text=""
            badge-color=""
            card-bg="bg-white"
            text-color="text-[#42389E]"
            border-color="border-[#42389E]"
            button-text="Subscribe"
            button-style="outline"
            :features="[
              '1 User Only',
              '1 Function Only',
              'No Team Members',
              '30 Second Execution',
              'Single Dart Runtime',
              'Deployed To GCP Only',
              'Upgrade Path is available',
              'Logs 24 hours'
            ]"
          />

          <!-- Card 2: Enhance (Popular) -->
          <PricingCard
            plan-name="Enhance"
            price="$149"
            billing-period="/month"
            icon-src="/icons/bolt.png"
            badge-text="Popular"
            badge-color="bg-[#F9A71E]"
            card-bg="bg-[#42389E]"
            text-color="text-white"
            border-color="border-[#42389E]"
            button-text="Subscribe"
            button-style="solid"
            :features="[
              'Multiple Users',
              '3 Team Members',
              'Up To 20 Functions',
              '30 Second Execution',
              'Single Dart Runtime',
              'Deployed To GCP and Azure Only',
              'Upgrade Path is available',
              'Logs 7 days'
            ]"
          />

          <!-- Card 3: Enterprise -->
          <PricingCard
            plan-name="Enterprise"
            price="Custom"
            billing-period=""
            icon-src="/icons/bolt.png"
            badge-text=""
            badge-color=""
            card-bg="bg-white"
            text-color="text-[#42389E]"
            border-color="border-[#42389E]"
            button-text="Contact Sales"
            button-style="outline"
            :features="[
              'Unlimited User',
              'Unlimited Teams',
              'Unlimited Functions',
              '90 Second Execution',
              'Multiple Dart Runtime',
              'Deployed to GCP, Azure, and Amazon',
              'Upgrade Path is available',
              'Logs 30 days'
            ]"
          />

          <!-- Card 4: Enterprise Plus -->
          <PricingCard
            plan-name="Enterprise Plus"
            price="Custom"
            billing-period=""
            icon-src="/icons/bolt.png"
            badge-text=""
            badge-color=""
            card-bg="bg-white"
            text-color="text-[#42389E]"
            border-color="border-[#42389E]"
            button-text="Contact Sales"
            button-style="outline"
            :features="[
              'Standard Features',
              'Enhanced Features',
              'Enterprise Features',
              'DartCloud Functions',
              'DartStream',
              'DartCode AI'
            ]"
          />
        </div>

        <!-- 7-Day Free Sandbox Plan Box - Stack on mobile -->
        <div
          class="w-full bg-[#EDECF6] rounded-[12px] px-[20px] md:px-[32px] py-[40px] md:py-[48px] flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[40px]"
        >
          <!-- Left side - Text -->
          <div class="text-center lg:text-left w-full">
            <h3 class="text-[#42389E] font-dmsans font-bold text-[24px] md:text-[28px] leading-[120%] mb-[12px]">
              Start your 7-day free Sandbox Plan
            </h3>
            <p class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>

          <!-- Right side - Buttons with mobile interactivity -->
          <div class="flex flex-col sm:flex-row gap-[16px] w-full lg:w-auto">
            <button
              @touchstart="handleTouchStart('getStarted')"
              @touchend="handleTouchEnd('getStarted')"
              @click="handleClick('getStarted')"
              :class="[
                'bg-[#F9A71E] text-white font-dmsans font-semibold text-[14px] md:text-[16px]',
                'px-[28px] md:px-[32px] py-[12px] rounded-[8px] transition-all duration-200',
                'hover:bg-[#e5961c] w-full sm:w-auto',
                activeButton === 'getStarted' ? 'scale-95 bg-[#e5961c]' : 'scale-100'
              ]"
            >
              Get Started
            </button>
            <button
              @touchstart="handleTouchStart('learnMore')"
              @touchend="handleTouchEnd('learnMore')"
              @click="handleClick('learnMore')"
              :class="[
                'border-2 border-[#F9A71E] text-[#F9A71E] font-dmsans font-semibold',
                'text-[14px] md:text-[16px] px-[28px] md:px-[32px] py-[12px] rounded-[8px]',
                'transition-all duration-200 hover:bg-[#F9A71E] hover:text-white w-full sm:w-auto',
                activeButton === 'learnMore' ? 'scale-95 bg-[#F9A71E] text-white' : 'scale-100'
              ]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Built For Enterprise Teams Section (reuse from home) -->
    <EnterpriseSection />

    <!-- CTA Section -->
    <CTA />
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'white-navbar'
})

import PricingCard from '~/components/PricingCard.vue'
import EnterpriseSection from '~/components/home/EnterpriseSection.vue'
import CTA from '~/components/CTA.vue'

// Mobile interactivity for buttons
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

/* Touch-friendly buttons */
button {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>