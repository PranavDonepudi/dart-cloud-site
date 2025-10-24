<template>
  <div
    :class="[
      cardBg,
      'rounded-[12px] border-2',
      borderColor,
      'p-[24px] md:p-[32px] flex flex-col gap-[20px] md:gap-[24px]',
      'shadow-lg hover:shadow-xl transition-all duration-300',
      'w-full h-full min-h-[500px] md:min-h-[600px]'
    ]"
  >
    <!-- Badge (if exists) -->
    <div v-if="badgeText" class="flex justify-center">
      <span
        :class="[
          badgeColor,
          'text-white font-dmsans font-semibold text-[12px] px-[16px] py-[6px] rounded-full'
        ]"
      >
        {{ badgeText }}
      </span>
    </div>

    <!-- Icon -->
    <div class="flex justify-center">
      <img
        :src="iconSrc"
        alt="Plan Icon"
        class="w-[40px] h-[40px] md:w-[48px] md:h-[48px] object-contain"
      />
    </div>

    <!-- Plan Name -->
    <h3
      :class="[
        textColor,
        'font-dmsans font-bold text-[20px] md:text-[24px] text-center leading-[120%]'
      ]"
    >
      {{ planName }}
    </h3>

    <!-- Price -->
    <div class="flex items-baseline justify-center gap-[4px]">
      <span
        :class="[
          textColor,
          'font-dmsans font-bold text-[40px] md:text-[48px] leading-[100%]'
        ]"
      >
        {{ price }}
      </span>
      <span
        v-if="billingPeriod"
        :class="[
          textColor,
          'font-dmsans text-[16px] md:text-[18px] opacity-70'
        ]"
      >
        {{ billingPeriod }}
      </span>
    </div>

    <!-- Features List -->
    <ul class="flex flex-col gap-[12px] flex-grow">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start gap-[8px]"
      >
        <!-- Checkmark Icon -->
        <svg
          class="w-5 h-5 flex-shrink-0 mt-[2px]"
          :class="textColor"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span
          :class="[
            textColor,
            'font-dmsans text-[13px] md:text-[14px] leading-[150%]'
          ]"
        >
          {{ feature }}
        </span>
      </li>
    </ul>

    <!-- Button with mobile interactivity -->
    <button
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      @click="handleClick"
      :class="[
        buttonClasses,
        'font-dmsans font-semibold text-[14px] md:text-[16px] px-[24px] md:px-[28px] py-[12px]',
        'rounded-[8px] transition-all duration-200 w-full',
        isPressed ? 'scale-95' : 'scale-100'
      ]"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  planName: String,
  price: String,
  billingPeriod: String,
  iconSrc: String,
  badgeText: String,
  badgeColor: String,
  cardBg: String,
  textColor: String,
  borderColor: String,
  buttonText: String,
  buttonStyle: String, // 'solid' or 'outline'
  features: Array
})

const isPressed = ref(false)
let pressTimeout = null

// Button styling based on style prop
const buttonClasses = computed(() => {
  if (props.buttonStyle === 'solid') {
    return 'bg-[#F9B223] text-[#42389E] hover:bg-[#e5a51f]'
  } else {
    return `border-2 ${props.borderColor} ${props.textColor} hover:bg-[#42389E] hover:text-white`
  }
})

const handleTouchStart = () => {
  isPressed.value = true
}

const handleTouchEnd = () => {
  if (pressTimeout) {
    clearTimeout(pressTimeout)
  }
  
  pressTimeout = setTimeout(() => {
    isPressed.value = false
  }, 150)
}

const handleClick = () => {
  console.log(`${props.planName} - ${props.buttonText} clicked`)
  // Add your action logic here
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}

button {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>