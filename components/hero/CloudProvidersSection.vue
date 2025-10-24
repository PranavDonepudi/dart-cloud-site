<template>
  <section class="relative w-full bg-white pt-[180px] md:pt-[480px] pb-[80px] md:pb-[120px] z-10">
    <div class="w-full max-w-5xl mx-auto text-center px-4 md:px-[80px]">
      <!-- Tagline -->
      <p
        class="text-[#323338] font-semibold text-[18px] md:text-[24px] leading-[120%] md:leading-[100%]
               font-dmsans mb-[24px]"
      >
        Supporting seamless integration across multiple cloud providers
      </p>

      <!-- Cloud Provider Logos - Stack on mobile, row on desktop -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center mx-auto gap-[30px] md:gap-[40px] w-full"
        style="max-width: 748px;"
      >
        <img
          src="/images/icon-1.png"
          alt="Google Cloud"
          class="h-[50px] md:h-[60px] object-contain"
        />
        <img
          src="/images/icon-2.png"
          alt="AWS"
          class="h-[50px] md:h-[60px] object-contain"
        />
        <img
          src="/images/icon-3.png"
          alt="Microsoft Azure"
          class="h-[50px] md:h-[60px] object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Cloud providers section
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>