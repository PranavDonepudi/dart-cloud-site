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
  <section class="bg-white py-[100px]">
    <!-- Title -->
    <h2
      class="text-[#42389E] text-center font-dmsans font-bold text-[32px] leading-[100%] mb-[80px]"
    >
      How DartCloudFunctions Works
    </h2>

    <!-- Three cards container -->
    <div
      class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[40px] justify-items-center"
    >
    <!-- Card 1 -->
<div
  class="w-[370px] h-[420px] bg-[#F9A71E33] rounded-[12px] shadow-md p-[40px] flex flex-col justify-between"
>
  <!-- Title + Text -->
  <div>
    <h3
      class="text-[#000000] font-dmsans font-bold text-[20px] leading-[100%] mb-[12px]"
    >
      Sign-up
    </h3>
    <p
      class="text-[#323338] font-dmsans text-[16px] leading-[140%] font-normal"
    >
      Get started instantly with a secure account. Authenticate, set your
      environment, and connect your repo in seconds.
    </p>
  </div>
  
  <!-- Image (completely contained within the border) -->
  <div
    class="mt-[20px] w-full h-[180px] border border-[#42389E] rounded-[6px] bg-white flex justify-center items-center overflow-hidden"
  >
    <img
      src="/images/welcome-page.png"
      alt="Sign-up Screenshot"
      class="w-full h-full object-cover"
    />
  </div>
  
  <!-- Button -->
  <div class="flex justify-start mt-[24px]">
    <button
      class="flex items-center gap-2 text-[#42389E] font-dmsans font-medium text-[16px] leading-[100%] border-b border-transparent hover:border-[#42389E] transition"
    >
      Sign-up
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>

      <!-- Card 2 -->
    <div
      class="w-[370px] h-[420px] bg-[#EDECF6] rounded-[12px] shadow-md p-[40px] flex flex-col justify-between"
    >
      <!-- Title + Text -->
      <div>
        <h3
          class="text-[#000000] font-dmsans font-bold text-[20px] leading-[100%] mb-[12px]"
        >
          Create Your Function
        </h3>
        <p
          class="text-[#323338] font-dmsans text-[16px] leading-[140%] font-normal"
        >
          Define your function with our inline editor or upload existing code. Configure runtime, all in one unified UI.
        </p>
      </div>
      
      <!-- Image (completely contained within the border) -->
      <div
        class="mt-[20px] w-full h-[180px] border border-[#42389E] rounded-[6px] bg-white flex justify-center items-center overflow-hidden"
      >
        <img
          src="/images/create-function.png"
          alt="Create Function Screenshot"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Button -->
      <div class="flex justify-start mt-[24px]">
        <button
          class="flex items-center gap-2 text-[#42389E] font-dmsans font-medium text-[16px] leading-[100%] border-b border-transparent hover:border-[#42389E] transition"
        >
          Create Function
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

      <!-- Card 3 -->
  <div
    class="w-[370px] h-[420px] bg-[#6AFF4B33] rounded-[12px] shadow-md p-[40px] flex flex-col justify-between"
  >
    <!-- Title + Text -->
    <div>
      <h3
        class="text-[#000000] font-dmsans font-bold text-[20px] leading-[100%] mb-[12px]"
      >
        Deploy Function
      </h3>
      <p
        class="text-[#323338] font-dmsans text-[16px] leading-[140%] font-normal"
      >
        Hit deploy to push your function live. Monitor logs, performance, and real-time metrics from our dashboard, anytime, zero hassle.
      </p>
    </div>
    
    <!-- Image (completely contained within the border) -->
    <div
      class="mt-[20px] w-full h-[180px] border border-[#42389E] rounded-[6px] bg-white flex justify-center items-center overflow-hidden"
    >
      <img
        src="/images/create-function-deploy.png"
        alt="Deploy Function Screenshot"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Button -->
    <div class="flex justify-start mt-[24px]">
      <button
        class="flex items-center gap-2 text-[#42389E] font-dmsans font-medium text-[16px] leading-[100%] border-b border-transparent hover:border-[#42389E] transition"
      >
        Deploy Function
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
    </div>
  </section>
  <!-- Why Teams Use DartCloudFunctions Section -->
<section class="bg-white py-[100px]">
  <!-- Title -->
  <h2
    class="text-[#42389E] text-center font-dmsans font-bold text-[32px] leading-[100%] mb-[80px]"
  >
    Why Teams Use DartCloudFunctions
  </h2>
  
  <!-- Four feature boxes -->
  <div
    class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[60px] px-[40px]"
  >
    <!-- Feature 1: Built for Scale -->
    <div class="flex flex-col items-center text-center">
      <!-- Icon container -->
      <div class="mb-[20px]">
        <img
          src="/images/Frame-1.png"
          alt="Built for Scale Icon"
          class="w-[64px] h-[64px]"
        />
      </div>
      <!-- Title -->
      <h3
        class="text-[#000000] font-dmsans font-bold text-[18px] leading-[100%] mb-[12px]"
      >
        Built for Scale
      </h3>
      <!-- Description -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[14px] leading-[140%]"
      >
        Functions auto-scale to handle spikes in traffic effortlessly.
      </p>
    </div>

    <!-- Feature 2: Dart Native Language -->
    <div class="flex flex-col items-center text-center">
      <!-- Icon container -->
      <div class="mb-[20px]">
        <img
          src="/images/Frame-2.png"
          alt="Dart Native Language Icon"
          class="w-[64px] h-[64px]"
        />
      </div>
      <!-- Title -->
      <h3
        class="text-[#000000] font-dmsans font-bold text-[18px] leading-[100%] mb-[12px]"
      >
        Dart Native Language
      </h3>
      <!-- Description -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[14px] leading-[140%]"
      >
        Seamlessly integrate with Dart, plus Dart SDK support.
      </p>
    </div>

    <!-- Feature 3: Faster Deployments -->
    <div class="flex flex-col items-center text-center">
      <!-- Icon container -->
      <div class="mb-[20px]">
        <img
          src="/images/Frame-3.png"
          alt="Faster Deployments Icon"
          class="w-[64px] h-[64px]"
        />
      </div>
      <!-- Title -->
      <h3
        class="text-[#000000] font-dmsans font-bold text-[18px] leading-[100%] mb-[12px]"
      >
        Faster Deployments
      </h3>
      <!-- Description -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[14px] leading-[140%]"
      >
        Push from code to cloud in seconds.
      </p>
    </div>

    <!-- Feature 4: Pay for What You Use -->
    <div class="flex flex-col items-center text-center">
      <!-- Icon container -->
      <div class="mb-[20px]">
        <img
          src="/images/Frame-4.png"
          alt="Pay for What You Use Icon"
          class="w-[64px] h-[64px]"
        />
      </div>
      <!-- Title -->
      <h3
        class="text-[#000000] font-dmsans font-bold text-[18px] leading-[100%] mb-[12px]"
      >
        Pay for What You Use
      </h3>
      <!-- Description -->
      <p
        class="text-[#323338] font-dmsans font-normal text-[14px] leading-[140%]"
      >
        No idle costs, only pay per execution.
      </p>
    </div>
  </div>
</section>

<!-- Built For Enterprise Teams Section -->
<section class="bg-white py-[100px]">
  <!-- Title -->
  <h2
    class="text-[#42389E] text-center font-dmsans font-bold text-[32px] leading-[100%] mb-[80px]"
  >
    Built For Enterprise Teams
  </h2>
  
  <!-- Purple container with content -->
  <div class="max-w-[1200px] mx-auto px-[40px]">
    <div
      class="bg-[#42389E] rounded-[12px] p-[60px] flex flex-col md:flex-row gap-[60px] items-center"
    >
      <!-- Left side - Text content -->
      <div class="flex-1">
        <!-- Badge -->
        <div class="inline-block mb-[24px]">
          <span
            class="bg-[#F9B223] text-[#000000] font-dmsans font-semibold text-[14px] px-[20px] py-[8px] rounded-full"
          >
            Enterprise-Ready
          </span>
        </div>
        
        <!-- Heading -->
        <h3
          class="text-white font-dmsans font-bold text-[28px] leading-[120%] mb-[24px]"
        >
          Seamless Team & Role Management
        </h3>
        
        <!-- Paragraph 1 -->
        <p
          class="text-white font-dmsans font-normal text-[16px] leading-[150%] mb-[20px]"
        >
          Empower your enterprise teams with secure, centralized control. DartCloud Functions makes it simple to assign roles, manage approvals, and oversee projects all from one workspace.
        </p>
        
        <!-- Paragraph 2 -->
        <p
          class="text-white font-dmsans font-normal text-[16px] leading-[150%]"
        >
          With built-in stability, cost efficiency, and enterprise-grade security, you can scale confidently while maintaining complete visibility and control across your organization.
        </p>
      </div>
      
      <!-- Right side - Dashboard Image -->
      <div class="flex-1">
        <div
          class="bg-white rounded-[8px] border border-[#E5E5E5] overflow-hidden shadow-lg"
        >
          <img
            src="/images/settings.png"
            alt="Enterprise Team Management Dashboard"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  <CTA class="mt-[160px]" />
  <Footer />
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
  .font-dmsans {
    font-family: 'DM Sans', sans-serif;
  }
  </style>
<script setup>
import CTA from '~/components/CTA.vue'
import Footer from '~/components/Footer.vue'
</script>
