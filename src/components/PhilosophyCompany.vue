<template>
  <div class="wrapper">
    <div class="square"></div>
    <div class="content">
      <div class="content-des">
        <h1>Философия компании</h1>
        <p>Тандем вина и модного бренда</p>
        <p>
          Наша работа связана с уникальными продуктами. Вина и спиртные напитки ассоциируются с
          праздником, эмоциями, весельем и радостью. Поэтому мы стремимся к совершенству, гарантируя
          высокое качество и эксклюзивность нашей продукции.
        </p>
        <div class="content-button">
          <button>Ознакомиться</button>
        </div>
      </div>
      <div class="content-img">
        <img src="/images/philosophycompany.png" alt="philosophycompany" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 685px;
  padding-top: 10%;
}

.square {
  position: relative;
  width: 596px;
  height: 700px;
  background-color: #ccad7b;
}

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: -24%;
  left: 120px;
}

.content-img {
  width: 605px;
  height: 900px;
}

.content-des {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.content-des h1 {
  font-family: 'Muller';
  font-size: 30px;
}

.content-des p:nth-child(1) {
  color: #a1a1a1;
  font-size: 16px;
}

.content-des p:nth-child(2) {
  color: #010101;
  font-size: 16px;
}

.content-button button {
  margin: 56px 0 0 0;
  cursor: pointer;
  height: 56px;
  width: 320px;
  background: #fff;
  text-align: center;
  border: 1px solid #c1c1c1;
  border-radius: 2px;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #010101;
}

.content-button button:hover {
  background: #010101;
  border: 1px solid #010101;
  color: #fff;
}

.content-img {
  width: 605px;
  height: 900px;
}

@media (max-width: 768px) {
  .content-img {
    width: 100%;
  }

  .square {
    overflow: hidden;
    width: 100%;
  }
}
</style>
