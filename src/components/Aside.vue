<template>
    <div class="aside">
        <Profile></Profile>
        <Operation></Operation>
        <Menu></Menu>
        <!-- <div v-for="(item) in categories" :key="item.id" class="nav-item" :class="{active: item.isActive}" @click="selectMenu(item.id, item.isActive)">{{ item.menuName }}</div> -->
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import Profile from './Profile.vue';
import Menu from './Menu.vue';

</script>
<style>
.aside{
    background-color: rgb(15, 35, 43);
    /* padding: 10px; */
    height: 100%;
}
</style>