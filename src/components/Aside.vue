<template>
    <div class="aside">
        <Profile></Profile>
        <!-- <Menu></Menu> TODO: 0901-->
        <!-- <div v-for="(item) in categories" :key="item.id" class="nav-item" :class="{active: item.isActive}" @click="selectMenu(item.id, item.isActive)">{{ item.menuName }}</div> -->
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import Profile from './Profile.vue';
import Menu from './Menu.vue';

</script>
<style>
.aside {
    /* background-color: rgb(15, 35, 43); */
    /* background-color: rgb(162, 218, 241); */
    background-color: rgb(235, 238, 201);
    /* padding: 10px; */
    height: 100%;
}
</style>