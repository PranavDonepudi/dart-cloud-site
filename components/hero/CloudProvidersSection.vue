<template>
  <section class="relative w-full bg-white pt-[550px] pb-[120px] z-10">
    <div class="max-w-5xl mx-auto text-center px-[80px]">
      <!-- Tagline -->
      <p
        class="text-[#323338] font-semibold text-[24px] leading-[100%]
               font-dmsans mb-[24px]"
      >
        Supporting seamless integration across multiple cloud providers
      </p>

      <!-- Cloud Provider Logos Frame -->
      <div
        class="flex justify-center items-center mx-auto"
        style="width: 748px; height: 129px; gap: 40px;"
      >
        <img
          src="/images/icon-1.png"
          alt="Google Cloud"
          class="h-[60px] object-contain"
        />
        <img
          src="/images/icon-2.png"
          alt="AWS"
          class="h-[60px] object-contain"
        />
        <img
          src="/images/icon-3.png"
          alt="Microsoft Azure"
          class="h-[60px] object-contain"
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