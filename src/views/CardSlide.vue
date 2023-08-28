<template>
    <div class="container">
        <div class="card-grid">
            <div class="mini-card" v-for="item, key in data.list" :key="key">
                <strong>{{ item.title }}</strong>
                <br />
                <h3 class="mini-card-title">{{ item.text }}</h3>
                <div class="link">
                    <span>{{ item.tip }}</span>
                    <br>
                    <a href="https://juejin.cn/post/7139728821862793223?utm_source=banner&utm_medium=createcenter&utm_campaign=codejj202209"
                        rel="tag">详情参见</a>
                </div>
                <div class="author-row">
                    <a href="https://juejin.cn/post/7139728821862793223?utm_source=banner&utm_medium=createcenter&utm_campaign=codejj202209"
                        rel="tag">
                        <img alt=""
                            src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d31d5677e764ca99096c5b34a3ffddb~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:250.awebp"
                            class="avatar avatar-80 photo jetpack-lazy-image jetpack-lazy-image--handled" height="80"
                            width="80"
                            srcset="https://secure.gravatar.com/avatar/2c12e74c8162614e08a31d704ed9e193?s=160&amp;d=retro&amp;r=pg 2x"
                            data-lazy-loaded="1" loading="eager"></a>
                    <br />
                    <div class="date"><span>2022.09.05 ~</span>
                        <span>2022.09.25</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const data = reactive({
    list: [
        {
            title: '码上掘金挑战赛',
            text: 'hello，掘友们好，本期的创意投稿大赛主题是码上掘金挑战赛！',
            tip: 'show出创意赢大奖!'
        },
        {
            title: '码上掘金挑战赛',
            text: 'hello，掘友们好，本期的创意投稿大赛主题是码上掘金挑战赛！',
            tip: 'show出创意赢大奖!'
        },
        {
            title: '码上掘金挑战赛',
            text: 'hello，掘友们好，本期的创意投稿大赛主题是码上掘金挑战赛！',
            tip: 'show出创意赢大奖!'
        },
        {
            title: '码上掘金挑战赛',
            text: 'hello，掘友们好，本期的创意投稿大赛主题是码上掘金挑战赛！',
            tip: 'show出创意赢大奖!'
        },
        {
            title: '码上掘金挑战赛',
            text: 'hello，掘友们好，本期的创意投稿大赛主题是码上掘金挑战赛！',
            tip: 'show出创意赢大奖!'
        }
    ]
})

</script>

<style lang="scss" scoped>
.card-grid {
    padding: 3rem 0 3rem 2rem;
    margin: 0;
    display: flex;
    overflow-x: scroll;

    .mini-card {
        padding: 24px;
        width: 250px;
        height: 300px;
        /*阴影和渐变*/
        box-shadow: -2rem 0 3rem -2rem #000;
        border-radius: 16px;
        background: linear-gradient(85deg, #434343, #262626);
        color: #fff;
        display: flex;
        flex-direction: column;
        transition: .2s;
        margin: 0;
        &:not(:first-child) {
            margin-left: -150px;
            box-shadow: -3rem 0 3rem -2rem #000;
        }
        &:hover {
            transform: translateY(-1rem) rotate(3deg);
        }

        &:hover ~ .mini-card {
            transform: translateX(130px);
        }

        .mini-card-title {
            font-size: 1.3rem;
            margin: 0 0 1rem;
        }

        .link span {
            background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
        }

        .link a {
            font-family: MD Primer Bold;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
            color: #ff7a18;
        }
    }
}
</style>