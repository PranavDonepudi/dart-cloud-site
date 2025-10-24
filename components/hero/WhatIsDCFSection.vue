<template>
  <section class="relative w-full bg-white py-[80px] md:py-[160px]">
    <!-- Section Title -->
    <h2
      class="text-center text-[#42389E] font-dmsans font-bold text-[24px] md:text-[32px] leading-[100%] mb-[60px] md:mb-[100px] px-4 w-full"
      style="letter-spacing: 0%; vertical-align: middle;"
    >
      What Is <span class="text-[#42389E]">DartCloudFunctions</span>
    </h2>

    <!-- Content Grid - Stack on mobile, side-by-side on desktop -->
    <div
      class="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[80px] items-center px-4"
    >
      <!-- Left Text Content -->
      <div class="w-full px-0 md:px-[50px] lg:px-[100px] order-2 lg:order-1">
        <!-- Heading -->
        <h3
          class="text-[#0E121B] font-dmsans font-semibold text-[20px] md:text-[24px] leading-[120%] md:leading-[100%] mb-[24px] md:mb-[32px]"
          style="letter-spacing: 0%; vertical-align: middle; font-weight: 600;"
        >
          Redefining Server-less for Dart Developers
        </h3>

        <!-- Paragraph 1 -->
        <p
          class="text-[#5F5F60] font-dmsans font-normal text-[14px] md:text-[16px] leading-[140%] md:leading-[100%] mb-[16px] md:mb-[20px]"
          style="letter-spacing: 0%; vertical-align: middle;"
        >
          DartCloudFunctions is the
          <span class="text-[#42389E]">
            "first-of-its-kind server-less platform"
          </span>
          purpose-built for Dart, designed to simplify how enterprise teams build,
          scale, and deliver multiple applications.
        </p>

        <!-- Paragraph 2 -->
        <p
          class="text-[#5F5F60] font-dmsans font-normal text-[14px] md:text-[16px] leading-[140%] md:leading-[100%]"
          style="letter-spacing: 0%; vertical-align: middle;"
        >
          With DartCloudFunctions, you write lightweight Dart functions, trigger
          them via schedules, or HTTP requests, and deploy without managing servers.
        </p>
      </div>

      <!-- Right Image in Purple Frame - Show first on mobile -->
      <div class="relative flex justify-center items-center order-1 lg:order-2 w-full">
        <!-- Outer Purple Box - Responsive sizing -->
        <div
          class="bg-[#42389E] rounded-[12px] p-[24px] md:p-[48px] w-full max-w-[828px]"
          style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
        >
          <!-- Inner Image Box -->
          <div
            class="rounded-[6px] border-[0.5px] border-[#8D8D8D] overflow-hidden flex items-center justify-center w-full"
            style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
          >
            <img
              src="/images/dashboard.png"
              alt="DartCloud Dashboard"
              class="w-full h-auto object-contain"
              style="max-width: 732px; max-height: 412px; display: block;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// What is DCF section
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>