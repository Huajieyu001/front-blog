<template>
    <div>
        <div v-for="(item) in categories" :key="item.id" class="nav-item" :class="{active: item.isActive}" @click="selectMenu(item.id, item.isActive)">{{ item.menuName }}</div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
const categories = reactive(
    [
        {menuName: 'AAA', id: 0, isActive: true}, 
        {menuName: 'BBB', id: 1, isActive: false}, 
        {menuName: 'CCC', id: 2, isActive: false}, 
        {menuName: 'DDD', id: 3, isActive: false}, 
        {menuName: 'EEE', id: 4, isActive: false}, 
        {menuName: 'FFF', id: 5, isActive: false}, 
        {menuName: 'GGG', id: 6, isActive: false}, 
        {menuName: 'HHH', id: 7, isActive: false}, 
        {menuName: 'III', id: 8, isActive: false}
    ]
)

function selectMenu(categoryId, isActive){
    if(isActive){
        return
    }
    categories.forEach((e)=>{
        if(e.id == categoryId){
            e.isActive = true;
        } else {
            e.isActive = false
        }
    })
}
</script>
<style lang="css">

.menu {
    font-size: 20px;
} 

.nav-item {
    padding: 12px 15px;
    margin-bottom: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-item:hover {
    background: #5bbce2;
    transform: translateX(5px); 
}

.active {
    background: #3498db;
    color: white;
}
</style>