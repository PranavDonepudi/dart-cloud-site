<template>
  <div
    class="min-h-screen flex flex-col relative text-white bg-[#342D76] overflow-hidden"
  >
    <!-- Background Image Layer with -180° gradient overlay -->
    <div
      class="absolute inset-0 bg-[#342D76] bg-[url('/public/images/hero-bkg.jpg')] bg-cover bg-center"
      style="background-image: linear-gradient(-180deg, #342D76 0%, #0000001A 100%), url('/assets/images/hero-bkg.jpg');"
    ></div>

    <!-- Keep Navbar same -->
    <Navbar />

    <main class="flex-grow pt-24 relative z-10">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
