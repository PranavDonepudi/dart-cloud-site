<template>
  <div>
    <Navbar />
    <section class="px-10 py-24">
      <h1 class="text-center text-3xl font-bold text-[#3C2AB5] mb-16">
        About DartCloudFunctions
      </h1>
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="md:w-1/2 space-y-8 text-gray-700">
          <div>
            <h3 class="font-semibold mb-2">Our Mission</h3>
            <p>We believe developers should focus on building logic …</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Our Story</h3>
            <p>We started with a simple question …</p>
          </div>
        </div>
        <img src="/assets/images/about.png" alt="About Preview" class="md:w-1/2 rounded-xl shadow-lg" />
      </div>
    </section>
    <CTA class="mt-24" />
    <Footer />
  </div>
</template>
