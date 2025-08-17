import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Hello from "../views/Hello.vue";

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
        path: '/hello',
        name: 'Hello',
        component: Hello
    }
]


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
