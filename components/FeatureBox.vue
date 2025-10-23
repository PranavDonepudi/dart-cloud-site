<template>
  <div class="flex flex-col items-center text-center">
    <!-- Icon - Just display the image as-is, no border or background -->
    <div class="w-[92px] h-[92px] flex items-center justify-center mb-[20px]">
      <img
        :src="iconSrc"
        :alt="title"
        class="w-full h-full object-contain"
      />
    </div>
    
    <!-- Title with heading specifications - Fixed height to align all titles -->
    <h3
      class="font-dmsans font-semibold text-[18px] leading-[100%] text-center text-[#0E121B] mb-[12px] h-[40px] flex items-center justify-center"
      style="letter-spacing: 0%; font-weight: 600;"
    >
      {{ title }}
    </h3>
    
    <!-- Description with body text specifications -->
    <p
      class="font-dmsans font-normal text-[14px] leading-[140%] text-center text-[#5F6065]"
      style="letter-spacing: 0%;"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  iconSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>