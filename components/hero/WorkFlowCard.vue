<template>
  <div
    :class="[bgColor, 'w-[370px] h-[420px] rounded-[12px] shadow-md p-[40px] flex flex-col justify-between']"
  >
    <!-- Title + Text -->
    <div>
      <h3
        class="text-[#000000] font-dmsans font-bold text-[20px] leading-[100%] mb-[12px]"
      >
        {{ title }}
      </h3>
      <p
        class="text-[#323338] font-dmsans text-[16px] leading-[140%] font-normal"
      >
        {{ description }}
      </p>
    </div>
    
    <!-- Image -->
    <div
      class="mt-[20px] w-full h-[180px] border border-[#42389E] rounded-[6px] bg-white flex justify-center items-center overflow-hidden"
    >
      <img
        :src="imageSrc"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Button -->
    <div class="flex justify-start mt-[24px]">
      <button
        class="flex items-center gap-2 text-[#42389E] font-dmsans font-medium text-[16px] leading-[100%] border-b border-transparent hover:border-[#42389E] transition"
      >
        {{ buttonText }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
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