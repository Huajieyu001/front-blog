<template>
    <div class="layout">
        <el-splitter>
            <el-splitter-panel class="aside-panel" :size="150" :max="150">
                <el-menu
                  class="el-menu-vertical-demo"
                >
                  <el-menu-item v-for="(menu, index) in menuItems" :key="menu.label" :index="index" @click="changeView(menu.link)">
                    <template #title><span>{{ menu.label }}</span></template>
                  </el-menu-item>
                </el-menu>
            </el-splitter-panel>
            <el-splitter-panel>
                <router-view></router-view>
            </el-splitter-panel>
        </el-splitter>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = reactive([
{
    label: '返回首页',
    link: '/'
  },
  {
    label: '菜单管理',
    link: '/manage/menu'
  },
  {
    label: '文章管理',
    link: '/manage/article'
  },
])

const changeView = (link)=>{
    router.push(link)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  background-color: rgb(196, 231, 220);
}

.layout{
    display: flex;
    background-color: #fef9f4;
    border: solid 0.5px skyblue;
}
</style>
