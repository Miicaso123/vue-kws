<template>
  <section v-for="(section, index) in sections" :key="section.id" class="main">
    <div
      v-for="(shape, i) in shapesPerSection[index] || []"
      :key="i"
      class="formoshka"
      :style="{
        width: shape.width,
        height: shape.height,
        top: shape.top,
        left: shape.left,
        right: shape.right,
        bottom: shape.bottom,
        backgroundColor: shape.color || '#ccad7b',
        position: 'absolute',
        zIndex: 0,
      }"
    />

    <div class="wrapper-container">
      <div
        class="wrapper"
        :class="[index % 2 === 0 ? 'left' : 'right', index % 4 >= 2 ? 'text-top' : 'text-bottom']"
      >
        <div class="img-wrapper">
          <div
            class="background-img"
            :style="{ backgroundImage: `url(${section.img})` }"
            :aria-label="section.title"
          ></div>
        </div>

        <div class="des-wrapper">
          <h2 class="title">{{ section.title }}</h2>
          <p class="zagolovok">{{ section.subtitle }}</p>
          <p class="text">{{ section.main_text }}</p>
          <button></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useMainTwoSectionStore } from '@/stores/maintwo';

type Shape = {
  width: string;
  height: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color?: string;
};

const shapesPerSection: Shape[][] = [
  [
    { width: '480px', height: '423px', top: '0', left: '0' },
    { width: '200px', height: '200px', top: '50px', right: '0' },
  ],
  [
    { width: '400px', height: '150px', bottom: '0', left: '0' },
    { width: '250px', height: '300px', top: '100px', right: '0' },
  ],
  [
    { width: '300px', height: '300px', top: '0', right: '0' },
    { width: '100px', height: '100px', bottom: '0', left: '50%' },
  ],
];

const store = useMainTwoSectionStore();
const sections = computed(() => store.sections);

onMounted(() => {
  store.fetchData();
});
</script>

<style scoped>
.main {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.formoshka {
  position: absolute;
  top: 0;
  background: #ccad7b;
  z-index: 0; 
}

.wrapper-container {
  width: 100%;
  max-width: 1280px; 
  padding-top: 100px;
  margin: 0 auto;
  padding-inline: 40px; 
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

/* Картинка слева */
.wrapper.left {
  flex-direction: column;
  align-items: flex-start;
}

/* Картинка справа */
.wrapper.right {
  flex-direction: column;
  align-items: flex-end;
}

/* Картинка + текст в колонку (текст снизу) */
.wrapper.text-bottom .img-wrapper {
  order: 0;
}
.wrapper.text-bottom .des-wrapper {
  order: 1;
}

/* Картинка + текст в колонку (текст сверху) */
.wrapper.text-top .img-wrapper {
  order: 1;
}
.wrapper.text-top .des-wrapper {
  order: 0;
}

.img-wrapper {
  width: 605px;
  height: 433px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.des-wrapper {
  max-width: 500px;
  text-align: left;
}
</style>
