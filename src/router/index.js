import {createRouter, createWebHistory} from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue"
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'
import Detail from "@/views/Detail/Detail.vue";
import CartList from "@/views/CartList/index.vue"
import CheckOur from '@/views/Checkout/index.vue'
import pay from '@//views/payp/index.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,

            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                },
                {
                    path: 'category/sub/:id',
                    name: 'subCategory',
                    component: SubCategory
                },
                {
                    path: 'detail/:id',
                    component: Detail
                },
                {
                    path:'/cartlist',
                    component: CartList
                },
                {
                    path:"/checkout",
                    component: CheckOur
                },
                {
                    path:'/pay',
                    component:pay
                }
            ],

        },
        {
            path: '/login',
            component: Login
        },

    ],
    scrollBehavior: () => ({ top: 0 }),
})
export default  router
