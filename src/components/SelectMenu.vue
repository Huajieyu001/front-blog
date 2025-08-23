<template>
    <el-select v-model="selectedMenuId" placeholder="Select" style="width: 240px">
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
import { watchEffect, ref } from 'vue';

const selectedMenuId = ref(null)

const menuStore = useMenuStore()
const articleStore = useArticleStore()

watchEffect(()=>{
  articleStore.menuId = selectedMenuId.value
})
</script>

<style scoped>
</style>