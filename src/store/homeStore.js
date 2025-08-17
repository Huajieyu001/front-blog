import { defineStore } from "pinia";

export const useHomeStore = defineStore('homeStore', {
    state: ()=>({
        isHome: true
    })
})