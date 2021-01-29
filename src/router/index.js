import Vue from 'vue'
import VueRouter from 'vue-router'
// import MSite from '../pages/MSite/MSite'
// import Search from '../pages/Search/Search'
// import Profile from '../pages/Profile/Profile'
// import Order from '../pages/Order/Order'

const MSite = () => import('../pages/MSite/MSite')
const Search = () => import('../pages/Search/Search')
const Profile = () => import('../pages/Profile/Profile')
const Order = () => import('../pages/Order/Order')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite, // 返回路由组件的函数，只有请求时才执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
