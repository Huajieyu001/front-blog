import { defineStore } from "pinia";

export const useArticleStore = defineStore("articleStore", {
    state: () => {
        return {
            title: '',
            summary: '',
            content: ''
        };
    },
    persist: true
});
