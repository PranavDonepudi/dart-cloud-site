<template>
  <div>
    <!-- HERO SECTION -->
    <HeroSection />

    <!-- Cloud Providers -->
    <CloudProvidersSection/>

    <WhatIsDCFSection/>

    <!-- How DartCloudFunctions Works Section -->
    <HowItWorksSection />
    
    <!-- Why Teams Use DartCloudFunctions Section -->
    <WhyTeamsSection />
    
    <!-- Enterprise Section -->
    <EnterpriseSection />
    
    <!-- Pricing Section -->
    <PricingSection />
    
    <!-- CTA -->
    <CTA />
  </div>
</template>

<script setup>
import HeroSection from '~/components/hero/HeroSection.vue'
import CloudProvidersSection from '~/components/hero/CloudProvidersSection.vue'
import WhatIsDCFSection from '~/components/hero/WhatIsDCFSection.vue'
import HowItWorksSection from '~/components/HowItWorksSection.vue'
import WhyTeamsSection from '~/components/WhyTeamsSection.vue'
import EnterpriseSection from '~/components/home/EnterpriseSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import CTA from '~/components/CTA.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>