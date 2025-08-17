<template>
    <div class="menu">
        <div v-for="(item) in menuStore.menuList" :key="item.id" class="nav-item" :class="{active: item.isActive}" @click="selectMenu(item.id, item.isActive)">{{ item.menuName }}</div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useMenuStore } from '../store/menuStore';
import { useRouter } from 'vue-router';
import { useHomeStore } from '../store/homeStore';

const homeStore = useHomeStore()
const menuStore = useMenuStore()
const router = useRouter()

function selectMenu(categoryId, isActive){
    if(isActive){
        return
    }
    menuStore.menuList.forEach((e)=>{
        if(e.id == categoryId){
            e.isActive = true;
        } else {
            e.isActive = false
        }
    })
    router.push('/article')
    console.log("router.push('/article')")
}
</script>
<style>

.menu {
    border: #87c48c solid;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgb(216, 228, 224);
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