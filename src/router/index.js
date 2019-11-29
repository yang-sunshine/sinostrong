import Vue from 'vue'
import VueRouter from 'vue-router' // 引入vue-router

import Login from '@/components/Login' // 引入登录组件
import HelloWorld from '@/components/HelloWorld' // 引入登录组件
import Navigation from '@/components/Navigation' // 引入登录组件


Vue.use(VueRouter) //使用vue-router
export default new VueRouter({
    routes: [
        {
            path: "/HelloWorld",
            name: "HelloWorld",
            component: HelloWorld // 引入组件方式1
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login // 引入组件方式2
        },
        {
            path: '/Navigation',
            name: 'Navigation',
            component: Navigation // 引入组件方式2
        },
        {
            path: "/",
            name: "login",
            component: Login
        }
    ]
})