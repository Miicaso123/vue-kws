<template>
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('./images/fon.jpeg')"
  >
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <div class="text-center z-10 w-[852px] h-[108px] text-[24px] leading-[36px] tracking-[0.12em] uppercase mx-auto text-[#FFFFFF]">
      <h1>
        {{ languageStore.translations.hero.title }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';

const languageStore = useLanguageStore();
</script>

<style scoped>
h1 {
  font-family: 'Muller', sans-serif;
  font-weight: 100;
}
</style>
