<template>
  <div>
    <Navbar />
    <section class="px-10 py-24 bg-white">
      <h1 class="text-center text-3xl font-bold text-[#3C2AB5] mb-20">
        Plans Built for Every Stage of Growth
      </h1>
      <div class="grid md:grid-cols-4 gap-8 justify-center">
        <PricingCard plan="Standard" price="$10" features="1 User, 1 Function Only" />
        <PricingCard plan="Enhance" price="$149" features="Best for teams" popular />
        <PricingCard plan="Enterprise" price="Custom" features="Scalable enterprise support" />
        <PricingCard plan="Enterprise Plus" price="Custom" features="Custom SLA & Security" />
      </div>
      <CTA class="mt-24" />
    </section>
    <Footer />
  </div>
</template>
