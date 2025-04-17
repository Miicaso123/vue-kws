<template>
    <div class="wrapper">
      <div class="square"></div>
      <div class="content">
        <div class="content-img">
          <img src="/images/brands.png" alt="brands" />
        </div>
        <div class="content-des">
          <h1>БРЕНДЫ</h1>
          <p>№1 по импорту тихих и игристых вин</p>
          <p>
            В коллекции KWS более 150 производителей, являющихся лидерами в своей сфере. Мы передаем
            наследие каждого бренда, уважая и поддерживая высокое качество их продукции.
          </p>
          <div class="content-button">
            <button>Ознакомиться</button>
          </div>
        </div>
      </div>
      <div class="square-two">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 685px;
}

.square {
  position: relative;
  width: 725px;
  height: 503px;
  background-color: #ccad7b;
}

.square-two {
  position: relative;
  display: flex;
  gap: 16px;
  left: 120px;
  top: 385px;
  flex-wrap: wrap;
}

.square-two div:nth-child(1),
.square-two div:nth-child(2),
.square-two div:nth-child(3),
.square-two div:nth-child(4),
.square-two div:nth-child(5) {
  background-color: #ccad7b;
  height: 64px;
}

.square-two div:nth-child(1) {
  width: 16px;
}
.square-two div:nth-child(2) {
  width: 32px;
}
.square-two div:nth-child(3) {
  width: 40px;
}
.square-two div:nth-child(4) {
  width: 56px;
}
.square-two div:nth-child(5) {
  width: 397px;
}

.content {
  position: absolute;
  top: 100px;
  left: 120px;
  display: flex;
  flex-direction: column;
}

.content-img {
  width: 605px;
  height: 433px;
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

@media (max-width: 768px) {
  .content {
    top: 5vh;
    left: 2%;
  }
  .content-img {
    width: 96%;
  }
  .square-two {
    display: none;
  }

  .square {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .content-des h1 {
    font-size: 24px;
  }
  .content-des p {
    font-size: 14px;
  }
  .square-two {
    display: none;
  }

  .square {
    width: 100%;
  }
}
</style>
