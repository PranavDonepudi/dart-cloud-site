<template>
  <div class="bg-white min-h-screen pt-[var(--navbar-height)]">
    <!-- About Hero Section -->
    <section class="bg-white py-[80px] md:py-[120px] px-4 md:px-[60px] lg:pl-[60px] lg:pr-[100px] w-full">
      <div class="w-full max-w-[1400px] mx-auto">
        <!-- Page Title -->
        <h1
          class="text-[#42389E] text-center font-dmsans font-bold text-[32px] md:text-[48px] leading-[100%] mb-[60px] md:mb-[80px]"
        >
          About DartCloudFunctions
        </h1>

        <!-- Two Column Layout -->
        <div
          class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[40px] md:gap-[60px] lg:gap-[80px]"
        >
          <!-- Left Column -->
          <div
            class="flex flex-col justify-between gap-[24px] w-full lg:max-w-[600px] order-2 lg:order-1"
          >
            <!-- Top Section -->
            <div class="flex flex-col gap-[24px]">
              <!-- Our Mission -->
              <div class="flex flex-col gap-[8px]">
                <h2
                  class="text-[#000000] font-dmsans font-bold text-[20px] md:text-[24px] leading-[120%]"
                >
                  Our Mission
                </h2>
                <p
                  class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                >
                  We believe developers should focus on building logic, not managing infrastructure.
                  Our Cloud Function is designed to give startups, enterprises, and innovators the
                  ability to deploy functions seamlessly, while staying cost-efficient and scalable.
                </p>
              </div>

              <!-- Our Story -->
              <div class="flex flex-col gap-[8px]">
                <h2
                  class="text-[#000000] font-dmsans font-bold text-[20px] md:text-[24px] leading-[120%]"
                >
                  Our Story
                </h2>
                <div class="flex flex-col gap-[8px]">
                  <p
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    We started with a simple question: Why should deploying a function be harder than
                    writing one?
                  </p>
                  <p
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    From that, we built a platform where any developer, from solo hackers to
                    enterprise teams, can sign up, create, and deploy functions without worrying
                    about servers, scaling, or downtime.
                  </p>
                </div>
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="flex flex-col gap-[8px]">
              <button
                @click="toggleValues"
                class="flex items-center justify-between text-left md:cursor-default group"
              >
                <h2
                  class="text-[#000000] font-dmsans font-bold text-[20px] md:text-[24px] leading-[120%]"
                >
                  What We Value
                </h2>
                <!-- Chevron icon - only visible on mobile -->
                <svg
                  :class="[
                    'w-6 h-6 text-[#42389E] transition-transform duration-300 md:hidden',
                    valuesExpanded ? 'rotate-180' : ''
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Collapsible content -->
              <transition
                name="expand"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <ul
                  v-show="valuesExpanded || isDesktop"
                  class="list-disc list-inside space-y-[8px] pl-1"
                >
                  <li
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    <span class="font-semibold text-[#000000]">Simplicity:</span> Tools that are easy
                    to use yet powerful.
                  </li>
                  <li
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    <span class="font-semibold text-[#000000]">Innovation:</span> Helping teams move
                    faster without sacrificing quality.
                  </li>
                  <li
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    <span class="font-semibold text-[#000000]">Trust:</span> Secure, reliable
                    infrastructure you can count on.
                  </li>
                  <li
                    class="text-[#5F6065] font-dmsans text-[14px] md:text-[16px] leading-[150%]"
                  >
                    <span class="font-semibold text-[#000000]">Community:</span> Building with
                    developers, for developers.
                  </li>
                </ul>
              </transition>
            </div>
          </div>

          <!-- Right Column -->
          <div
            class="w-full lg:flex-shrink-0 flex justify-center items-start order-1 lg:order-2 lg:max-w-[720px]"
          >
            <div
              class="bg-[#42389E] rounded-[12px] p-[24px] md:p-[40px] lg:p-[48px] w-full"
              style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
            >
              <div
                class="rounded-[6px] border-[0.5px] border-[#8D8D8D] overflow-hidden w-full"
                style="box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);"
              >
                <img
                  src="/images/create-function-edit-deploy.png"
                  alt="DartCloudFunctions Dashboard"
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTA />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: 'white-navbar'
})

import CTA from '~/components/CTA.vue'

const valuesExpanded = ref(true)
const isDesktop = ref(true)

const toggleValues = () => {
  if (!isDesktop.value) {
    valuesExpanded.value = !valuesExpanded.value
  }
}

const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) valuesExpanded.value = true
}

const enter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
}

const afterEnter = (el) => {
  el.style.height = 'auto'
  el.style.opacity = '1'
}

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  setTimeout(() => {
    el.style.height = '0'
    el.style.opacity = '0'
  }, 10)
}

onMounted(() => {
  checkDesktop()
  window.addEventListener('resize', checkDesktop)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDesktop)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}

/* Smooth expand/collapse animation */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>
