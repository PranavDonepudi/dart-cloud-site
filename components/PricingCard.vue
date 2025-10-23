<template>
  <div
    :class="[cardBg, borderColor, 'w-[371px] min-h-[792px] rounded-[12px] border-[0.5px] p-[36px_24px] flex flex-col gap-[10px] relative overflow-hidden']"
  >
  <!-- 🟣 Icon + Popular + Billed Annually -->
  <div class="relative mb-[40px]">
    <!-- Icon -->
    <div class="absolute top-[5px] left-[20px]">
      <img
        v-if="iconSrc"
        :src="iconSrc"
        alt="plan icon"
        class="w-[32px] h-[32px]"
      />
    </div>

    <!-- Popular badge (beside icon) -->
    <div
      v-if="badgeText"
      class="absolute top-[20px] left-[70px]"
    >
      <span
        :class="[badgeColor, 'text-[#42389E] font-dmsans font-semibold text-[14px] px-[14px] py-[4px] rounded-full shadow-sm']"
      >
        {{ badgeText }}
      </span>
    </div>

    <!-- Billed annually tilted badge -->
    <div
      class="absolute"
      style="
        width: 119px;
        height: 33px;
        top: 51px;
        left: 200px;
        transform: rotate(-12deg);
      "
    >
      <span
        class="flex items-center justify-center w-full h-full text-[#42389E] font-dmsans text-[12px] border border-[#42389E] rounded-[42px] bg-[#E1E2F0] shadow-sm"
      >
        Billed annually
      </span>
    </div>
  </div>


    <!-- Rest of the card content -->
    <h3 :class="[textColor, 'font-dmsans font-bold text-[24px] leading-[120%] mb-[8px]']">
      {{ planName }}
    </h3>

    <div class="flex items-baseline gap-[4px] mb-[24px]">
      <span :class="[textColor, 'font-dmsans font-bold text-[48px] leading-[100%]']">
        {{ price }}
      </span>
      <span :class="[textColor, 'font-dmsans text-[20px] leading-[100%]']">
        {{ billingPeriod }}
      </span>
    </div>

    <div :class="[borderColor, 'w-full h-[0.5px] mb-[24px]']"></div>

    <ul class="space-y-[12px] mb-[32px] flex-grow">
      <li
        v-for="(feature, index) in features"
        :key="index"
        :class="[textColor, 'flex items-start gap-[8px] font-dmsans text-[14px] leading-[150%]']"
      >
        <svg
          class="w-5 h-5 flex-shrink-0 mt-[2px]"
          :class="textColor"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {{ feature }}
      </li>
    </ul>
    <!-- Transparent Subscribe Button -->
    <button
      :class="[
        'w-full bg-transparent font-dmsans font-semibold text-[16px] py-[12px] rounded-[8px] border-2 transition duration-200',
        // Base text + border color
        cardBg === 'bg-[#42389E]'
          ? 'text-white border-white hover:bg-white/10'
          : 'text-[#42389E] border-[#42389E] hover:bg-[#42389E]/10 hover:text-[#42389E]'
      ]"
    >
      {{ buttonText }}
    </button>



  </div>
</template>

<script setup>
defineProps({
  planName: String,
  price: String,
  billingPeriod: { type: String, default: '' },
  badgeText: { type: String, default: '' },
  badgeColor: { type: String, default: '' },
  cardBg: { type: String, default: 'bg-white' },
  textColor: { type: String, default: 'text-[#42389E]' },
  borderColor: { type: String, default: 'border-[#42389E]' },
  buttonText: String,
  buttonStyle: { type: String, default: 'outline' },
  features: Array,
  iconSrc: { type: String, default: '' } // 🆕 added prop
})
</script>
