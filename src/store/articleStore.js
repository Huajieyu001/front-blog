import { defineStore } from "pinia";

const useArticleStore = defineStore("articleStore", {
    state: () => {
        return {
            menuId: null,
            title: '',
            summary: '',
            content: ''
        };
    },
    // 持久化设置为session级别
    persist: {
        storage: sessionStorage,
        key: 'huajieyu_blog_article'
    }
});

const clearArticleStore = ()=>{
    const articleStore = useArticleStore()
    articleStore.menuId = null
    articleStore.title= ''
    articleStore.summary= ''
    articleStore.content= ''
}

export { useArticleStore, clearArticleStore}