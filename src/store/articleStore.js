import { defineStore } from "pinia";

export const useArticleStore = defineStore("articleStore", {
    state: () => {
        return {
            menuId: null,
            title: '',
            summary: '',
            content: ''
        };
    },
    persist: true
});
