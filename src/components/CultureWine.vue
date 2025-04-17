<template>
  <div class="wrapper">
    <div class="square"></div>
    <div class="content">
      <div class="content-img">
        <img src="/images/culturewine.png" alt="culturewine" />
      </div>
      <div class="content-des">
        <h1>КУЛЬТУРА ВИНА</h1>
        <p>Тандем вина и модного бренда</p>
        <p>Наша миссия - развитие винной культуры Казахстана и создание новых трендов.</p>
        <div class="content-button">
          <button>Ознакомиться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  max-width: 685px;
}

.square {
  position: relative;
  width: 596px;
  height: 700px;
  background-color: #ccad7b;
  bottom: 868px;
  left: 835px;
}

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 595px;
  left: 800px;
}

.content-img {
  width: 605px;
  height: 800px;
}

.content-des {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
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
</style>
