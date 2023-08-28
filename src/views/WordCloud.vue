<template>
    <div class="container">
        <WordCloudRandom>
            <div class="card" v-for="item in list" :key="item">
                <div class="content">{{ item }}</div>
            </div>
        </WordCloudRandom>
    </div>
</template>

<script setup>
import WordCloudRandom from '../components/WordCloudRandom.vue'
import { ref } from 'vue';

const list = ref(['好好吃饭', '好好睡觉', '好好玩', 'Vue', 'react', 'angular'])

</script>

<style lang="scss" scoped>
.word-cloud-random {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    position: relative;
}
.container {
    width: 880px;
    height: 640px;
    background-color: #222832;
}
.card {
    width: 200px;
    height: auto;
    box-shadow: 0px 2px 4px 0px rgba(0, 78, 106, 0.8);
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    background: transparent;
    text-align: center;
    padding: 6px;
    // transition: all 0.3s;
    &:hover {
        border: 1px solid #2be5eb;
        background: #06436d;
        box-shadow: 0px 2px 5px 0px rgba(0, 78, 106, 0.8);
    }
}
.content {
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #2be5eb;
    line-height: 48px;
}
</style>