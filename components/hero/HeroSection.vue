<template>
  <section
    class="relative w-full flex flex-col items-center text-center text-white overflow-visible
           pt-[180px] md:pt-[213px] pb-[200px] md:pb-[300px]"
    style="min-height: 700px; md:min-height: 1003px;"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 -z-10"
      style="
        background-color: #342D76;
        background-image: url('/images/hero-bkg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transform: scaleX(-1);
        width: 100%;
        height: 100%;
      "
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 -z-10 bg-[#342D76]/70"></div>

    <!-- Hero Text + Buttons Frame -->
    <div 
      class="relative z-10 flex flex-col items-center px-4 md:px-6 max-w-4xl"
      style="gap: 24px;"
    >
      <!-- Responsive heading: smaller on mobile, larger on desktop -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-dmsans">
        Build and Deploy Server-less<br />
        Functions Using <span class="text-[#F9B223]">Dart</span>
      </h1>

      <!-- Responsive paragraph -->
      <p class="text-base md:text-lg text-gray-200 font-dmsans">
        Transform raw data into clean, actionable insights instantly.<br class="hidden md:block" />
        No infrastructure headaches.
      </p>

      <!-- Responsive buttons: stack on mobile, side-by-side on desktop -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
        <button
          class="bg-[#F9B223] text-white font-semibold px-6 py-3 rounded-md font-dmsans hover:bg-[#e5a51f] transition w-full sm:w-auto"
        >
          Deploy Functions
        </button>
        <button
          class="border border-[#F9B223] text-[#F9B223] font-semibold px-6 py-3 rounded-md hover:bg-[#F9B223] hover:text-white transition font-dmsans w-full sm:w-auto"
        >
          Start Sandbox
        </button>
      </div>
    </div>

    <!-- Spacing after buttons -->
    <div class="h-[80px] md:h-[120px]"></div>

    <!-- Image overlapping (hide on mobile, show on tablet+) -->
    <div class="hidden lg:block absolute left-1/2 bottom-[-300px] md:bottom-[-400px] -translate-x-1/2 z-20">
      <div
        class="relative w-[900px] lg:w-[1396px] h-[506px] lg:h-[786px] rounded-[12px] border border-[#42389E] overflow-hidden"
      >
        <img
          src="/images/home-image.png"
          alt="Create Functions Preview"
          class="w-full h-full object-cover rounded-[12px]"
        />

        <!-- First overlapping white image - BOTTOM RIGHT CORNER (inside image bounds) -->
        <div
          class="absolute"
          style="
            width: 594px;
            height: 362px;
            bottom: 10px;
            right: 10px;
            border: 1px solid #E5E5E5;
            border-top-left-radius: 12px;
            border-bottom-right-radius: 12px;
            background-color: #ffffff;
            padding: 44px 57px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
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
</template>

<script setup>
// Hero section component
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>