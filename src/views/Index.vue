<template>
  <div class="container">
    <div class="title">
      <span class="text">欢迎来到我的主页！</span>
    </div>
    <div class="box">
      <span class="border-line"></span>
      <div class="main">
        <h3>{{ store.info }}</h3>
        <span>{{ store.id }}</span>
        <span>{{ store.count }}</span><br>
        <el-button @click="add()">+</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../store/store';

const store = useStore()

const add = () => {
  store.count++;
}

</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  .title {
    padding: 15px 0;
    filter: contrast(10);
    background-color: #000;
  }

  .text {
    font-size: 36px;
    letter-spacing: -50px;
    color: #fff;
    animation: showup 5s linear forwards;
  }

  @keyframes showup {
    0% {
      filter: blur(10px);
    }

    100% {
      letter-spacing: 10px;
    }
  }

  .box {
    position: relative;
    width: 380px;
    height: 460px;
    overflow: hidden;
    background: #1c1c1c;
    border-radius: 8px;
    margin: 50px auto;
    color: #fff;

    .main {
      position: absolute;
      inset: 4px;
      background: #222;
      padding: 30px;
      border-radius: 8px;
      z-index: 2;
    }

    /* 添加流光动画 */
    .border-line {
      position: absolute;
      top: 0;
      inset: 0;
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    &::before,
    &::after,
    .border-line::before,
    .border-line::after{
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
        z-index: 1;
        transform-origin: bottom right;
        animation: animate 6s linear forwards;
    }

    &::after {
      animation-delay: -3s;
    }
    .border-line::before {
        background: linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770);
        animation-delay: -1.5s; /*动画开始前延迟*/
    }
    .border-line::after{
        background: linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770);
        animation-delay: -4.5s;
    }
  }


}
</style>