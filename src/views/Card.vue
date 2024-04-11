<template>
    <div class="container" style="background-color: #083d41;">
        <div class="card">
            <div class="box">

            </div>

            <div class="box">
                <div class="content">
                    <h2>
                        Alexa
                        <br>
                        <span>
                            Professional Artist
                        </span>
                    </h2>

                    <ul>
                        <li>
                            Posts
                            <span>99</span>
                        </li>
                        <li>
                            Followers
                            <span>999+</span>
                        </li>
                        <li>
                            Following
                            <span>1</span>
                        </li>
                    </ul>

                    <button>Follow</button>
                </div>
            </div>

            <div class="circle">
                <div class="img_box">
                    <img src="https://i.postimg.cc/RZtnVWM0/user.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --clr: #083d41
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #083d41;
}

.card {
    background-color: #083d41;
    position: relative;

    width: 320px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 100px;
}

.card .box {
    background-color: tomato;
    position: relative;

    width: 110%;
    height: 200px;
    border-radius: 15px;
}

.card .box:nth-child(1)::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;

    position: absolute;
    z-index: 10;
    top: 106px;
    left: -1px;
    border-bottom-left-radius: 20px;
    box-shadow: -6px 6px #083d41;
}

.card .box:nth-child(1)::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;

    position: absolute;
    z-index: 10;
    bottom: -1px;
    left: 105px;
    border-bottom-left-radius: 20px;
    box-shadow: -6px 6px #083d41;
}

.card .box:nth-child(2) {
    background-color: #fff;

    width: 100%;
    height: 220px;
}

.card .box:nth-child(2)::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;

    position: absolute;
    z-index: 10;
    bottom: 106px;
    left: -1px;
    border-top-left-radius: 20px;
    box-shadow: -6px -6px #083d41;
}

.card .box:nth-child(2)::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;

    position: absolute;
    z-index: 10;
    top: -1px;
    left: 109px;
    border-top-left-radius: 20px;
    box-shadow: -6px -6px #083d41;
}

.card .circle {
    background-color: #000;

    width: 180px;
    height: 180px;
    position: absolute;
    left: -70px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 10px solid #083d41;
}

.card .box .img_box,
.card .circle .img_box {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: 50%;
}

.card .box .img_box {
    border-radius: 15px;
}

.card .box .img_box video,
.card .circle .img_box img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .box .content {
    position: absolute;
    inset: 0;
    padding: 30px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.card .box .content h2 {
    width: 100%;
    padding-left: 120px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.1em;
    font-size: 1.15em;
    font-weight: 600;
    color: #333;
}

.card .box .content h2 span {
    letter-spacing: 0.05em;
    font-size: 0.75em;
    font-weight: 400;
    color: tomato;
    text-transform: initial;
}

.card .box .content ul {
    position: relative;
    top: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 0 10px;
}

.card .box .content ul li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    font-size: 0.85em;
    font-weight: 500;
    color: #999;
}

.card .box .content ul li:not(:last-child) {
    border-right: 1px solid #ccc;
}

.card .box .content ul li span {
    font-size: 1.65em;
    color: #333;
}

.card .box .content button {
    position: relative;
    top: 25px;
    padding: 8px 30px;
    border: none;
    outline: none;
    background-color: #03a9f4;
    border-radius: 30px;
    color: #fff;
    font-size: 1em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    border: 5px solid #083d41;
    box-shadow: 0 0 0 10px #fff;
    transition: .5s;
}

.card .box .content button:hover {
    letter-spacing: 0.5em;
    background-color: #ff3d7f;
}

.card .box .content button::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;
    position: absolute;
    top: 23px;
    left: -29px;
    border-top-right-radius: 20px;
    box-shadow: 5px -7px #fff;
}

.card .box .content button::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: transparent;
    position: absolute;
    top: 23px;
    right: -29px;
    border-top-left-radius: 20px;
    box-shadow: -5px -7px #fff;
}</style>
