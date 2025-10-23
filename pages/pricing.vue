<template>
  <div class="bg-white min-h-screen pt-[var(--navbar-height)]">
    <!-- Pricing Hero Section -->
    <section class="bg-white py-[120px] px-[60px] lg:px-[100px]">

      <div class="w-full px-[60px]">

        <!-- Page Title -->
        <h1 class="text-[#42389E] text-center font-dmsans font-bold text-[48px] leading-[100%] mb-[80px]">
          Plans Built For Every Stage Of Growth
        </h1>

        <!-- Pricing Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-[80px] w-full mb-[80px]">

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

        <!-- 7-Day Free Sandbox Plan Box -->
        <div
          class="w-full bg-[#EDECF6] rounded-[12px] px-[32px] py-[48px] flex items-center justify-between"
        >
          <!-- Left side - Text -->
          <div>
            <h3 class="text-[#42389E] font-dmsans font-bold text-[28px] leading-[120%] mb-[12px]">
              Start your 7-day- free Sandbox Plan
            </h3>
            <p class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>

          <!-- Right side - Buttons -->
          <div class="flex gap-[16px]">
            <button
              class="bg-[#F9A71E] text-white font-dmsans font-semibold text-[16px] px-[32px] py-[12px] rounded-[8px] hover:bg-[#e5961c] transition"
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

    <!-- Built For Enterprise Teams Section (reuse from home) -->
    <EnterpriseSection />

    <!-- CTA Section -->
    <CTA />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'white-navbar'
})

import PricingCard from '~/components/PricingCard.vue'
import EnterpriseSection from '~/components/home/EnterpriseSection.vue'
import CTA from '~/components/CTA.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>