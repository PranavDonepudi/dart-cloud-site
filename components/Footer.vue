<template>
  <footer class="bg-[#ECEBF5] text-[#323338] py-[60px] md:py-[80px] px-[20px] md:px-[60px] lg:px-[100px] w-full">
    <div
      class="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[60px]"
    >
      <!-- Logo and Description -->
      <div class="w-full">
        <div class="flex items-center gap-2 mb-[16px]">
          <img 
            src="/assets/images/logo.png" 
            alt="DartCloud Logo" 
            class="h-8" 
            style="filter: brightness(0) saturate(100%) invert(27%) sepia(45%) saturate(2361%) hue-rotate(227deg) brightness(93%) contrast(91%);" 
          />
        </div>
        <p class="text-[14px] leading-[150%] text-[#5F6065] font-dmsans">
          Cloud infrastructure platform that includes server-less deployment,
          autoscaling, and auto server provisioning for applications.
        </p>
      </div>

      <!-- Resources -->
      <div class="w-full">
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans text-[#5F5F60]">
          Resources
        </h4>
        <ul class="space-y-[8px] text-[14px] font-dmsans text-[#5F6065]">
          <li>
            <a 
              href="#" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              Customer Support
            </a>
          </li>
          <li>
            <a 
              href="#" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a 
              href="#" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <!-- Company -->
      <div class="w-full">
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans text-[#5F5F60]">
          Company
        </h4>
        <ul class="space-y-[8px] text-[14px] font-dmsans text-[#5F6065]">
          <li>
            <NuxtLink 
              to="/pricing" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              Pricing
            </NuxtLink>
          </li>
          <li>
            <a 
              href="#" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              Documentation
            </a>
          </li>
          <li>
            <NuxtLink 
              to="/about" 
              class="hover:text-[#42389E] transition-colors active:scale-95 inline-block"
              @touchstart="handleTouchStart($event)"
              @touchend="handleTouchEnd($event)"
            >
              About Us
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="w-full">
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans text-[#5F5F60]">
          Subscribe to Newsletter
        </h4>
        <form @submit.prevent="handleSubscribe" class="w-full">
          <div class="flex flex-col sm:flex-row gap-[8px] sm:gap-0">
            <input
              v-model="email"
              type="email"
              placeholder="Enter email address"
              required
              class="flex-1 px-[12px] py-[10px] sm:rounded-l-md rounded-md sm:rounded-r-none text-[14px] border border-[#D1D1D1] outline-none bg-white focus:border-[#42389E] transition-colors"
            />
            <button
              type="submit"
              :class="[
                'bg-[#F9A71E] text-[#42389E] px-[16px] py-[10px] sm:rounded-r-md rounded-md sm:rounded-l-none font-semibold transition-all duration-200',
                'hover:bg-[#e5961c]',
                isSubscribing ? 'scale-95 bg-[#e5961c]' : 'scale-100'
              ]"
              @touchstart="isSubscribing = true"
              @touchend="handleButtonTouchEnd"
            >
              Subscribe
            </button>
          </div>
          <p v-if="subscribeMessage" class="text-[12px] mt-[8px] text-[#42389E] font-dmsans">
            {{ subscribeMessage }}
          </p>
        </form>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribeMessage = ref('')
const isSubscribing = ref(false)
let touchTimeout = null

const handleTouchStart = (event) => {
  // Add visual feedback for touch
  event.currentTarget.style.transform = 'scale(0.98)'
}

const handleTouchEnd = (event) => {
  // Remove visual feedback
  setTimeout(() => {
    event.currentTarget.style.transform = 'scale(1)'
  }, 100)
}

const handleButtonTouchEnd = () => {
  if (touchTimeout) {
    clearTimeout(touchTimeout)
  }
  
  touchTimeout = setTimeout(() => {
    isSubscribing.value = false
  }, 150)
}

const handleSubscribe = () => {
  if (email.value) {
    // Handle subscription logic here
    console.log('Subscribing email:', email.value)
    
    // Show success message
    subscribeMessage.value = '✓ Successfully subscribed!'
    
    // Clear email and message after 3 seconds
    setTimeout(() => {
      email.value = ''
      subscribeMessage.value = ''
    }, 3000)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}

/* Smooth transitions for all interactive elements */
a, button, input {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;
}

a {
  transition: all 0.2s ease;
}

/* Focus styles for accessibility */
input:focus {
  outline: 2px solid #42389E;
  outline-offset: 2px;
}

button:focus {
  outline: 2px solid #42389E;
  outline-offset: 2px;
}
</style>