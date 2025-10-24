<template>
  <section class="bg-white py-[60px] md:py-[100px] w-full">
    <!-- Title -->
    <h2
      class="text-[#42389E] text-center font-dmsans font-bold text-[24px] md:text-[32px] leading-[100%] mb-[40px] md:mb-[80px] px-4 w-full"
    >
      Why Teams Use DartCloudFunctions
    </h2>

    <!-- Four feature boxes - Stack on mobile, 2 cols on tablet, 4 cols on desktop -->
    <div
      class="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[60px] px-[20px] md:px-[40px]"
    >
      <!-- Feature 1 -->
      <FeatureBox
        icon-src="/images/Frame-1.png"
        title="Built for Scale"
        description="Functions auto-scale to handle spikes in traffic effortlessly."
      />

      <!-- Feature 2 -->
      <FeatureBox
        icon-src="/images/Frame-2.png"
        title="Dart Native Language"
        description="Seamlessly integrate with Dart, plus Dart SDK support."
      />

      <!-- Feature 3 -->
      <FeatureBox
        icon-src="/images/Frame-3.png"
        title="Faster Deployments"
        description="Push from code to cloud in seconds."
      />

      <!-- Feature 4 -->
      <FeatureBox
        icon-src="/images/Frame-4.png"
        title="Pay for What You Use"
        description="No idle costs, only pay per execution."
      />
    </div>
  </section>
</template>

<script setup>
import FeatureBox from '~/components/FeatureBox.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>