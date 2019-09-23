import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import Register from '@/views/login/register'
import Certification from '@/views/certification/certification'
import BasicInformation from '@/views/basicInformation/basicInformation'
import Notify from '@/views/notify/notify'
import HelpCenter from '@/views/helpCenter/helpCenter'
import ProductCenter from '@/views/productCenter/productCenter'
import Message from '@/views/message/message'
import PersonCenter from '@/views/personCenter/personCenter'
import MyApplication from '@/views/myApplication/myApplication'
import ProductIntroduction from '@/views/productCenter/productIntroduction'
import NewsCenter from '@/views/newsCenter/newsCenter'
import NewsCenterDetail from '@/views/newsCenter/newsCenterDetail'
import agreement from '@/views/agreement/agreement'
import ResetPassword from '@/views/resetPassword/resetPassword'
import UpdatePhone from '@/views/updatePhone/updatePhone'
import UpdateEmail from '@/views/updateEmail/updateEmail'
import UpdatePass from '@/views/updatePass/updatePass'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [{
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
            component: Message
        },
        {
            //个人中心
            path: '/personCenter',
            name: 'PersonCenter',
            component: PersonCenter,
            children: [{
                    //基本信息
                    path: '/basicInformation',
                    name: 'basicInformation',
                    component: BasicInformation
                },
                {
                    //实名认证
                    path: '/certification',
                    name: 'certification',
                    component: Certification
                },
                {
                    //消息通知
                    path: '/notify',
                    name: 'notify',
                    component: Notify
                },
            ]
        }, {
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
        },
        {
            //新闻中心
            path: '/newsCenter',
            name: 'NewsCenter',
            component: NewsCenter
        },
        {
            //新闻中心详情
            path: '/newsCenterDetail',
            name: 'NewsCenterDetail',
            component: NewsCenterDetail
        },
        {
            //注册协议
            path: '/agreement',
            name: 'agreement',
            component: agreement
        },
        {
            //忘记密码
            path: '/resetPassword',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            //修改手机号
            path: '/updatePhone',
            name: 'UpdatePhone',
            component: UpdatePhone
        },
        {
            //修改邮箱
            path: '/updateEmail',
            name: 'UpdateEmail',
            component: UpdateEmail
        },
        {
            //修改密码
            path: '/updatePass',
            name: 'UpdatePass',
            component: UpdatePass
        }

    ]
})