import { defineStore } from "pinia";

export const useMenuStore = defineStore('menuStore', {
    state: ()=>(
        {
            menuList: [
                {menuName: 'AAA', id: 0, isActive: true}, 
                {menuName: 'BBB', id: 1, isActive: false}, 
                {menuName: 'CCC', id: 2, isActive: false}, 
                {menuName: 'DDD', id: 3, isActive: false}, 
                {menuName: 'EEE', id: 4, isActive: false}, 
                {menuName: 'FFF', id: 5, isActive: false}, 
                {menuName: 'GGG', id: 6, isActive: false}, 
                {menuName: 'HHH', id: 7, isActive: false}, 
                {menuName: 'KKK', id: 8, isActive: false}
            ]
        }
    )
})