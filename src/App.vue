<template>
  <div class="common-layout">
    <el-container  v-if="token">
      <el-header>
        <div class="head">
          <img src="./assets/funny.png" alt="">
          <span>MODE</span>
        </div>
        <div class="info">
          {{ token }}
          <el-button @click="logout()" type="danger">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <Menu></Menu>
        </el-aside>
        <el-container class="container">
          <router-view></router-view>
        </el-container>
      </el-container>
    </el-container>
    <el-container  v-else>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './components/Menu.vue'
import { useRouter } from 'vue-router';
import { getLocal, removeLoacal } from './utils';

const router = useRouter()
const token = getLocal('token')

const logout = () => {
  removeLoacal('token')
  router.go(0)
}


</script>

<style lang="scss" scoped>

.el-container {
  height: 100vh;
}


.el-header {
  background: #222832;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #fff;
}

.head {
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
  }
}

.el-aside {
  width: 200px;
  background-color: #222832;
  color: #fff;
}

.el-main {
  overflow: auto;
  padding: 10px;
}</style>
