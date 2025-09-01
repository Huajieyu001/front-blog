import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Hello from "../views/Hello.vue";
import ArticleDetail from "../components/ArticleDetail.vue";
import Manage from "../components/Manage.vue";
import Publish from "../components/Publish.vue";
import WebRed from "../views/WebRed.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ArticleManage from "../views/ArticleManage.vue";
import ManageMenu from "../components/ManageMenu.vue";
import ManageArticle from "../components/ManageArticle.vue";
import NotFount from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '花解语的札记'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFount',
        component: NotFount,
    },
    {
        path: '/webRed',
        name: 'WebRed',
        component: WebRed,
    },
    {
        path: '/article',
        name: 'Article',
        component: Article,
        meta: {
            requiresAuth: true,
            title: '写文章'
            }
    },
    {
        path: '/articleDetail',
        name: 'ArticleDetail',
        component: ArticleDetail,
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/manage',
        name: 'Manage',
        component: Manage,
        meta: {
            requiresAuth: true,
            title: '管理中心'
        },
        children:[
            {
                path: '/manage/menu',
                name: 'ManageMenu',
                component: ManageMenu,
                meta: {requiresAuth: true}
            },
            {
                path: '/manage/article',
                name: 'ManageArticle',
                component: ManageArticle,
                meta: {requiresAuth: true}
            }
        ]
    },
    {
        path: '/publish',
        name: 'Publish',
        component: Publish,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/articleManage',
        name: 'ArticleManage',
        component: ArticleManage,
        meta: {requiresAuth: true}
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        if(!localStorage.getItem('huajieyu_blog_auth')){
            return next({
                name: 'Login',
            })
        }
    }
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()
})

export { router }