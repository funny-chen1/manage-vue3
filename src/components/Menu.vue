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
        <!-- <el-menu background-color="#222832" text-color="#fff" :router="true" :default-openeds="state.defaultOpen"
            :default-active='state.currentPath'>
            <el-sub-menu index="1">
                <template #title>
                    <span>Dashboard</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/"><el-icon>
                            <Odometer />
                        </el-icon>首页</el-menu-item>
                    <el-menu-item index="/add"><el-icon>
                            <Plus />
                        </el-icon>添加商品</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <span>首页配置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/swiper"><el-icon>
                        </el-icon>轮播图配置</el-menu-item>
                    <el-menu-item index="/hot"><el-icon>
                            <StarFilled />
                        </el-icon>热销商品配置</el-menu-item>
                    <el-menu-item index="/new"><el-icon>
                            <Sell />
                        </el-icon>新品上线配置</el-menu-item>
                    <el-menu-item index="/recommend"><el-icon>
                            <ShoppingCart />
                        </el-icon>为你推荐配置</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <span>模块管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/category"><el-icon>
                        </el-icon>分类管理</el-menu-item>
                    <el-menu-item index="/good"><el-icon>
                            <Goods />
                        </el-icon>商品管理</el-menu-item>
                    <el-menu-item index="/guest"><el-icon>
                            <User />
                        </el-icon>会员管理</el-menu-item>
                    <el-menu-item index="/order"><el-icon>
                            <List />
                        </el-icon>订单管理</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/account"><el-icon>
                            <Lock />
                        </el-icon>修改密码</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu> -->
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
            {name: '列表拖拽', path: '/draggable', isActive: true}
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