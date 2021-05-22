import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: { title: '首页' }
  },
  {
    path: '/home/:page',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: { title: '首页' , params: 'page' }
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/views/Archive'),
    meta: { title: '归档' }
  },
  {
    path: '/article/:blogId',
    name: 'article',
    component: () => import('@/views/Article'),
    meta: { title: '文章' }
  },
  {
    path: '/search/:pageWord/:page',
    name: 'search',
    component: () => import('../views/Home'),
    meta: { title: '搜索', params: ['pageWord', 'page'] }
  },
  {
    path: '/category/:pageCateId/:page',
    name: 'category',
    component: () => import('../views/Home'),
    meta: { title: '分类', params: ['pageCateId', 'page'] }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//挂载路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    if (store.state.siteInfo.webTitleSuffix) {
      document.title = to.meta.title + store.state.siteInfo.webTitleSuffix
    } else {
      document.title = to.meta.title
    }
  }
  next()
})
export default router
