<template>
      <nav class="top-menu">
        <!-- 使用 ul 和 li 创建菜单项 -->
        <ul class="menu-list">
        <li v-for="(item, index) in manageMenu" :key="item.id" class="menu-item">
            <a :href="item.link" class="menu-link">{{ item.label }}</a>
        </li>
        </ul>
    </nav>

    <ul class="manageMenuGroup">
        <li class="manageMenu" v-for="item in manageMenu" :index="item.id" :key="item.id" @click="toManagePage(item.id)">
            <span>{{ item.name }}</span>
        </li>
    </ul>

    <pre>
        suhgkdnb 
    </pre>
    
  </template>
  
<script setup>
import { reactive } from 'vue'

const manageMenu = reactive([
    {
        id: 1,
        name: '账户'
    },
    {
        id: 2,
        name: '类型'
    },
    {
        id: 3,
        name: '文章'
    }
])

const toManagePage = (id)=>{
    console.log(id)
}

</script>

<style scoped>
.manageMenuGroup{
    background-color: rgb(24, 73, 116);
    display: flex;
    width: 100vw;
    position: fixed;
}


.manageMenu{
    max-width: 20vw;
}
</style>
  