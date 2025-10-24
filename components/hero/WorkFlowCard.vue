<template>
  <div
    :class="[bgColor, 'w-full max-w-[370px] min-h-[420px] rounded-[12px] shadow-md p-[30px] md:p-[40px] flex flex-col justify-between']"
  >
    <!-- Title + Text -->
    <div>
      <h3
        class="text-[#0E121B] font-dmsans font-semibold text-[18px] md:text-[20px] leading-[120%] mb-[10px] md:mb-[12px]"
        style="letter-spacing: 0%; vertical-align: middle; font-weight: 600;"
      >
        {{ title }}
      </h3>
      <p
        class="text-[#5F5F60] font-dmsans text-[13px] md:text-[14px] leading-[140%] font-normal"
        style="letter-spacing: 0%; vertical-align: middle;"
      >
        {{ description }}
      </p>
    </div>
    
    <!-- Image -->
    <div
      class="mt-[16px] md:mt-[20px] w-full h-[150px] md:h-[180px] border border-[#42389E] rounded-[6px] bg-white flex justify-center items-center overflow-hidden"
    >
      <img
        :src="imageSrc"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Button -->
    <div class="flex justify-start mt-[20px] md:mt-[24px]">
      <button
        class="flex items-center gap-2 text-[#42389E] font-dmsans font-medium text-[14px] md:text-[16px] leading-[100%] hover:opacity-70 transition"
      >
        {{ buttonText }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-4 h-4 md:w-5 md:h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bgColor: {
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
  },
  imageSrc: {
    type: String,
    required: true
  },
  buttonText: {
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