<template>
    <div class="container">
        <div class="box">
            <div>
                <h2>今日点野食呀?</h2>
                <span id="name">{{ thing }}</span>
            </div>

            <button @click="handleClick()">{{ btnText }}</button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const thing = ref('');
    const btnText = ref('开始')
    let uname = [`麻辣烫`, `牛杂`, `火锅`, `汤面`, `烧腊`, `炸串`, `烤鱼`, `牛蛙`, `鸡公煲`];
    let flag = false;
    let timer = null;

    function getrandom(min, max) {
        return Math.floor(Math.random() * (max - min - 1) + min);
    }

    function clock() {
        //通过获取一个随机的数组下标来实现随机获取一个名字，并将这个名字赋值给变量random
        let random = uname[getrandom(0, uname.length - 1)];
        //将random塞到span里
        thing.value = random;
    };

    const handleClick = async () => {
        if (!flag) {
            timer = setInterval(clock, 50);
            btnText.value = '停止';
            flag = !flag;
        } else {
            clearInterval(timer);
            btnText.value = '开始';
            flag = !flag;
        }
    }
</script>
<style scoped lang="scss">

    .box {
        background: #000;
        margin: 0 auto;
        width: 500px;
        height: 600px;
        padding: 50px 30px;
        text-align: center;
        border-radius: 10px;
    }

    span, h2 {
        text-shadow: 0 0 10px white;
        background: linear-gradient(135deg, #71e5fe, #9de5fe, #9de5fe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /*名称 时间 匀速 无限
        animation: ff 0.9s linear infinite;
        /* font-size: 100px; */
        font-size: 50px;
    }

    @keyframes ff {
        to {
            filter: hue-rotate(360deg);
        }
    }

    h2 {
        font-size: 72px;
    }

    span {
        font-size: 46px;
    }

    button {
        margin-top: 100px;
        width: 150px;
        height: 45px;
        box-shadow: 0 0 10px #fff;
        border-color: #71e5fe;
        color: #71e5fe;
        /* 取消轮廓线 */
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>
