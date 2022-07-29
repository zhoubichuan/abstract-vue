import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Index from '@/views/Index'
import UserList from '@/views/User/UserList'
import UserInfo from '@/views/User/UserInfo'
import Upload from '@/views/User/Upload'
import OrderList from '@/views/Order/OrderList'
import OrderTag from '@/views/Order/OrderTag'
import SalesList from '@/views/Sales/SalesList'
import ClientList from '@/views/Client/ClientList'
import ClientType from '@/views/Client/ClientType'
import Payment from '@/views/Client/Payment'
import Comment from '@/views/Comments/comment'
import Product from '@/views/Product/Product'
import store from '../store'
import service from '@/util/request.js'
import {
  getCookie
} from '../util/cookies'
Vue.use(Router)
let router = new Router({
  base: 'abstract-vue',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: '/admin/DataEntity', // 登录成功后跳转的位置
    children: [
      {
        path: 'dataEntity',
        name: 'dataEntity',
        authority: [50],
        meta: {
          requireAuth: true // 添加需要权限的标记
        },
        component: () => import('@/views/DataModel/DataEntity')
      },
      {
        path: 'relationEntity',
        name: 'relationEntity',
        authority: [50],
        meta: {
          requireAuth: true // 添加需要权限的标记
        },
        component: () => import('@/views/DataModel/RelationEntity')
      },
      {
        path: 'dataInstance',
        name: 'dataInstance',
        authority: [50],
        meta: {
          requireAuth: true // 添加需要权限的标记
        },
        component: () => import('@/views/DataModel/DataInstance')
      },
      {
        path: 'tags',
        name: 'tags',
        authority: [50],
        meta: {
          requireAuth: true // 添加需要权限的标记
        },
        component: () => import('@/views/SystemBaseInfo/Tags')
      },
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'userList',
        name: 'userList',
        component: UserList
      },
      {
        path: 'userInfo/:id',
        name: 'userInfo',
        component: UserInfo
      },
      {
        path: 'upload',
        name: 'upload',
        component: Upload
      },
      {
        path: '/order/list',
        name: 'OrderList',
        component: OrderList
      },
      {
        path: '/order/tag',
        name: 'OrderTag',
        component: OrderTag
      },
      {
        path: '/product/list',
        name: 'Product',
        component: Product
      },
      {
        path: '/sales/list',
        name: 'SalesList',
        component: SalesList
      },
      {
        path: '/client/list',
        name: 'ClientList',
        component: ClientList
      },
      {
        path: '/client/type',
        name: 'ClientType',
        component: ClientType
      },
      {
        path: '/client/pay',
        name: 'Payment',
        component: Payment
      },
      {
        path: 'comment',
        name: 'comment',
        component: Comment
      },
      {
        path: '*',
        redirect: '/admin'
      }
    ]
  }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.matched.some(res => res.meta.requireAuth)) { // 判读是不是要权限登录
  let sessionId = getCookie('sessionId')
  if (to.path !== '/') {
    service.post('/users/checklogin', {
      'sessionId': sessionId
    }).then(res => {
      if (res.status === 200) {
        if (!store.state.userId) {
          store.commit('SET_USERID', res.result._id)
          store.commit('SET_USERNAME', res.result.info.username)
          store.commit('SET_AVATAR', res.result.info.avatar)
          store.commit('SET_INFOID', res.result.info._id)
          store.commit('SET_ROLE', res.result.role)
        }
        next()
      } else {
        next('/')
      }
    })
  } else {
    next()
  }
  // } else {
  //     next() // 不是就直接去渲染路由
  // };
})
export default router
