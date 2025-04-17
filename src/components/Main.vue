<template>
  <section class="company-section">
    <div class="component-wrapper">
      <Brands />
    </div>
    <div class="component-wrapper">
      <AboutCompany />
    </div>
    <div class="component-wrapper">
      <PhilosophyCompany />
    </div>
    <div class="component-wrapper">
      <CultureWine />
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutCompany from './AboutCompany.vue';
import Brands from './Brands.vue';
import CultureWine from './CultureWine.vue';
import PhilosophyCompany from './PhilosophyCompany.vue';
</script>

<style scoped>
.company-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.component-wrapper {
  position: relative;
}

@media (max-width: 767px) {
  .component-wrapper {
    all: unset;
    display: block;
    position: static !important;
  }

  .component-wrapper * {
    position: static !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
  }
}
</style>
