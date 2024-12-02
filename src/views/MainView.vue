<template>
  <div class="main">
    <HomeSection />
    <AboutSection />
    <ProductsSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'MainView',
  components: {
    HomeSection,
    AboutSection,
    ProductsSection,
    ContactSection
  }
}
</script>

<style scoped>
.main {
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .main {
    padding-top: 80px; /* Adjust based on header height */
  }
}
</style>