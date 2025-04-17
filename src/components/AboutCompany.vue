<template>
    <div class="wrapper">
      <div class="square">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="content">
        <div class="content-img">
          <img src="/images/aboutcompany.png" alt="aboutcompany" />
        </div>
        <div class="content-des">
          <h1>О КОМПАНИИ</h1>
          <p>18 лет на рынке Казахстана</p>
          <p>
            Компания KWS предлагает своим партнерам, частным клиентам и любителям вина богатый
            ассортимент спиртных напитков от престижных мировых брендов, а также лучшие вина от
            исторически значимых виноделен мира.
          </p>
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: -420px;
  left: 835px;
}

.square div:nth-child(1) {
  width: 578px;
  height: 16px;
  background-color: #ccad7b;
}

.square div:nth-child(2) {
  width: 578px;
  height: 32px;
  background-color: #ccad7b;
}

.square div:nth-child(3) {
  width: 578px;
  height: 60px;
  background-color: #ccad7b;
}

.square div:nth-child(4) {
  width: 578px;
  height: 534px;
  background-color: #ccad7b;
}

.content {
  position: absolute;
  top: -180px;
  left: 800px;
}

.content-img {
  width: 605px;
  height: 433px;
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

@media (max-width: 768px) {
  .square {
    overflow: hidden;
  }
}
</style>
