<template>
  <section class="bg-white py-[60px] md:py-[100px]">
    <!-- Title -->
    <h2
      class="text-[#42389E] text-center font-dmsans font-bold text-[24px] md:text-[32px] leading-[100%] mb-[40px] md:mb-[80px] px-4"
    >
      Built For Enterprise Teams
    </h2>
    
    <!-- Purple container - Stack on mobile, side-by-side on desktop -->
    <div class="max-w-[1200px] mx-auto px-4 md:px-[40px]">
      <div
        class="bg-[#42389E] rounded-[12px] p-[30px] md:p-[60px] flex flex-col lg:flex-row gap-[30px] md:gap-[60px] items-center"
      >
        <!-- Left side - Text content -->
        <div class="flex-1">
          <!-- Badge -->
          <div class="inline-block mb-[20px] md:mb-[24px]">
            <span
              class="bg-[#F9B223] text-[#000000] font-dmsans font-semibold text-[12px] md:text-[14px] px-[16px] md:px-[20px] py-[6px] md:py-[8px] rounded-full"
            >
              Enterprise-Ready
            </span>
          </div>
          
          <!-- Heading -->
          <h3
            class="text-white font-dmsans font-bold text-[22px] md:text-[28px] leading-[120%] mb-[20px] md:mb-[24px]"
          >
            Seamless Team & Role Management
          </h3>
          
          <!-- Paragraphs -->
          <p
            class="text-white font-dmsans font-normal text-[14px] md:text-[16px] leading-[150%] mb-[16px] md:mb-[20px]"
          >
            Empower your enterprise teams with secure, centralized control. DartCloud Functions makes it simple to assign roles, manage approvals, and oversee projects all from one workspace.
          </p>
          
          <p
            class="text-white font-dmsans font-normal text-[14px] md:text-[16px] leading-[150%]"
          >
            With built-in stability, cost efficiency, and enterprise-grade security, you can scale confidently while maintaining complete visibility and control across your organization.
          </p>
        </div>
        
        <!-- Right side - Dashboard Image -->
        <div class="flex-1 w-full">
          <div
            class="bg-white rounded-[8px] border border-[#E5E5E5] overflow-hidden shadow-lg"
          >
            <img
              src="/images/settings.png"
              alt="Enterprise Team Management Dashboard"
              class="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Enterprise section component
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>