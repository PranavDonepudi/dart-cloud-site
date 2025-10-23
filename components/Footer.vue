<template>
  <footer class="bg-[#EAE8F4] text-[#323338] py-[80px] px-[100px]">
    <div
      class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[60px]"
    >
      <!-- Logo and Description -->
      <div>
        <div class="flex items-center gap-2 mb-[16px]">
          <img src="/assets/images/logo.png" alt="DartCloud Logo" class="h-8" />
        </div>
        <p class="text-[14px] leading-[150%] text-[#5F6065] font-dmsans">
          Cloud infrastructure platform that includes server-less deployment,
          autoscaling, and auto server provisioning for applications.
        </p>
      </div>

      <!-- Resources -->
      <div>
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans">
          Resources
        </h4>
        <ul class="space-y-[8px] text-[14px] font-dmsans">
          <li>Customer Support</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans">Company</h4>
        <ul class="space-y-[8px] text-[14px] font-dmsans">
          <li>Pricing</li>
          <li>Documentation</li>
          <li>About Us</li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="font-semibold text-[16px] mb-[12px] font-dmsans">
          Subscribe to Newsletter
        </h4>
        <div class="flex">
          <input
            type="email"
            placeholder="Enter email address"
            class="flex-1 px-[12px] py-[10px] rounded-l-md text-[14px] border border-[#D1D1D1] outline-none"
          />
          <button
            class="bg-[#F9B223] text-[#42389E] px-[16px] rounded-r-md font-semibold"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>
