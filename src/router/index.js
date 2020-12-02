import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import loginzhen from '../views/loginzhen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/Login',
        name: 'Login',
        component: () => import ('@/views/Login.vue')
      },
     
    ]
  },
  {
    path: '/Loginzhen',
    name: 'Loginzhen',
    component: () => import ('@/views/Loginzhen.vue'),
    redirect: '/Yonghuming',
    children: [
      {
        path: '/yonghuming',
        name: 'yonghuming',
        component: () => import ('@/views/Yonghuming.vue')
      },
      {
        path: '/shoujihao',
        name: 'shoujihao',
        component: () => import ('@/views/Shoujihao.vue')
      },
    ]
  }
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


export default router