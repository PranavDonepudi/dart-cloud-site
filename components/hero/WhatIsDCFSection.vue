<template>
  <section class="relative w-full bg-white py-[160px]">
    <!-- Section Title -->
    <h2
      class="text-center text-[#42389E] font-dmsans font-bold text-[32px] leading-[100%] mb-[100px]"
      style="letter-spacing: 0%; vertical-align: middle;"
    >
      What Is <span class="text-[#42389E]">DartCloudFunctions</span>
    </h2>

    <!-- Content Grid -->
    <div
      class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center"
    >
      <!-- Left Text Content -->
      <div class="px-[100px]">
        <!-- Heading -->
        <h3
          class="text-[#0E121B] font-dmsans font-semibold text-[24px] leading-[100%] mb-[32px]"
          style="letter-spacing: 0%; vertical-align: middle; font-weight: 600;"
        >
          Redefining Server-less for Dart Developers
        </h3>

        <!-- Paragraph 1 -->
        <p
          class="text-[#5F5F60] font-dmsans font-normal text-[16px] leading-[100%] mb-[20px]"
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
          class="text-[#5F5F60] font-dmsans font-normal text-[16px] leading-[100%]"
          style="letter-spacing: 0%; vertical-align: middle;"
        >
          With DartCloudFunctions, you write lightweight Dart functions, trigger
          them via schedules, or HTTP requests, and deploy without managing servers.
        </p>
      </div>

      <!-- Right Image in Purple Frame -->
      <div class="relative flex justify-center items-center">
        <!-- Outer Purple Box - Auto-sized to content -->
        <div
          class="bg-[#42389E] rounded-[12px] p-[48px]"
          style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
        >
          <!-- Inner Image Box - Max dimensions, auto-adjust to image -->
          <div
            class="rounded-[6px] border-[0.5px] border-[#8D8D8D] overflow-hidden flex items-center justify-center"
            style="
              max-width: 732px;
              max-height: 412px;
              box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
            "
          >
            <img
              src="/images/dashboard.png"
              alt="DartCloud Dashboard"
              style="
                max-width: 732px;
                max-height: 412px;
                width: 100%;
                height: auto;
                display: block;
              "
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