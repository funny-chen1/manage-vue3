<template>
    <div>
        <el-menu background-color="#222832" text-color="#fff" :router="true" :default-openeds="state.defaultOpen"
            :default-active='route.path'>
            <el-sub-menu v-for="item, index in state.menuData" :key="index" :index="item.index">
                <template #title>
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="page, key in item.pages" :key="key" :index="page.path">
                        <el-icon v-if="page.icon">
                            <component :is="page.icon"></component>
                        </el-icon>
                        {{ page.name }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const state = reactive({
  showMenu: true,
  defaultOpen: ['1'],
  currentPath: '/',
  menuData: [
    {
        title: '例子',
        index: 1,
        isActive: true,
        pages: [
            {name: '首页', path: '/index', icon: 'Edit', isActive: true},
            {name: '盒子拉伸', path: '/stretch', isActive: true},
            {name: '列表拖拽', path: '/draggable', isActive: true},
            {name: '随机抽取', path: '/random', isActive: true}
        ]
    },
    {
        title: '样式动画',
        index: 2,
        isActive: true,
        pages: [
            {name: '介绍卡片', path: '/card', isActive: true},
            {name: '动态词云', path: '/word_cloud', isActive: true},
            {name: '卡片滑动', path: '/card_slide', isActive: true}
        ]
    }
  ]
})

onMounted(async => {
    console.log(route.path)
})



</script>

<style lang="scss" scoped></style>
