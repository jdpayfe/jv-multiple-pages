import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: 'page2'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) { // 滚到顶部
    return {x: 0, y: 0}
  }
})

// 全局路由配置 路由开始之前的操作
router.beforeEach((to, from, next) => {
  // 切换标题
  document.title = to.meta.title
  document.querySelector('title').innerText = to.meta.title

  next()
})

// 路由完成之后的操作
router.afterEach(route => {

})


export default router
