import { defineStore } from "pinia";

export const useMenuStore = defineStore('menuStore', {
    state: ()=>(
        {
            menus: [],
            currentMenuId: 0
        }
    ),
    persist: true
})