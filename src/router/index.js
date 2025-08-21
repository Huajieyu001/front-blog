import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Hello from "../views/Hello.vue";
import ArticleDetail from "../components/ArticleDetail.vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import Manage from "../components/Manage.vue";

const routes = [
    {
        path: '/',
        component: Home,
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
    }
]


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
