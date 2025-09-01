import { defineStore } from "pinia";

export const useMenuStore = defineStore('menuStore', {
    state: ()=>(
        {
            menus: [{id: null, name: '全选'}],
            currentMenuId: null
        }
    )
})