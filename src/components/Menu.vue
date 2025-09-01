<template>
    <div class="menu">
        <el-scrollbar max-height="400">
            <div v-for="(item) in menuStore.menus"
                :key="item.id" class="nav-item"
                :class="{active: item.id == menuStore.currentMenuId}"
                @click="selectMenu(item.id, item.isActive)">{{ item.name }}</div>
        </el-scrollbar>
    </div>
</template>
<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useMenuStore } from '../store/menuStore';
import { useRouter } from 'vue-router';
import { useHomeStore } from '../store/homeStore';
import http from '../axios/httpUtils';

const homeStore = useHomeStore()
const menuStore = useMenuStore()
const router = useRouter()
const selectedMenuId = ref(1)

function selectMenu(categoryId){
    menuStore.currentMenuId = categoryId
}
</script>
<style>

.menu {
    border: #87c48c solid 0.5px;
    padding: 10px;
    margin: 10px;
    /* border-radius: 10px; */
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