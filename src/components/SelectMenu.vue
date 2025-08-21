<template>
    <el-select v-model="articleStore.menuId" placeholder="Select" style="width: 240px">
        <el-option
        v-for="item in menuStore.menus"
        :key="item.id"
        :label="item.name"
        :value="item.id"
        />
  </el-select>
</template>

<script setup>
import { useMenuStore } from '../store/menuStore';
import { useArticleStore } from '../store/articleStore';

const menuStore = useMenuStore()
const articleStore = useArticleStore()
</script>

<style scoped>
</style>