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

const routes = [
    {
        path: '/',
        component: Home,
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
        component: Manage
    },
    {
        path: '/publish',
        name: 'Publish',
        component: Publish
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
        component: ArticleManage
    },
]


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
