import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        // 例子
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/Index.vue')
        },
        {
            path: '/stretch',
            name: 'stretch',
            component: () => import('@/views/Stretch.vue')
        },
        {
            path: '/draggable',
            name: 'draggable',
            component: () => import('@/views/Draggable.vue')
        },
        {
            path: '/random',
            name: 'random',
            component: () => import('@/views/Random.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        // 样式动画
        {
            path: '/card',
            name: 'card',
            component: () => import('@/views/Card.vue')
        },
        {
            path: '/word_cloud',
            name: 'word_cloud',
            component: () => import('@/views/WordCloud.vue')
        },
        {
            path: '/card_slide',
            name: 'card_slide',
            component: () => import('@/views/CardSlide.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (to.path === '/login') {
      next()
    } else {
      if (token) {
        next()
      } else {
        next({path: '/login'})
      }
    }
    document.title = to.name;
})


export default router;
