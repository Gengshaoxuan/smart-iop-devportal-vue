import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import Register from '@/views/login/register'
import HelpCenter from '@/views/helpCenter/helpCenter'
import ProductCenter from '@/views/productCenter/productCenter'
import Message from '@/views/message/message'
import PersonCenter from '@/views/personCenter/personCenter'
import MyApplication from '@/views/myApplication/myApplication'
import ProductIntroduction from '@/views/productCenter/productIntroduction'

Vue.use(Router)

export default new Router(
  {
    mode: 'history',

    routes: [
      {
        //重定向
        path: '*',
        redirect: Home
      },
      {
        //  ‘/’匹配主页
        path: '/',
        component: Home,
      },
      {
        //主页
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        //登录
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        //注册
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        //帮助中心
        path: '/helpCenter',
        name: 'helpCenter',
        component: HelpCenter
      },
      {
        //产品中心
        path: '/productCenter',
        name: 'productCenter',
        component: ProductCenter
      },
      {
        //站内信
        path: '/message',
        name: 'Message',
        component:Message 
      },
      {
        //个人中心
        path: '/personCenter',
        name: 'PersonCenter',
        component: PersonCenter
      },{
        //我的应用
        path: '/myApplication',
        name: 'MyApplication',
        component: MyApplication
      },
      {
        //产品介绍
        path: '/productIntroduction',
        name: 'ProductIntroduction',
        component: ProductIntroduction
      }
      
    ]
  })
