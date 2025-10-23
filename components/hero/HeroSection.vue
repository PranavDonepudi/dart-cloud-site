<template>
  <section
    class="relative w-full flex flex-col items-center text-center text-white overflow-visible
           pt-[calc(var(--navbar-height)+80px)] pb-[300px] min-h-[950px]"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 -z-10"
      style="
        background-color: #342D76;
        background-image: url('../images/hero-bkg.jpg');
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
      <h1 class="text-4xl sm:text-6xl font-bold mb-6 leading-tight font-dmsans">
        Build and Deploy Server-less<br />
        Functions Using <span class="text-[#F9B223]">Dart</span>
      </h1>

      <p class="text-lg text-gray-200 mb-10 font-dmsans">
        Transform raw data into clean, actionable insights instantly.<br />
        No infrastructure headaches.
      </p>

      <div class="flex justify-center gap-4">
        <button
          class="bg-[#F9B223] text-white font-semibold px-6 py-3 rounded-md font-dmsans hover:bg-[#e5a51f] transition"
        >
          Deploy Functions
        </button>
        <button
          class="border border-[#F9B223] text-[#F9B223] font-semibold px-6 py-3 rounded-md hover:bg-[#F9B223] hover:text-white transition font-dmsans"
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
          src="../images/home-image.png"
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
            src="../images/overlap-image-1.png"
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
            src="../images/overlap-image-2.png"
            alt="Function Config View"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section logic
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
</style>