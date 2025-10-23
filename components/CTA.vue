<template>
  <section
    class="relative bg-[#42389E] text-center text-white rounded-[12px] mx-auto flex flex-col items-center justify-center shadow-md"
    style="
      width: 1384px;
      height: 394px;
      padding-left: 100px;
      padding-right: 100px;
      background-image: url('/images/bkg-1.png');
      background-repeat: repeat;
      background-size: contain;
      margin-top: 160px;
      margin-bottom: 120px;
    "
  >
    <!-- Title -->
    <h2 class="font-dmsans font-semibold text-[28px] leading-[100%] mb-[16px]">
      Stop Managing Servers. Start Building Functions.
    </h2>
    
    <!-- Subtitle -->
    <p
      class="text-[#E0E0E0] font-dmsans text-[16px] leading-[150%] mb-[24px] max-w-[800px]"
    >
      Start building with DartCloudFunctions today and experience the next
      generation of server-less computing.
    </p>
    
    <!-- Buttons -->
    <div class="flex justify-center gap-[16px]">
      <button
        class="bg-[#F9B223] text-[#42389E] font-semibold font-dmsans px-[24px] py-[12px] rounded-[8px] hover:bg-[#e5a51f] transition"
      >
        Deploy Function
      </button>
      <button
        class="border border-[#F9B223] text-[#F9B223] font-semibold font-dmsans px-[24px] py-[12px] rounded-[8px] hover:bg-[#F9B223] hover:text-white transition"
      >
        Start Sandbox
      </button>
    </div>
  </section>
</template>

<style scoped>
.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>