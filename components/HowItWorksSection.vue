<template>
  <section class="bg-white py-[100px]">
    <!-- Title -->
    <h2
      class="text-[#42389E] text-center font-dmsans font-bold text-[32px] leading-[100%] mb-[80px]"
      style="letter-spacing: 0%; vertical-align: middle;"
    >
      How DartCloudFunctions Works
    </h2>

    <!-- Three cards container -->
    <div
      class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[40px] justify-items-center"
    >
      <!-- Card 1 -->
      <WorkflowCard
        bg-color="bg-[#F9A71E33]"
        title="Sign-up"
        description="Get started instantly with a secure account. Authenticate, set your environment, and connect your repo in seconds."
        image-src="/images/welcome-page.png"
        button-text="Sign-up"
      />

      <!-- Card 2 -->
      <WorkflowCard
        bg-color="bg-[#EDECF6]"
        title="Create Your Function"
        description="Define your function with our inline editor or upload existing code. Configure runtime, all in one unified UI."
        image-src="/images/create-function.png"
        button-text="Create Function"
      />

      <!-- Card 3 -->
      <WorkflowCard
        bg-color="bg-[#6AFF4B33]"
        title="Deploy Function"
        description="Hit deploy to push your function live. Monitor logs, performance, and real-time metrics from our dashboard, anytime, zero hassle."
        image-src="/images/create-function-deploy.png"
        button-text="Deploy Function"
      />
    </div>
  </section>
</template>

<script setup>
import WorkflowCard from '~/components/home/WorkflowCard.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>