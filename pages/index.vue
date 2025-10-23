<template>
<!-- HERO SECTION -->
<section
  class="relative w-full flex flex-col items-center text-center text-white overflow-visible
         pt-[calc(var(--navbar-height)+80px)] pb-[300px] min-h-[950px]"
>
  <!-- Background -->
  <div
        class="absolute inset-0 -z-10"
        style="
          background-color: #342D76;
          background-image: url('/images/hero-bkg.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
          transform: scaleX(-1);
        "
    ></div>

  <!-- Overlay -->
  <div class="absolute inset-0 -z-10 bg-[#342D76]/70"></div>

  <!-- Hero Text + Buttons -->
  <div class="relative z-10 px-6 sm:px-12 max-w-4xl">
    <h1 class="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
      Build and Deploy Server-less<br />
      Functions Using <span class="text-[#F9B223]">Dart</span>
    </h1>

    <p class="text-lg text-gray-200 mb-10">
      Transform raw data into clean, actionable insights instantly.<br />
      No infrastructure headaches.
    </p>

    <div class="flex justify-center gap-4">
      <button
        class="bg-[#F9B223] text-white font-semibold px-6 py-3 rounded-md"
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

  <!-- Image overlapping page 2 -->
<div class="absolute left-1/2 bottom-[-400px] -translate-x-1/2 z-20">
  <!-- Main large image -->
  <div
    class="relative w-[1396px] h-[786px] rounded-[12px] border border-[#42389E]
           shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] overflow-hidden"
  >
    <img
      src="/images/home-image.png"
      alt="Create Functions Preview"
      class="w-full h-full object-cover"
    />

    <!-- First overlapping white image -->
    <div
      class="absolute"
      style="
        width: 594px;
        height: 362px;
        top: 424px;
        left: 802px;
        border: 1px solid #E5E5E5;
        border-top-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: #ffffff;
        padding: 44px 57px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      "
    >
      <img
        src="/images/overlap-image-1.png"
        alt="Inner Function UI"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Second smaller overlapping image -->
    <div
      class="absolute"
      style="
        width: 480px;
        height: 274px;
        bottom: 44px;
        right: 57px;
        border-radius: 6px;
        border: 1px solid #E5E5E5;
        background-color: #ffffff;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
      "
    >
      <img
        src="/images/overlap-image-2.png"
        alt="Function Config View"
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

</section>

<!-- PAGE 2 SECTION -->
<section class="relative w-full bg-white pt-[420px] pb-[120px] z-10">
  <div class="max-w-5xl mx-auto text-center px-[80px]">
    <!-- Tagline -->
    <p
      class="text-[#323338] font-semibold text-[24px] leading-[100%]
             font-dmsans mb-[24px] px-[20px]"
    >
      Supporting seamless integration across multiple cloud providers
    </p>

    <!-- Cloud Provider Logos -->
    <div
      class="flex justify-center items-center gap-[40px]"
      style="width: 748px; height: 129px; margin: 0 auto;"
    >
      <img
        src="/images/icon-1.png"
        alt="Google Cloud"
        class="h-[60px] object-contain opacity-100"
      />
      <img
        src="/images/icon-2.png"
        alt="AWS"
        class="h-[60px] object-contain opacity-100"
      />
      <img
        src="/images/icon-3.png"
        alt="Microsoft Azure"
        class="h-[60px] object-contain opacity-100"
      />
    </div>
  </div>
</section>

<!-- PAGE 3 SECTION -->
<section class="relative w-full bg-white py-[160px]">
  <!-- Section Title -->
  <h2
    class="text-center text-[#42389E] font-bold font-dmsans text-[32px] mb-[100px]"
  >
    What Is <span class="text-[#342D76]">DartCloudFunctions</span>
  </h2>

  <!-- Content Grid -->
  <div
    class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center"
  >
    <!-- Left Text Content -->
    <div class="px-[100px]">
      <!-- Heading -->
      <h3
        class="text-[#000000] font-dmsans font-semibold text-[28px] leading-[100%] mb-[32px]"
      >
        Redefining Server-less for Dart Developers
      </h3>

      <!-- Paragraph 1 -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[18px] leading-[100%] mb-[20px]"
      >
        DartCloudFunctions is the
        <span class="text-[#42389E] font-medium">
          “first-of-its-kind server-less platform”
        </span>
        purpose-built for Dart, designed to simplify how enterprise teams build,
        scale, and deliver multiple applications.
      </p>

      <!-- Paragraph 2 -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[18px] leading-[100%]"
      >
        With DartCloudFunctions, you write lightweight Dart functions, trigger
        them via schedules, or HTTP requests, and deploy without managing servers.
      </p>
    </div>

    <!-- Right Image in Purple Frame -->
    <div class="relative flex justify-center items-center">
      <div
        class="bg-[#42389E] rounded-[12px] p-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] w-fit"
      >
        <img
          src="/images/dashboard.png"
          alt="DartCloud Dashboard"
          class="rounded-[8px] w-[800px] h-auto object-contain"
        />
      </div>
    </div> 

  </div>
    
</section>
  <!-- How DartCloudFunctions Works Section -->
  <HowItWorksSection />
  <!-- Why Teams Use DartCloudFunctions Section -->
  <WhyTeamsSection />
  <!-- Enterprise Section -->
  <EnterpriseSection />
  <!-- Pricing Section -->
  <PricingSection />
  <div class="bg-white">
    <div class="w-full flex justify-center">
      <CTA />
    </div>
  </div>

</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
  .font-dmsans {
    font-family: 'DM Sans', sans-serif;
  }
  </style>
<script setup>
import HowItWorksSection from '~/components/HowItWorksSection.vue';
import WhyTeamsSection from '~/components/WhyTeamsSection.vue';
import EnterpriseSection from '~/components/EnterpriseSection.vue';
import PricingSection from '~/components/PricingSection.vue'
import CTA from '~/components/CTA.vue'
</script>
