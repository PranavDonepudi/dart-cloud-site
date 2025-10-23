<template>
  <div class="bg-white min-h-screen pt-[var(--navbar-height)]">
    <!-- About Hero Section -->
    <section class="bg-white py-[120px] px-[100px]">
      <div class="max-w-[1400px] mx-auto">
        <!-- Page Title -->
        <h1 class="text-[#42389E] text-center font-dmsans font-bold text-[48px] leading-[100%] mb-[80px]">
          About DartCloudFunctions
        </h1>

        <!-- Two Column Layout -->
        <div class="flex gap-[80px] items-start justify-between">
          <!-- Left Column - Text Content -->
          <div 
            class="flex flex-col gap-[24px]"
            style="width: 623px; max-height: 508.14px; margin-left: -20px;"
          >
            <!-- Our Mission -->
            <div style="width: 623px; height: 88px; display: flex; flex-direction: column; gap: 8px;">
              <h2 
                class="text-[#000000] font-dmsans font-bold text-[24px] leading-[120%]"
                style="width: 623px; height: 29px; gap: 16px;"
              >
                Our Mission
              </h2>
              <p class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                We believe developers should focus on building logic, not managing infrastructure. Our Cloud Function is designed to give startups, enterprises, and innovators the ability to deploy functions seamlessly, while staying cost-efficient and scalable.
              </p>
            </div>

            <!-- Our Story -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <h2 
                class="text-[#000000] font-dmsans font-bold text-[24px] leading-[120%]"
                style="width: 623px; height: 29px; gap: 16px;"
              >
                Our Story
              </h2>
              <div style="width: 623px; display: flex; flex-direction: column; gap: 8px;">
                <p class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  We started with a simple question: Why should deploying a function be harder than writing one?
                </p>
                <p class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  From that, we built a platform where any developer, from solo hackers to enterprise teams, can sign up, create, and deploy functions without worrying about servers, scaling, or downtime.
                </p>
              </div>
            </div>

            <!-- What We Value -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <h2 
                class="text-[#000000] font-dmsans font-bold text-[24px] leading-[120%]"
                style="width: 623px; height: 29px; gap: 16px;"
              >
                What We Value
              </h2>
              <ul class="list-disc list-inside space-y-[8px]" style="width: 623px; padding-left: 4px;">
                <li class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  <span class="font-semibold text-[#000000]">Simplicity:</span> Tools that are easy to use yet powerful.
                </li>
                <li class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  <span class="font-semibold text-[#000000]">Innovation:</span> Helping teams move faster without sacrificing quality.
                </li>
                <li class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  <span class="font-semibold text-[#000000]">Trust:</span> Secure, reliable infrastructure you can count on.
                </li>
                <li class="text-[#5F6065] font-dmsans text-[16px] leading-[150%]">
                  <span class="font-semibold text-[#000000]">Community:</span> Building with developers, for developers.
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column - Purple Box with Image -->
          <div class="flex-shrink-0">
            <!-- Outer Purple Box -->
            <div 
              class="bg-[#42389E] rounded-[12px] p-[48px] flex flex-col gap-[10px]"
              style="
                width: 828px;
                box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
              "
            >
              <!-- Inner Image Container -->
              <div
                class="rounded-[6px] border-[0.5px] border-[#8D8D8D] overflow-hidden"
                style="
                  width: 732px;
                  height: 412.14px;
                  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
                "
              >
                <img
                  src="/images/create-function-edit-deploy.png"
                  alt="DartCloudFunctions Dashboard"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'white-navbar'
})

import CTA from '../components/CTA.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>