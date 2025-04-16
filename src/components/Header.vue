<template>
  <header :class="['fixed left-0 w-full transition-all duration-300 z-20']">
    <div :class="[isScrolled ? 'scrolled-wrapper' : 'default-wrapper hoverable']">
      <div
        :class="[
          'container mx-auto flex gap-y-8',
          isScrolled
            ? 'flex-row justify-around items-center space-x-8 py-4'
            : 'flex-col items-center pb-6',
        ]"
      >
        <div
          :class="[
            isScrolled
              ? 'text-white text-3xl font-thin Main-title'
              : 'text-white text-5xl font-thin Main-title',
          ]"
        >
          KWS
        </div>

        <nav :class="['flex gap-x-16', isScrolled ? 'space-x-6' : 'space-x-8 mt-4']">
          <a href="#" class="">
            {{ languageStore.translations.header.about }}
          </a>
          <a href="#">
            {{ languageStore.translations.header.services }}
          </a>
          <a href="#">
            {{ languageStore.translations.header.brands }}
          </a>
          <a href="#">
            {{ languageStore.translations.header.events }}
          </a>
          <a href="#">
            {{ languageStore.translations.header.contacts }}
          </a>
          <div class="text-base leading-6">
            <span
              :class="{ 'font-bold': languageStore.currentLanguage === 'Ru' }"
              class="cursor-pointer"
              @click="languageStore.setLanguage('Ru')"
            >
              Ru
            </span>
            /
            <span
              :class="{ 'font-bold': languageStore.currentLanguage === 'Kz' }"
              class="cursor-pointer"
              @click="languageStore.setLanguage('Kz')"
            >
              Kz
            </span>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguageStore } from '@/stores/language';

const languageStore = useLanguageStore();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 130;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.Main-title {
  font-family: 'Muller';
}

header nav a {
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
  font-family: 'Muller', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
}

header nav a:hover {
  color: #d1d5db;
}

header nav div {
  color: #ffffff;
}

header nav div span:hover {
  color: #d1d5db;
}

.default-wrapper {
  background-color: transparent;
  padding-top: 50px;
  transition: all 0.3s ease;
}

.default-wrapper.hoverable:hover {
  background-color: #222222;
}

.scrolled-wrapper {
  background-color: #222222;
  transition: all 0.3s ease;
  padding: 10px 0;
}
</style>
