<!-- <template>
  <el-row :gutter="200">
    <el-col :span="distance" v-for="(item, index) in menuItems" :key="index">
        <div @click="toTopMenu(item.link)" class="menu-item">{{ item.label }}</div>
    </el-col>
  </el-row>
</template> -->

<!-- <script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router'

const distance = ref(0)

const router = useRouter()

// 菜单项数据
const menuItems = reactive([
  { label: '文章管理', link: '/articleManage' },
  { label: '菜单管理', link: '/menuManage' },
  { label: '信息管理', link: '/infoManage' },
]);

const toTopMenu = (path) => {
  router.push({
    path
  })
}

watchEffect(()=>{

  console.log(menuItems)
  if(menuItems.length){
    distance.value = 24 / menuItems.length;
    console.log('@@@@@@@@', distance.value)
  }
})


</script> -->
<template>
  <div class="tabe"></div>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item v-for="(menu, index) in menuItems" :key="menu.label" :index="index">
      <template #title><span>{{ menu.label }}</span></template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const menuItems = reactive([
  {
    label: '用户管理',
    link: '/aaa'
  },
  {
    label: '文章管理',
    link: '/bbb'
  },
    {
    label: '新增文章',
    link: '/article'
  },
  {
    label: '推荐管理',
    link: '/ccc'
  }
])

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.tabe{
  background-color: black;
  height: 30px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 90vh;
  background-color: aquamarine;
}
</style>
